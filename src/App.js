import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard'
import Ticket from './pages/ticket/Ticket'


function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard/> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
