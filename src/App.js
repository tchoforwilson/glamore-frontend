import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  UserProfile,
} from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Provider>
  );
};

export default App;
