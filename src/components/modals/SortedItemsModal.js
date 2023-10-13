import React from "react";
import * as Yup from "yup";
import { Grid, Stack } from "@mui/material";
import { FormCheckBox, FormContainer, FormField } from "../forms";
import { AppCheckBox } from "../inputs";
import {
  deals,
  dates,
  materials,
  colors,
  sizes,
  genders,
  brands,
  sortBy,
} from "./values";

const validationSchema = Yup.object().shape({
  price: Yup.object().shape({
    min: Yup.number().label("MIN"),
    max: Yup.number().label("MAX"),
  }),
  colors: Yup.array().of(Yup.string()),
  date: Yup.array().of(Yup.string()),
  sortBy: Yup.array().of(Yup.string()),
  brand: Yup.array().of(Yup.string()),
  gender: Yup.array().of(Yup.string()),
  size: Yup.array().of(Yup.string()),
  deals: Yup.array().of(Yup.string()),
  materials: Yup.array().of(Yup.string()),
});

const initialValues = {
  price: {
    min: "",
    max: "",
  },
  colors: [],
  dates: [],
  sortBy: [],
  brand: [],
  gender: [],
  size: [],
  deals: [],
  materials: [],
};

const SortedItemsModal = ({ isOpen }) => {
  return (
    <article className={`modal sortedItems ${isOpen ? "open" : "close"}`}>
      <div className="modal__content">
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Grid container spacing={6}>
            <Grid item md={4} sm={4}>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Price Range</div>
                <div className="sortedItems__field">
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <span>min</span>
                      <FormField
                        name="price.min"
                        placehoder="min"
                        type="number"
                        isBordered={true}
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <span>max</span>
                      <FormField
                        name="price.max"
                        placehoder="min"
                        type="number"
                        isBordered={true}
                      />
                    </Stack>
                  </Stack>
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Colors</div>
                <div className="sortedItems__field colors">
                  {colors.map((color) => (
                    <AppCheckBox
                      key={color}
                      name="colors"
                      className="sortedItems__color"
                      style={{ appearance: "none", backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item md={4} sm={4}>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Date</div>
                <div className="sortedItems__field items">
                  {dates.map((date, index) => (
                    <FormCheckBox
                      key={date}
                      name={`dates.${index}`}
                      label={date}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Sort By</div>
                <div className="sortedItems__field items">
                  {sortBy.map((sort, index) => (
                    <FormCheckBox
                      key={sort}
                      name={`dates.${index}`}
                      label={sort}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Brand</div>
                <div className="sortedItems__field items">
                  {brands.map((brand, index) => (
                    <FormCheckBox
                      key={brand}
                      name={`dates.${index}`}
                      label={brand}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Gender</div>
                <div className="sortedItems__field items">
                  {genders.map((gender, index) => (
                    <FormCheckBox
                      key={gender}
                      name={`dates.${index}`}
                      label={gender}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item md={4} sm={4}>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Size</div>
                <div className="sortedItems__field items">
                  {sizes.map((size, index) => (
                    <FormCheckBox
                      key={size}
                      name={`sizes.${index}`}
                      label={size}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-sales % deals</div>
                <div className="sortedItems__field items">
                  {deals.map((deal, index) => (
                    <FormCheckBox
                      key={deal}
                      name={`deals.${index}`}
                      label={deal}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-materials</div>
                <div className="sortedItems__field items">
                  {materials.map((material, index) => (
                    <FormCheckBox
                      key={material}
                      name={`materials.${index}`}
                      label={material}
                    />
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </FormContainer>
      </div>
    </article>
  );
};

export default SortedItemsModal;
