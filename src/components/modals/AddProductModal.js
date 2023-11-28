import React from "react";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import {
  AddProductCheckBox,
  AddProductFormField,
  FormContainer,
  FormField,
  FormSelect,
  FormTextArea,
} from "../forms";
import { UpgradeButton } from "../buttons";
import { colors, brands, sizes, materials, genders } from "./values";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name required").label("Name"),
  price: Yup.number().required("Price required").label("Price"),
  description: Yup.string()
    .required("Description required")
    .label("description"),
  stock: Yup.number().required("Stock required!").label("Stock"),
  size: Yup.string()
    .required("Size required")
    .notOneOf(["-1", "1"], "Select a valid size")
    .label("Size"),
  category: Yup.string()
    .required("Category required")
    .notOneOf(["-1", "1"], "Select a valid category")
    .label("Category"),
  brand: Yup.string()
    .required("Brand required")
    .notOneOf(["-1", "1"], "Select a valid brand")
    .label("Category"),
  materials: Yup.array().label("Materials"),
  gender: Yup.string().required("Gender required").label("Gender"),
  colors: Yup.array().label("Colors"),
  isRenewable: Yup.boolean().label("This Product is Renewable"),
  isPrepackaged: Yup.boolean().label("This Product is Prepackaged"),
  isCoupon: Yup.boolean().label("COUPONS"),
  couponCode: Yup.string().required("Product coupon code required"),
  isDiscount: Yup.boolean().label("DISCOUNT"),
  twoForOne: Yup.boolean().label("2 FOR 1"),
});

const initialValues = {
  name: "",
  price: "",
  category: "",
  brand: "",
  stock: "",
  size: "",
  description: "",
  materials: [],
  colors: [],
  gender: "",
  isRenewable: false,
  isPrepackaged: false,
  isCoupon: false,
  couponCode: "",
  isDiscount: false,
  discount: "",
  twoForOne: false,
};

const AddProductModal = ({ isOpen = false }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={`modal add-product-modal ${isOpen ? "open" : "close"}`}>
      <div className="modal__content">
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
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
                <div className="d-flex justify-content--between align-items--center gap-2">
                  <AddProductFormField
                    name="price"
                    label="Price"
                    type="number"
                  />
                  <AddProductFormField
                    name="stock"
                    label="Stock"
                    type="number"
                  />
                  <FormSelect
                    name="size"
                    items={[{ id: "-1", value: "-1", name: "Size" }, ...sizes]}
                    isBordered={true}
                  />
                </div>
                <div className="d-flex justify-content--between align-items--center">
                  <FormSelect
                    name="category"
                    items={[{ id: "-1", name: "Category" }]}
                    isBordered={true}
                  />
                  <FormSelect
                    name="brand"
                    items={[
                      { id: "-1", value: "-1", name: "Brand" },
                      ...brands,
                    ]}
                    isBordered={true}
                  />
                  <FormSelect
                    name="materials"
                    items={[
                      { id: "-1", value: "-1", name: "Materials" },
                      ...materials,
                    ]}
                    isBordered={true}
                  />
                </div>
                <div className="d-flex justify-content--between align-items--center">
                  <FormSelect
                    name="gender"
                    items={[
                      { id: "-1", value: "-1", name: "Gender" },
                      ...genders,
                    ]}
                    isBordered={true}
                  />
                  <FormSelect
                    name="colors"
                    items={[
                      { id: "-1", value: "-1", name: "Colors" },
                      ...colors,
                    ]}
                    isBordered={true}
                  />
                </div>
                <div className="ms-3">
                  <AddProductCheckBox
                    name="isRenewable"
                    label="This Product Is Renewable"
                  />
                  <AddProductCheckBox
                    name="isPrepackaged"
                    label="This Product Is PrePackaged"
                  />
                </div>
              </Grid>
              <Grid item md={4}>
                <FormTextArea
                  name="description"
                  placeholder="description"
                  isBordered={true}
                />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </section>
          <section className="add-product-section images">
            <h1 className="add-product-section__header">Product images</h1>
          </section>
          <section className="add-product-section section-marketing">
            <h1 className="add-product-section__header">Marketing</h1>
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <div className="section-marketing__item incentivisation">
                  <h4 className="section-marketing__header">Incentivisation</h4>
                  <div className="section-marketing__content">
                    <div className="incentivisation-item">
                      <AddProductCheckBox name="isCoupon" label="coupons" />
                      <span className="incentivisation-item__line"></span>
                      <FormField
                        name="couponCode"
                        placeholder="Insert custom coupon code"
                        isBordered={true}
                      />
                    </div>
                    <div className="incentivisation-item">
                      <AddProductCheckBox name="isDiscount" label="discount" />
                      <span className="incentivisation-item__line"></span>
                      <FormField
                        name="discount"
                        placeholder="% OFF"
                        type="number"
                        isBordered={true}
                      />
                    </div>
                    <div className="incentivisation-item">
                      <AddProductCheckBox name="twoForOne" label="2 for 1" />
                      <span>
                        Customers Gets Two Products For The Price of One
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} sm={12}>
                <div className="section-marketing__item advertisment">
                  <h4 className="section-marketing__header">Advertisment</h4>
                  <div className="section-marketing__content">
                    <p>to advertise, you have to Upgrade to Premium</p>
                    <h2>5000/month</h2>
                    <UpgradeButton to="/" />
                    <span>You'll also get</span>
                    <p>Sponsored content</p>
                    <p>Email Marketing Campaign</p>
                    <p>Advanced Performance Analytics</p>
                    <p>Priority Listing In Trending Products</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
          <button
            type="submit"
            className="btn btn--submit add-product-button"
            onClick={handleSubmit}
          >
            <span className="add-product-button__title">Upload</span>
            <BackupOutlinedIcon className="add-product-button__icon" />
          </button>
        </FormContainer>
      </div>
    </div>
  );
};

export default AddProductModal;
