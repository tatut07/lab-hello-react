import Icon1 from "./icon1";
import Icon2 from "./icon2";
import Icon3 from "./icon3";
import Icon4 from "./icon4";

function Gallery() {
    return (
        <div id="gallery">
            <div className="icons">
            <icon1/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icons">
            <icon2/>
            <h2>Components</h2>
            <p>Being encapsulated components that manage their state.</p>
            </div>
            <div className="icons">
            <icon3/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="icons">
            <icon4/>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Gallery