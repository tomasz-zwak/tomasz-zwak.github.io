---
layout: post
title: TypeORM - running migrations in separate transactions
lead: Save ourselves some time, shall we?
---

Let's say we have a project with hundreds of migrations, and for some reason you have to rebuild the whole schema from ground-up. 

By default TypeORM runs all migrations in a single transaction so if something near the end fails, the whole progress is lost and you have to rerun all of them again.

Fortunately, there is a way to instruct TypeORM to run each migration in a separate transaction:

```
typeorm migration:run -t each
```

What's interesting, typing `typeorm migration:run -t` in terminal won't give us a list of options, and documentation also doesn't specify them (at least I couldn't find it).

We can inspect list of available options in `node_modules/typeorm/commands/MigrationGenerateCommand.js`

```javascript
switch (args.t) {
  case "all":
    options.transaction = "all";
    break;
  case "none":
  case "false":
    options.transaction = "none";
    break;
  case "each":
    options.transaction = "each";
    break;
  default:
    // noop
}
```
 Let's try it out:
 
 First, we generate a migration that adds a Customer table, notice we have unique index on `name`:
 ```typescript
 export class addCustomer1657889795075 implements MigrationInterface {
  name = 'addCustomer1657889795075';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_ac1455877a69957f7466d5dc78" ON "customer" ("name") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ac1455877a69957f7466d5dc78"`,
    );
    await queryRunner.query(`DROP TABLE "customer"`);
  }
}
 ```
 Next, let's define a migration that fails - let's say we insert duplicate `name` to `customer` table:
 
 ```typescript
 export class addDefaultsToCustomer1657889827769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "customer" ("name") VALUES ('Selleo')`);
    await queryRunner.query(`INSERT INTO "customer" ("name") VALUES ('Selleo')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "customer"`);
  }
}
 ```
 
Let's run it in normal mode with `typeorm migration:run` and inspect the output:

```
Migration "addDefaultsToCustomer1657889827769" failed, error: duplicate key value violates unique constraint "IDX_ac1455877a69957f7466d5dc78"
```
We were smart enough to know it will fail, inspecting the database schema in pgAdmin also tells us that much:
![no-changes](https://user-images.githubusercontent.com/73128446/179234968-68ed5302-f731-43da-8fd0-5d45e745f91d.png)

But if we run it with `typeorm migration:run -t each`
we can see the first migration was applied, event though the second one failed:

The table was correctly added:
![changed-schema](https://user-images.githubusercontent.com/73128446/179236154-031a41dd-b365-4563-9417-c70c56b9350f.png)

And no data was inserted:
![no-data-inserted-proof](https://user-images.githubusercontent.com/73128446/179236213-0c299268-5095-473d-af99-cd2b78af8f70.png)

This way we can save ourselves some time when running a lot of migrations.

## ** IMPORTANT! ** 
<b>Be careful when applying this technique in CI/CD pipelines using MySQL database, because some operations there have <u>implicit commit</u>, for example `CREATE TABLE` or `ALTER TABLE`. This means schema changes won't be rolled back even if something later in transaction fails. Read more about [implicit commits](https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html) and [transactional DDL in different database engines.](https://wiki.postgresql.org/wiki/Transactional_DDL_in_PostgreSQL:_A_Competitive_Analysis) <br><u>Example below uses PostgreSQL database where DDL changes do not cause auto-commiting.</u></b>