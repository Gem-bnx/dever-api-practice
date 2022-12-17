import './App.css';
import {Routes, Route} from 'react-router'
import Home from './pages/Home';
import Input from './pages/Input';
import Output from './pages/Output';
import { useState } from 'react';
function App() {
  const [sublink, setSubLink] = useState("");
  // console.log(sublink);
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/input" element={<Input sublink = {sublink}  setSubLink={setSubLink} ></Input>} />
      <Route path="/output" element={<Output sublink = {sublink}></Output>} />
     </Routes>
    </>
  );
}

export default App;
