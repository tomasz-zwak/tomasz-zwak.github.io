import { useFormik } from 'formik';

function Footer(props) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {

            alert(generateUrl(values));
            fetch(generateUrl(values),{
                method: "GET",
                mode: "no-cors"
            }).then(console.log);
            
        },
    });

    function generateUrl(params) {
        let baseScriptURL = 'https://script.google.com/macros/s/AKfycbwVznoQY4PHjW7VV2sPjg7dJcoveFEPv7kujRcbuBcIzCKQZ505o0HKSUxutXtaqWW_sA/exec?';
        let paramsString = Object.keys(params).map(k => `${k}=${params[k]}`).join("&");
        return `${baseScriptURL}${paramsString}`;
      }

    return (
        <footer id="footer">
        <div className="inner">
            <section>
                <h2 className="neonTextFlicker">Get in touch</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="fields">
                        <div className="field half">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Name" 
                                onChange={formik.handleChange} 
                                value={formik.values.name}
                                required/>
                        </div>
                        <div className="field half">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email" 
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                required/>
                        </div>
                        <div className="field">
                            <textarea 
                                name="message" 
                                id="message" 
                                placeholder="Message" 
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                required></textarea>
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
                    {/* <li><a className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li> */}
                    <li><a href="mailto: tomasz.zwak@gmail.com" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
            <ul className="copyright">
                <li>&copy; Tomasz Żwak - Portfolio.</li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer;