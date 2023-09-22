import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  OrdersScreen,
  BagScreen,
  MarketinScreen,
  FinanceScreen,
  StoreSettingScreen,
  ShopScreen,
  ProfileScreen,
  NotFoundScreen,
} from "./screens";
import DashboardScreen from "./screens/dashboard/DashBoardScreen";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/finances" element={<FinanceScreen />} />
        <Route path="/marketing" element={<MarketinScreen />} />
        <Route path="/settings" element={<StoreSettingScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/bag" element={<BagScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Provider>
  );
};

export default App;
