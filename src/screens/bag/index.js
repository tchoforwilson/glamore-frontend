import { Box, Container, Grid } from "@mui/material";
import { default as nn } from "./bag.module.css";
import { Add, Remove } from "@mui/icons-material";

const AddRemoveButton = ({ type }) => {
  /**
   * Render a small add or subtract button
   *
   * @param {string} type - The type of button to use. "add" or remove
   * @return {JSX}
   */

  return (
    <button className={nn.addRemove_button}>
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

  const discountedPrice = price - (price * discount/100);
  return (
    <Grid container columns={10} rowSpacing={2}>
      <Grid item xs={3}>
        Image Section
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <div>
            <p>{itemName || "Joggers White Signed T-shirt"}</p>
          </div>
          <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center"}}>
            <AddRemoveButton type="add" />
            1
            <AddRemoveButton type="remove" />{" "}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px"}}>
            {discount ? <span>{discountedPrice}</span> : null}
            <span className={`${discount ? nn.price_discount + " " + nn.item: nn.item}`}>{price}</span>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}>
        Size and action
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
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
          <BagItem itemName="Joggers White Signed T-shirt" quantity={4} price={700} discount={2} />
        </div>
      </Box>
    </Container>
  );
}
