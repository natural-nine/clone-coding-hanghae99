import React from "react";
import {Route, Routes} from 'react-router-dom';

//컴포넌트 import
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />}/>

      </Routes>
    </div>
  );
}

export default App;
