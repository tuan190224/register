import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {/* TODO: define public routes*/}
        {publicRoutes.map((el, i) => (
          <Route path={el.path} key={i} element={<el.component />} />
        ))}
        {/* TODO: define private routes*/}
        {/* <Route path="/" element={<PrivateRoutes />}>
      {authRoutes.map((el, i) => (
        <Route path={el.path} key={i} element={<el.component />} />
      ))}
    </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
