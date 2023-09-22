import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  ProfileScreen,
  OrdersScreen,
  BagScreen,
  MarketinScreen,
  FinanceScreen,
  StoreSettingScreen,
} from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/finances" element={<FinanceScreen />} />
        <Route path="/marketing" element={<MarketinScreen />} />
        <Route path="/settings" element={<StoreSettingScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/bag" element={<BagScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Provider>
  );
};

export default App;
