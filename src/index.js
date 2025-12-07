import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Technology from './Pages/Technology/TechnologyPage';
import PQCPage from './Pages/PQC Safe/PQCPage';
import HomePage from './Pages/Home Page/HomePage';
import ProcessFlow from './Pages/ProcessFlow/ProcessFlow';
import Error403 from './Pages/Error/Error403';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HomePage></HomePage>
    <Technology></Technology>
    <PQCPage></PQCPage>
    <ProcessFlow></ProcessFlow>
    <Error403></Error403>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
