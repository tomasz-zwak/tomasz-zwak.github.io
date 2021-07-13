import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {useSpring, animated} from "react-spring";

function ButtonScrollTop(props){
    const [showing, setShowing] = useState(false);
    const anim = useSpring({
        top: showing? 0 : -60,
        from: {
            top: -60
        },
        reset: showing,
        revert: showing
    });

    useEffect( () => {
        document.addEventListener('scroll',() => {
            if(window.scrollY > 200){
                setShowing(true);
            } else {
                setShowing(false);
            }
        })
    });

    function show(){
        
            return(
                <animated.div style={anim} className="scroll-top-container">
                    <Link to="landing" className="scroll-top-button button"
                                    smooth={true}
                                    offset={-20}
                                    duration={500}>
                        <i class="fas fa-chevron-up"></i>
                    </Link>
                </animated.div>
            );
        
    }

    return(
        <div>
            {show()}
        </div>
    );
}
export default ButtonScrollTop;