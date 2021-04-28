import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import MainWindow from './Components/MainWindow/MainWindow'

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar/>
      <MainWindow />
    </div>
  );
}

export default App;
