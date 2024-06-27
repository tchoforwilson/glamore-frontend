import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import {
  DashBoardScreen,
  ListingScreen,
  OrdersScreen,
  MarketinScreen,
  FinanceScreen,
  StoreSettingScreen,
  NotFoundScreen,
} from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/dashboard" element={<DashBoardScreen />} />
        <Route path="/listings" element={<ListingScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/finances" element={<FinanceScreen />} />
        <Route path="/marketing" element={<MarketinScreen />} />
        <Route path="/settings" element={<StoreSettingScreen />} />
        <Route path="/" element={<DashBoardScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Provider>
  );
};

export default App;
