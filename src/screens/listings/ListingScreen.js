import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StoreScreenLayout } from "../../layouts";
import { AddProductModal } from "../../components/modals";
import { AppSelect } from "../../components/inputs";
import { ListingTable } from "../../components/tables";
import ListingCard from "./ListingCard";

const listings = [
  {
    _id: "ab7848",
    imageCover: require("../../assets/images/list.jpg"),
    images: [
      require("../../assets/images/t-shirt.jpg"),
      require("../../assets/images/least-popular.jpg"),
    ],
    name: "Manfinity Homme Men Letter Patched Detail Tee & Drawstring",
    price: 500,
    currency: "XAF",
  },
  {
    _id: "ab56848",
    imageCover: require("../../assets/images/list.jpg"),
    images: [
      require("../../assets/images/t-shirt.jpg"),
      require("../../assets/images/least-popular.jpg"),
    ],
    name: "Patched Detail Tee & Drawstring",
    price: 5500,
    currency: "XAF",
  },
  {
    _id: "abw348",
    imageCover: require("../../assets/images/list.jpg"),
    images: [
      require("../../assets/images/t-shirt.jpg"),
      require("../../assets/images/least-popular.jpg"),
    ],
    name: "Manfinity Homme Men",
    price: 800,
    currency: "XAF",
  },
];

const ListingScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  /**
   * @breif Open add listing modal when clicked
   */
  const handleAddListingClick = () => {
    setOpenModal(true);
  };
  return (
    <StoreScreenLayout title="product catalogue">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "2rem",
        }}
      >
        <div className="listing-header">
          <Stack direction="row" spacing={5}>
            <AppSelect
              name="categories"
              items={[{ _id: "-1", name: "Product Categories" }]}
            />
            <AppSelect name="sort" items={[{ _id: "-1", name: "Sort by" }]} />
          </Stack>
          <button
            type="button"
            className="btn btn-add-listing"
            onClick={handleAddListingClick}
          >
            <AddCircleOutlineIcon className="btn-add-listing__icon" />
            <span className="btn-add-listing__title">create a new item</span>
          </button>
        </div>
        <Box sx={{ width: "100%" }}>
          <ListingTable data={listings} />
          <div className="listing-card-items">
            {listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        </Box>
      </Box>
      {/** Add Listing modal */}
      <AddProductModal isOpen={openModal} />
    </StoreScreenLayout>
  );
};

export default ListingScreen;
