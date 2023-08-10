
import { useState } from 'react';
import './App.css';
import Visualizer from './components/Visualizer/Visualizer';
function App() {
  const [value,setValue] = useState(50);
  const handleChange = (event) =>{
    setValue(event.target.value)
  }
  return (
    <Visualizer/>   
  )
}
export default App;