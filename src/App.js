import React from 'react';
import GlobalStyles from './components/GlobalStyles'
import {Route} from 'react-router-dom';
//Pages and components
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
