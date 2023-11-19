import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Grid, Modal } from "@mui/material";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import {
  FormCheckBox,
  FormContainer,
  FormField,
  FormSelect,
  FormTextArea,
} from "../forms";
import { UpgradeButton } from "../buttons";
import { useFormikContext } from "formik";
import classes from "./AddProductModal.module.scss";

const initialValues = {
  name: "",
  price: "",
  category: "",
  hasCoupon: false,
  couponCode: "",
  hasDiscount: false,
  discount: "",
  materials: [],
  colors: [],
  gender: "",
  stock: "",
  isRenewable: false,
  isPackaged: false,
};

const AddProductModal = ({ open = false, onClose }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const addImageInputRef = React.useRef(null);
  const uploadProductCoverInputRef = React.useRef(null)

  const [images, setImages] = React.useState([]);
  const [hasCoupon, setHasCoupon] = React.useState(false);
  const [hasDiscount, setHasDiscount] = React.useState(false);
  const [twoInOne, setTwoInOne] = React.useState(false);
  const [coverImage, setCoverImage] = React.useState(null);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-add-product" aria-describedby="modal-add-product" sx={{ display: 'grid', height: '100%', width: '100%', placeContent: 'center' }} >
      <div className="modal__content">
        <FormContainer initialValues={initialValues}>
          <section className="add-product-section details">
            <h1 className="add-product-section__header">Product details</h1>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <FormField name="name" placeholder="name" isBordered style={{ width: '100%' }} />
                  </Grid>
                  <Grid item sm={4} md={4}>
                    <FormField name="price" min="100" placeholder="Price" isBordered style={{ width: '100%' }} />
                  </Grid>
                  <Grid item sm={4} md={4}>
                    <FormField type="number" min="0" name="price" placeholder="Stock" isBordered style={{ width: '100%' }} />
                  </Grid>
                  <Grid item sm={4} md={4}>
                    <FormSelect
                      name="size"
                      style={{ height: '100%' }}
                      items={[
                        { id: "-1", name: "size" },
                        { id: "s", name: "S" },
                        { id: "m", name: "M" },
                        { id: "l", name: "L" },
                        { id: "xl", name: "XL" },
                        { id: "xxl", name: "XXL" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormSelect
                      name="category"
                      style={{ height: '100%' }}
                      items={[
                        { id: "-1", name: "Category" },
                        { id: "male", name: "Male" },
                        { id: "female", name: "Female" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <FormSelect
                      name="material"
                      style={{ height: '100%' }}
                      items={[
                        { id: "-1", name: "Materials" },
                        { id: "male", name: "Male" },
                        { id: "female", name: "Female" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormSelect
                      name="gender"
                      style={{ height: '100%' }}
                      items={[
                        { id: "-1", name: "Gender" },
                        { id: "male", name: "Male" },
                        { id: "female", name: "Female" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <FormSelect
                      name="colors"
                      style={{ height: '100%' }}
                      items={[
                        { id: "-1", name: "Colors" },
                        { id: "male", name: "Male" },
                        { id: "female", name: "Female" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormCheckBox label="This product is renewable" name="isRenewable" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormCheckBox label="This product is packaged" name="isPackaged" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={9} md={5} sx={{ minHeight: '150px' }}>
                <FormTextArea placeholder="Description" name="description" isBordered style={{ height: ' 100%' }} />
              </Grid>
              <Grid item xs={12} sm={3} md={2}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3>Preview</h3>
                  <Box sx={{ position: 'relative', width: '100%', flexBasis: 'auto', flexGrow: '1', borderRadius: '8px', overflow: 'hidden' }}>
                    <input
                      type="file"
                      ref={uploadProductCoverInputRef}
                      style={{ display: "none" }}
                      onChange={(event) =>
                        setCoverImage(event.target.files[0])
                      }
                    />
                    <img src={coverImage ? URL.createObjectURL(coverImage) : ''} style={{ objectFit: 'cover', height: '100%', width: '100%', objectPosition: 'center' }} alt="" />
                    <Box sx={{ position: 'absolute', inset: '0', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(55, 55, 55, 0.1)' } }} onClick={() => uploadProductCoverInputRef.current?.click()}></Box>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </section>

          <section
            className="add-product-section images"
            style={{ marginTop: "40px" }}
          >
            <h1 className="add-product-section__header">Product images</h1>
            <Grid container sx={{ border: '1px solid rgb(0 0 0 / .1)', borderRadius: '15px' }} >
              {images.map((image, index) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  padding={1}
                  sx={{ aspectRatio: "1/.75", overflow: "hidden" }}
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
                sx={{ aspectRatio: "1/.75" }}
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
                      <Accordion sx={{ width: '100%' }} expanded={hasCoupon} onChange={(e, isExpanded) => setHasCoupon(isExpanded)}>
                        <AccordionSummary>
                          <FormCheckBox name="hasCoupon" label="coupons" checked={hasCoupon} />
                        </AccordionSummary>
                        <AccordionDetails>
                          <FormField
                            name="couponCode"
                            placeholder="Insert coupon code"
                            isBordered={true}
                          />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="incentivisation-item">
                      <Accordion sx={{ width: '100%' }} expanded={hasDiscount} onChange={(e, isExpanded) => setHasDiscount(isExpanded)}>
                        <AccordionSummary>
                          <FormCheckBox name="hasDiscount" label="discount" checked={hasDiscount} />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <FormField
                                name="discount"
                                placeholder="% OFF"
                                isBordered={true}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormField type="datetime-local" placeholder="discount deadline date" isBordered />
                            </Grid>
                          </Grid>
                          The percentage discount to be deducted from the original price and deadline date
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="incentivisation-item">
                      <Accordion sx={{ width: '100%' }} expanded={twoInOne} onChange={(e, isExpanded) => setTwoInOne(isExpanded)}>
                        <AccordionSummary>
                          <FormCheckBox name="twoInOne" label="2 for 1" checked={twoInOne} />
                        </AccordionSummary>
                        <AccordionDetails>
                          Customers Gets Two Products For The Price of One
                        </AccordionDetails>
                      </Accordion>
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
            <span className="add-product-button__title">Upload Product</span>
            <BackupOutlinedIcon className="add-product-button__icon" />
          </button>
        </FormContainer>
      </div>
    </Modal>
  );
};

export default AddProductModal;
