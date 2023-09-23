import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import img1 from "../../assets/moreimg/img1.jpg";

// This button may be redefined in components to be used by other screens
const CheckoutButton = () => {
  return <button className="bag__checkout_btn">Checkout</button>;
};

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
      className="bag__add_rem_btn"
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
        <img src={img1} className="bag__item__image"/>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              className="bag__item__input"
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
              <span className="bag__item__discount_price">XAF {discountedPrice}</span>
            ) : null}
            <span className={`${discount ? "bag__item__old_price" : null}`}>
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
          <span className="bag__item__size">XXL</span>
          <Delete className="bag__delete_icon" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default function Bag() {
  return (
    <Container disableGutters={true} maxWidth="xl">
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        
      </Box>
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
        <div className="bag__item__container">
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
          <Box sx={{ margin: "2rem 0" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button type="button" className="bag__promo_btn">
                Insert Promo Code
              </button>
              <button type="button" className="bag__apply_btn">
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
              <p className="bag__item__total">XAF 2,800</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Delivery</p>
              <p className="bag__item__total">XAF 800</p>
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
          <p className="bag__item__total">XAF 3,600</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <CheckoutButton />
          </div>
        </Box>
      </Box>
    </Container>
  );
}
