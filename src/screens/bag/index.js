import { Box, Container, Grid } from "@mui/material";
import { default as nn } from "./bag.module.css";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useState } from "react";
import img1 from "../../assets/moreimg/img1.jpg";

const AddRemoveButton = ({ type, add, remove }) => {
  /**
   * Render a small add or subtract button
   *
   * @param {string} type - The type of button to use. "add" or remove
   * @return {JSX}
   */

  return (
    <button
      onClick={() => {
        if (type === "add") {
          add();
        } else {
          remove();
        }
      }}
      type="button"
      className={nn.addRemove_button}
    >
      {type === "add" ? <Add /> : <Remove />}
    </button>
  );
};

const BagItem = ({ itemName, quantity, price, discount, size }) => {
  /** Renders each of the bag items* 
    @param {string} itemName- The name of the product 
    @param {number} quantity - The quantity of units of a particular product
    @param {float} price - The unit price of a product
    @param {string} size - The size of a product
    @param {float} discount - The percentage discount of a product

    @return {JSX}
    */

  const getInitialQuantity = () => quantity;

  const [qty, setquantity] = useState(getInitialQuantity());

  const add = () => {
    setquantity((prev) => (prev < 99 ? prev + 1 : 99));
    return null;
  };
  const remove = () => {
    setquantity((prev) => (prev > 0 ? prev - 1 : 0));
    return null;
  };
  const discountedPrice = price - (price * discount) / 100;
  return (
    <Grid container columns={10} sx={{ padding: "1rem 0" }}>
      <Grid item xs={3}>
        <img src={img1} className={nn.item_image} />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <p>{itemName || "Joggers White Signed T-shirt"}</p>
          </div>
          <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <AddRemoveButton type="add" add={add} />
            <input
              value={qty}
              type="number"
              className={nn.item_input}
              onChange={(e) => {
                const num = Number(e.target.value);
                if (typeof num === "number" && !isNaN(num)) {
                  if (num >= 0 && num <= 99) {
                    setquantity(num);
                  }
                } else {
                  setquantity(0);
                }
              }}
            />
            <AddRemoveButton type="remove" remove={remove} />{" "}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {discount ? (
              <span className={nn.discount_price}>XAF {discountedPrice}</span>
            ) : null}
            <span className={`${discount ? nn.old_price : null}`}>
              XAF {price}
            </span>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <span className={nn.item_size}>XXL</span>
          <Delete className={nn.delete_icon} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default function Bag() {
  return (
    <Container disableGutters={true} maxWidth="xl">
      <Box sx={{ display: { xs: "none", md: "block" } }}>This is desktop</Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          height: "100%",
        }}
      >
        {/* Mobile topbar here */}
        {/* Header here */}
        <div className={nn.bagItem_container}>
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <BagItem
            itemName="Joggers White Signed T-shirt"
            quantity={4}
            price={700}
            discount={2}
          />
          <Box sx={{margin: "2rem 0"}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: '1rem' }}>
            
              <button type="button" className={nn.promo_btn}>
                Insert Promo Code
              </button>
              <button type="button" className={nn.apply_btn}>
                Apply
              </button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Sub total</p>
              <p className={nn.item_total}>XAF 2,800</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Delivery</p>
              <p className={nn.item_total}>XAF 800</p>
            </Box>
          </Box>
        </div>
        <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Total</p>
              <p className={nn.item_total}>XAF 3,600</p>
            </Box>
        <div>
          {/* <CheckoutButton /> */}
        </div>
      </Box>
    </Container>
  );
}
