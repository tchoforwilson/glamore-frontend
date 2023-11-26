import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  PreviewProductScreen,
  DashBoardScreen,
  ListingScreen,
  OrdersScreen,
  MarketinScreen,
  FinanceScreen,
  StoreSettingScreen,
  ShopScreen,
  ProfileScreen,
  WelcomeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  NotFoundScreen,
  PreviewStoreScreen,
} from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/dashboard" element={<DashBoardScreen />} />
        <Route path="/listings" element={<ListingScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/finances" element={<FinanceScreen />} />
        <Route path="/marketing" element={<MarketinScreen />} />
        <Route path="/settings" element={<StoreSettingScreen />} />
        <Route path="/shop/:id" element={<PreviewStoreScreen />} />
        <Route path="/product/:id" element={<PreviewProductScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        {<Route path="/login" element={<LoginScreen />} />}
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        {<Route path="/" element={<WelcomeScreen />} />}
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Provider>
  );
};

export default App;
