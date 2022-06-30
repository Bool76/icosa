import logo from './logo.svg';
import './App.css';
import CompanyInfo from './Components/CompanyInfo'; 

function App() {
  return (
    <div className="companyContainer">
        <header><h4>[ Stock Portfolios ]</h4></header>
        <CompanyInfo/>
    </div>
  );
}

export default App;
