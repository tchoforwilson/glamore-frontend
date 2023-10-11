import React from "react";
import { AppScreenLayout } from "../../layouts";
import { useParams } from "react-router-dom";

const ShopScreen = () => {
  const { id } = useParams();
  return <AppScreenLayout searchPath={`${id}/products`}></AppScreenLayout>;
};

export default ShopScreen;
