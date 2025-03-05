import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          {/* <Navbar /> */}
          <Switch>
            <Route exact component={Home} />
            <Route component={Services} />
            <Route  component={Products} />
            <Route  component={SignUp} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
