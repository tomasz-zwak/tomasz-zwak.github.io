---
layout: post
title: TypeORM's findOne behavior with null and undefined values.
lead: It's easy to introduce critical bugs with this one!
---

During my time working with TypeORM I've noticed a concerning behavior of *findOne* method.

There is even a [github issue](https://github.com/typeorm/typeorm/issues/2500) in the TypeORM's repository - it was opened on July 2018 and the issue is still with us to this day.

What's all that about? Let's see it with an example:

Let's say we have a table of contacts as in the picture below and we want to search for one with a specific ID:

![table](https://user-images.githubusercontent.com/73128446/167811431-daccdbfa-9173-43d6-a723-a211986045e4.png)

Using Typeorm's repository API:

```typescript
await contactRepository.findOne(5) // {id: 5, firstName: 'Juana', lastName: 'Legros'...)
```
That works as expected.

But what if we wanted to search by contact ID that is a variable which value comes from DTO, and it may sometimes be undefined?

```typescript
const contactId = undefined
await contactRepository.findOne(contactId) // the result is still {id: 5, firstName: 'Juana', lastName: 'Legros'...)
```
To my surprise we still get the same result (I for one expected an `undefined`)

Why does that happen?

Typeorm's findOne we used in this example is declared as follows (there are of course more overloads to this method):
```typescript
 /**
  * Finds first entity that matches given options.
  */
 findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;
```

So all the parameters are, in fact, optional.
When you call `findOne()` method without parameters you will get the first row from a table (with the lowest `id`).
If by some chance an undefined value makes it's way into your `findOne()` method it would be the same as calling it without parameters, you will still get a result when you may not expect one.

Since TypeORM v0.3 the `findOne` method signature has changed to the following:
```typescript
/**
 * Finds first entity by a given find options.
  * If entity was not found in the database - returns null.
*/
findOne(options: FindOneOptions<Entity>): Promise<Entity | null>;
```

At a first glance it may seem as the issue is solved, but it is actually still there. Nothing stops you from calling this method with an empty object:
```typescript
const contactId = undefined
await contactRepository.findOne(contactId) // You've guessed right, it still returns the first row from the database: {id: 5, firstName: 'Juana', lastName: 'Legros'...)
```

What's the takeaway here? Make sure you always sanitize values that are passed into TypeORM methods. It may sound obvious, but I've seen a fair share of code where such practices get lost in translation. 

Stay safe out there!