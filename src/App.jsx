// App.jsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Error404 from "./components/Error/Error404";
import Footer from "./components/FooterSection/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="layout">
      <header className="navbar">
        <Navbar />
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
