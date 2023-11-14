import React from "react";
import { Box, Button, Grid, Modal } from "@mui/material";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import {
  FormCheckBox,
  FormContainer,
  FormField,
  FormSelect,
  FormTextArea,
} from "../forms";
import { UpgradeButton } from "../buttons";
import classes from "./AddProductModal.module.scss";

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

const AddProductModal = ({ open = false, onClose }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const addImageInputRef = React.useRef(null);

  const [images, setImages] = React.useState([]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-add-product" aria-describedby="modal-add-product" sx={{ display: 'grid', height: '100%', width: '100%', placeContent: 'center' }} >
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
              </Grid>
              <Grid item md={4}>
                <FormField
                  name="price"
                  placeholder="Price"
                  type="number"
                  min="100"
                  isBordered={true}
                />
              </Grid>
              <Grid item md={4}>
                <FormSelect
                  name="gender"
                  style={{ height : '100%'}}
                  items={[
                    { id: "-1", name: "Gender" },
                    { id: "male", name: "Male" },
                    { id: "female", name: "Female" },
                  ]}
                />
              </Grid>
              <Grid item md={4} >
                <FormSelect
                  name="material"
                  style={{ height : '100%'}}
                  items={[
                    { id: "-1", name: "Material" },
                    { id: "male", name: "Male" },
                    { id: "female", name: "Female" },
                  ]}
                />
              </Grid>
              <Grid item md={4}>
                <FormSelect
                  name="colors"
                  items={[{ id: "-1", name: "Colors" }]}
                  style={{ height : '100%'}}
                />
              </Grid>
              <Grid item md={12}>
                <FormTextArea
                  name="description"
                  placeholder="description"
                  isBordered={true}
                />
              </Grid>
              <Grid item md={4}>
                <FormCheckBox
                  name="isRenewable"
                  label="This Product Is Renewable"
                />
              </Grid>
              <Grid item md={4}>
                <FormCheckBox
                  name="isPackage"
                  label="This Product Is PrePackaged"
                />
              </Grid>
            </Grid>
          </section>
          <section
            className="add-product-section images"
            style={{ marginTop: "40px" }}
          >
            <h1 className="add-product-section__header">Product images</h1>
            <Grid container>
              {images.map((image, index) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  padding={1}
                  sx={{ aspectRatio: "1/1.5", overflow: "hidden" }}
                  key={index}
                >
                  <Box
                    sx={{
                      wdith: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "opacity 0.3s ease-in-out",
                        opacity: 1,
                      }}
                      alt="new product"
                    />
                    <button
                      style={{
                        borderRadius: "50%",
                        top: "5%",
                        right: "3%",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        color: "white",
                        backgroundColor: "red",
                        fontSize: "1.5rem",
                        lineHeight: "0.9",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setImages((value) =>
                          value.filter((_, i) => i !== index),
                        )
                      }
                    >
                      x
                    </button>
                  </Box>
                </Grid>
              ))}
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                padding={2}
                sx={{ aspectRatio: "1/1.5" }}
              >
                <React.Fragment>
                  <Button
                    variant="contained"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      fontSize: "6rem",
                      borderRadius: "15px",
                    }}
                    onClick={() => addImageInputRef.current?.click()}
                  >
                    +
                  </Button>
                  <input
                    type="file"
                    ref={addImageInputRef}
                    style={{ display: "none" }}
                    onChange={(event) =>
                      setImages((value) => [...value, event.target.files[0]])
                    }
                  />
                </React.Fragment>
              </Grid>
            </Grid>
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
    </Modal>
  );
};

export default AddProductModal;
