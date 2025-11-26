import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Technology from './Pages/Technology/TechnologyPage';
import PQCPage from './Pages/PQC Safe/PQCPage';
import ToggleView from './Pages/PQC Safe/Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Technology></Technology>
    <PQCPage></PQCPage>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
