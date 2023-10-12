import React from "react";
import { Container } from "@mui/material";
import { AppScreenLayout } from "../../layouts";

const HomeScreen = () => {
  return (
    <AppScreenLayout searchPath="products">
      <Container>
        <section className="home-sellers">
          <h1 className="home-header">explore our best sellers</h1>
        </section>
        <section className="home-categories">
          <h1 className="home-header">browse categories</h1>
        </section>
        <section className="home-essentials">
          <h1 className="home-header">the essentials</h1>
        </section>
        <section className="home-popular">
          <h1 className="home-header">popular buys</h1>
        </section>
      </Container>
    </AppScreenLayout>
  );
};

export default HomeScreen;
