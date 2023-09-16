import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  AppHomeScreen,
  AppBagScreen,
  AppOrdersScreen
} from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/home" element={<AppHomeScreen />} />
        <Route path="/orders" element={<AppOrdersScreen />} />
        <Route path="/bag" element={<AppBagScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Provider>
  );
};

export default App;
