import React, { useMemo } from "react";
import { AppScreenLayout } from "../../layouts";
import { useParams } from "react-router-dom";

const PreviewStoreScreen = () => {
  const { id } = useParams();
  const searchPath = useMemo(() => ({ searchUrl: `/${id}/products` }), [id]);
  return <AppScreenLayout searchPath={searchPath}></AppScreenLayout>;
};

export default PreviewStoreScreen;
