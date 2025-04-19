
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './style.css'
import UserContext from './userContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(

    <UserContext>
 
    <App />

    </UserContext>
  
)
