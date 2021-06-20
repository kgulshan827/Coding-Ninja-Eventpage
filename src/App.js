
import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Header } from "./Mycomponents/Header";
import { Body } from "./Mycomponents/Body";
import { Events } from "./Mycomponents/Evenlist";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="content">
      <Header className="header"></Header>

      <Body></Body>
  
    </div>
  );
}

export default App;
