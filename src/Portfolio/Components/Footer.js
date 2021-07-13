function Footer(props) {
    return (
        <footer id="footer">
        <div className="inner">
            <section>
                <h2 className="neonTextFlicker">Get in touch</h2>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send" className="primary" /></li>
                    </ul>
                </form>
            </section>
            <section>
                <h2 className="neonTextFlicker delay">Follow</h2>
                <ul className="icons">
                    <li><a href="https://github.com/ttzv" className="icon brands style2 fa-github"><span className="label">Linkedin</span></a></li>
                    <li><a href="https://linkedin.com/in/tomasz-zwak/" className="icon brands style2 fa-linkedin"><span className="label">GitHub</span></a></li>
                    <li><a className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
                    <li><a className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
            <ul className="copyright">
                <li>&copy; Tomasz Żwak - Portfolio.</li>
                <li>Designed by: <a href="http://html5up.net">HTML5 UP</a></li>
                <li>Recreated in React by <a>Tomasz Żwak</a></li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer;