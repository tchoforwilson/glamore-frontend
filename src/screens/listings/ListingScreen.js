import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StoreHeader, StoreScreenLayout } from "../../layouts";
import { AddProductModal } from "../../components/modals";
import { AppSelect } from "../../components/inputs";
import { ListingTable } from "../../components/tables";

const ListingScreen = () => {
  const [openModal, setOpenModal] = useState(true);

  /**
   * @breif Open add listing modal when clicked
   */
  const handleAddListingClick = () => {
    setOpenModal(true);
  };
  return (
    <StoreScreenLayout>
      <StoreHeader title="product catalogue" />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "2rem",
        }}
      >
        <button
          type="button"
          className="btn btn-add-listing"
          onClick={handleAddListingClick}
        >
          <AddCircleOutlineIcon className="btn-add-listing__icon" />
          <span className="btn-add-listing__title">create a new item</span>
        </button>
        <Stack direction="row" spacing={5}>
          <AppSelect
            name="categories"
            items={[{ _id: "-1", name: "Product Categories" }]}
          />
          <AppSelect name="sort" items={[{ _id: "-1", name: "Sort by" }]} />
        </Stack>
        <Box sx={{ width: "100%" }}>
          <ListingTable
            data={[
              {
                _id: "ab7848",
                imageCover: require("../../assets/images/list.jpg"),
                name: "Manfinity Homme Men Letter Patched Detail Tee & Drawstring",
                price: 500,
              },
              {
                _id: "ab56848",
                imageCover: require("../../assets/images/list.jpg"),
                name: "Patched Detail Tee & Drawstring",
                price: 700,
              },
              {
                _id: "abw348",
                imageCover: require("../../assets/images/list.jpg"),
                name: "Manfinity Homme Men",
                price: 800,
              },
            ]}
          />
        </Box>
      </Box>
      {/** Add Listing modal */}
      <AddProductModal isOpen={openModal} />
    </StoreScreenLayout>
  );
};

export default ListingScreen;
