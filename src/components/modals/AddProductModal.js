import React from "react";
import { Grid } from "@mui/material";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import {
  FormCheckBox,
  FormContainer,
  FormField,
  FormSelect,
  FormTextArea,
} from "../forms";
import { UpgradeButton } from "../buttons";

const initialValues = {
  name: "",
  price: "",
  category: "",
  isCoupon: false,
  couponCode: "",
  isDiscount: false,
  discount: "",
  materials: [],
  colors: [],
  gender: "",
  stock: "",
};

const AddProductModal = ({ isOpen = false }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={`modal add-product-modal ${isOpen ? "open" : "close"}`}>
      <div className="modal__content">
        <FormContainer initialValues={initialValues}>
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
                <div className="d-flex justify-content--between align-items--center">
                  <FormSelect
                    name="category"
                    items={[{ id: "-1", name: "Category" }]}
                    isBordered={true}
                  />
                  <FormSelect
                    name="materials"
                    items={[{ id: "-1", name: "Materials" }]}
                    isBordered={true}
                  />
                </div>
                <div className="d-flex justify-content--between align-items--center">
                  <FormSelect
                    name="gender"
                    items={[{ id: "-1", name: "Gender" }]}
                    isBordered={true}
                  />
                  <FormSelect
                    name="materials"
                    items={[{ id: "-1", name: "Colors" }]}
                    isBordered={true}
                  />
                </div>
                <div className="ms-3">
                  <FormCheckBox
                    name="isRenewable"
                    label="This Product Is Renewable"
                  />
                  <FormCheckBox
                    name="isPackage"
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
                      <FormCheckBox name="isCoupon" label="coupons" />
                      <span className="incentivisation-item__line"></span>
                      <FormField
                        name="couponCode"
                        placeholder="Insert custom coupon code"
                        isBordered={true}
                      />
                    </div>
                    <div className="incentivisation-item">
                      <FormCheckBox name="isDiscount" label="discount" />
                      <span className="incentivisation-item__line"></span>
                      <FormField
                        name="discount"
                        placeholder="% OFF"
                        isBordered={true}
                      />
                    </div>
                    <div className="incentivisation-item">
                      <FormCheckBox name="twoInOne" label="2 for 1" />
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
