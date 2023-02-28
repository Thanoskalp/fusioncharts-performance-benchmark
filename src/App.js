import './App.css';
import { Outlet, Link } from "react-router-dom";
import DataGeneration from "./components/DataGeneration";

function App() {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heatmap">Heatmap charts</Link>
            </li>
            <li>
              <Link to="/DataGeneration">DataGeneration charts</Link>
            </li>
            <li>
              <Link to="/scatter">Scatter charts</Link>
            </li>
            <li>
              <Link to="/map">Map charts</Link>
            </li>
            <li>
              <Link to="/stock">Stock Charts</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
  );
}

export default App;
