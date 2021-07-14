import {useSpring, animated, useChain} from 'react-spring';

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
            opacity: 1
    })

    return(
        <div className="landing-container">
            <animated.div style={anim} className="row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src="images\av.png"></img>
            </animated.div>
            <animated.div style={anim1} className="row row-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src="images\safeaddress1.png" width="200px" height="200px"></img>  
            </animated.div>
            <animated.div style={anim} className="row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src="images\safeaddress1.png" width="200px" height="200px"></img>

            </animated.div>
            <animated.div style={anim1} className="row row-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src="images\safeaddress1.png" width="200px" height="200px"></img>
            </animated.div>
        </div>
    )
}

export default LandingContainer;
