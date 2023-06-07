import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CreatePage from './Pages/Create';
import View from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context';
import Post, { PostContext } from './store/PostContext';
import Home from './Pages/Home';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [firebase, setUser]);

  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/view">
            <PostContext.Consumer>
              {(postContext) => <View postDetails={postContext.postDetails} />}
            </PostContext.Consumer>
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
