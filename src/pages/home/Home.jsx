import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        <Header title="Home" color="green"/>
        <Navbar />
        <Aside />
        <Main text="Body >>> "/>
        <Footer />
      </div>
    );
  };
  
  export default Home;
  