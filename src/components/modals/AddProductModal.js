import React from "react";
import { FormContainer, FormField } from "../forms";
import { Grid } from "@mui/material";
import { Stack } from "immutable";
import { AppSelect, AppTextArea } from "../inputs";

const AddProductModal = ({ isOpen = false }) => {
  return (
    <div className={`modal add-product-modal ${isOpen ? "open" : "close"}`}>
      <div className="modal__content">
        <FormContainer initialValues={{ name: "", price: "", category: "" }}>
          <section className="add-product-section details">
            <h1 className="add-product-section__header">Product details</h1>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <FormField
                  name="name"
                  placeholder="Name"
                  type="text"
                  isBordered={true}
                />
              </Grid>
              <Grid item md={4}>
                <AppTextArea name="description" placeholder="description" />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </section>
          <section className="add-product-section images">
            <h1 className="add-product-section__header">Product images</h1>
          </section>
          <section className="add-product-section marketing">
            <h1 className="add-product-section__header">Marketing</h1>
          </section>
        </FormContainer>
      </div>
    </div>
  );
};

export default AddProductModal;
