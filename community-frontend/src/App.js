import './App.css';
<<<<<<< HEAD
import MainContainer from './containers/MainContainer';
import UserForm from './components/UserForm'
=======
import MainContainer from './containers/MainContainer'
import bgImg from './background/backgroundImg.jpg'
>>>>>>> origin/feature/inventory

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bgImg})`}}>
     <MainContainer/>
    </div>
  );
}

export default App;
