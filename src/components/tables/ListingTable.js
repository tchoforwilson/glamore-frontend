import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SellIcon from "@mui/icons-material/Sell";
import Campaign from "@mui/icons-material/Campaign";
import Table from "./Table";
import { TableContext } from "../../contexts";

/**
 * @breif Render a listing table
 * @param {Array} data Array of listing objects
 * @returns
 */
const ListingTable = ({ data = [] }) => {
  const columns = [
    {
      path: "imageCover",
      label: "images",
      content: (product) => (
        <img
          src={product.imageCover}
          className="listing-table__img"
          alt={product._id}
        />
      ),
    },
    {
      path: "name",
      label: "name",
    },
    {
      path: "price",
      label: "price",
      content: (product) => (
        <div className="listing-table__price">
          <span>FCFA</span>
          <span className="ms-2">{product.price}</span>
        </div>
      ),
    },
    {
      path: "deal",
      label: "available deals",
      content: () => (
        <FilterListIcon className="listing-table__icon filter-list-icon" />
      ),
    },
    {
      path: "sell",
      content: () => <SellIcon className="listing-table__icon sell-icon" />,
    },
    {
      path: "campaign",
      content: () => <Campaign className="listing-table__icon campaign-icon" />,
    },
  ];
  return (
    <TableContext.Provider value={{ data, columns }}>
      <Table className="table listing-table" />
    </TableContext.Provider>
  );
};

export default ListingTable;
