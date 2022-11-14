import "./App.css";
import {Logo, Menu} from "./components/navbar";
import MainText from "./components/mainText";
import Button from "./components/button";
import Gallery from "./components/gallery";


function App() {
  return (
   <div className="App">
    <Logo />
    <Menu />
    <MainText />
    <Button />
    <Gallery />
   </div>
  );
}

export default App;
