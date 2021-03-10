import { useState } from "react";
import './Carousel.css';
function Carousel(props) { 
    const [activeChild, setActiveChild] = useState(0);
    const [galleryActive, openGallery] = useState(false);
    let length = props.children.length
    
    function prev(){
        if(activeChild === 0){
            setActiveChild( length + (activeChild - 1) % length);
        } else {
            setActiveChild( (activeChild - 1) % length );
        }
    }

    function next(){
        setActiveChild( (activeChild + 1) % length );
    }

    function log(params) {
        console.log("clicked");
    }

    function Gallery(galleryProps){
        return(
            <div className="gallery">
                <div className="g-container">
                    <a className="icon solid fas fa-times" onClick={() => openGallery(false)}></a>
                    {props.children[activeChild]}
                    <div className="navigation">
                        <a className="icon solid fas fa-caret-left" onClick={prev}></a>
                        <a className="icon solid fas fa-caret-right" onClick={next}></a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="carousel-wrapper">
            <div className="carousel-container" onClick={() => openGallery(true)}>
                <div className="image">
                    {props.children[activeChild]}
                </div>
                <div className="zoom icon solid fas fa-search-plus"></div>
            </div>
            <div className="controls">
                <a className="icon solid fas fa-caret-left" onClick={prev}></a>
                <a className="icon solid fas fa-caret-right" onClick={next}></a>
            </div>
            {galleryActive && <Gallery />}
        </div>
    )
}
export default Carousel;