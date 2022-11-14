import "./App.css";
import {Logo, Menu} from "./components/navbar";
import MainText from "./components/mainText";
import Button from "./components/button";
import Gallery from "./components/gallery";


function App() {
  return (
   <div className="App">
    <div className="topArea">
    <navbar className="navBar">
    <Logo />
    <Menu />
    </navbar>
    <MainText />
    <Button />
    </div>
    <div className="bottomArea">
    <Gallery />
    </div>
   </div>
  );
}

export default App;
