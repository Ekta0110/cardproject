import './App.css';
import ReactDOM from "react-dom";
import Data from './data.json';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/header";
import UserCard from "./components/userCards";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <UserCard />
        <Footer />
        
      </div>
      
    </div>
  );
}

export default App;
