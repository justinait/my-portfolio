import './App.css';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <a href='https://drive.google.com/file/d/1p8YhZ3q-Ni5WcUYJCxAni0ada_ss2KS9/view' target="_blank" style={{textDecoration:'none'}}>
        <h1 className='title' >          Justina Iturraspe        </h1>  
      </a>
      
      < Profile />
      < Footer />
    </div>
  );
}

export default App;
