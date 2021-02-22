import React from 'react';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SpacecraftList from './SpacecraftList';
import SpacecraftDetail from './SpaceCraftDetail';
import CharacterList from './CharacterList';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <SignIn />
            <Footer />
          </Route>
          <Route path="/signup" exact>
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <ProtectedRoute path="/spacecraftlist" exact>
            <Header />
            <SpacecraftList />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/spacecraftdetail" exact>
            <Header />
            <SpacecraftDetail />
            <Footer />
          </ProtectedRoute>
          <Route path="/characterlist" exact>
            <Header />
            <CharacterList />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
