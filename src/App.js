import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Rowsection1 from './components/mainDashboard/Rowsection1';
import Rowsection2 from './components/mainDashboard/Rowsection2';
import Rowsection3 from './components/mainDashboard/Rowsection3';
function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Sidebar></Sidebar>
        <div className='row-division'>
          <Rowsection1/>
          <Rowsection2/>
          <Rowsection3/>  
        </div>
      </div>
    </div>
  );
}

export default App;
