import React, {FC} from 'react';

import './App.css';

const  App : FC =()=> {
  return (
    <div className="App">
     
      <input type="text" name="Enter" placeholder='Task' id=""  />
      <button>
          Add
      </button>
      
    </div>
  );
}

export default App;
