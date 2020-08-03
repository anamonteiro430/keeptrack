import React from 'react';
import { Nav } from './Components/Nav';
import { Left } from './Components/Left';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div>
      <Nav />
      <div id="main">
        <Left />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
