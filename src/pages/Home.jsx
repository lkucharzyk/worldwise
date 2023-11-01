import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav></Nav>
      <h1>Worldwisee</h1>
      <Link to="app">App</Link>
    </div>
  );
}

export default Home;
