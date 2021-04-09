import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer'
import bgImg from './background/backgroundImg.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bgImg})`}}>
     <MainContainer/>
    </div>
  );
}

export default App;
