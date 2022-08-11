import "./App.css";

import Topbar from "./components/topbar/topbar.component";
import Navbar from "./components/navbar/navbar.component";
import WelcomeText from "./components/welcom text/welcome-text.component";
import DetailsContainer from "./components/details/container/container.component";

function App() {
  return <div className="App">
    <Topbar />
    <Navbar />
    <WelcomeText />
    <DetailsContainer />
  </div>;
}

export default App;
