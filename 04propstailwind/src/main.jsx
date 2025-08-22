import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import C1 from './components/c1.jsx'

  let name="Mohit" 
  let age=21
  let skills=["react" , "node" , "javascript"]
  const onMessgae =()=> {alert("its a function passed as prop")}

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <App />
    <C1 name={name} age={age} skills={skills} onMessgae={onMessgae} />
  </StrictMode>,
)
