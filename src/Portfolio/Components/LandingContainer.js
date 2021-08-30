import {useSpring, animated, useChain} from 'react-spring';
import {Link} from 'react-scroll';

function LandingContainer(props){
    const anim = useSpring({
        from: {
            transform: 'translate(-200px)',
            opacity: 0
        },
            transform: 'translate(0px)',
            opacity: 1,
            config: {
                mass: 10,
                tension: 100,
                friction: 20,
                clamp: true
            }
    })
    const anim1 = useSpring({
        from: {
            transform: 'translate(200px)',
            opacity: 0
        },
            transform: 'translate(0px)',
            opacity: 1,
            config: {
                mass: 10,
                tension: 100,
                friction: 20,
                clamp: true
            }
    })

    return(
        <div className="landing-container">
            <animated.div style={anim} className="row">
                <p>
                    My name is Tomasz Żwak and I'm an IT specialist with three years of experience. 
                    <br></br>
                    <br></br>
                    Working in an IT dept. provides me with a great opportunity to use my coding skills in solving real world problems.
                    <br></br>
                    I prefer to work with Java, but I'm also familiar with C# and Javascript.
                    <br></br>
                    <br></br>
                    Ckeck out my work in sections below!
                </p>
            </animated.div>
            <animated.div style={anim1} className="row">
                <Link to="projects" className="button"
                    smooth={true}
                    offset={-20}
                    duration={500}>Projects</Link>         
                <Link to="scripts" className="button"
                    smooth={true}
                    offset={-20}
                    duration={500}>Scripts</Link>
            </animated.div>
        </div>
    )
}

export default LandingContainer;
