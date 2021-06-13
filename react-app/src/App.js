import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import MyPosts from "./components/MyPosts/index"
import Friends from "./components/Friends/index"
import MyAnswers from "./components/Answers/index"
import Home from "./components/Home/index"
import About from "./components/About/index"

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <About />
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} >
            <About />
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} >
            <About />
            <Home />
          </ProtectedRoute>
          <Route path="/posts" exact={true}>
            <About />
            <MyPosts />
          </Route>
          <Route path="/friends" exact={true}>
            <About />
            <Friends />
          </Route>
          <Route path="/answers" exact={true}>
            <MyAnswers />
          </Route>
          <Route>
            <h1>Page not found</h1>
            <NavLink to="/">Return Home?</NavLink>
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  );
}

export default App;
