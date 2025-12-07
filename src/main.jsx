import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Technology from './Pages/Technology/TechnologyPage';
import PQCPage from './Pages/PQC Safe/PQCPage';
import HomePage from './Pages/Home Page/HomePage';
import ProcessFlow from './Pages/ProcessFlow/ProcessFlow';
import Error403 from './Pages/Error/Error403';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage></HomePage>
    <Technology></Technology>
    <PQCPage></PQCPage>
    <ProcessFlow></ProcessFlow>
    <Error403></Error403>
  </StrictMode>
)

