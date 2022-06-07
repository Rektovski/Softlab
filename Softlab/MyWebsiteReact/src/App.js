import './App.css';
import Header from './MyWebsite/Header';
import Main from "./MyWebsite/Main";
import Footer from "./MyWebsite/Footer";

function App() {
  return (
      <div className="card m-3 border-2 p-2">
          <Header/>
          <Main/>
          <Footer/>
      </div>
  );
}

export default App;