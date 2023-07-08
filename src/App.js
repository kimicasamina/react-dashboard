import './Styles/Sass/main.css';
import './App.scss';
import Sidebar from './Components/Sidebar/Index';
import Container from './Container/Container';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
