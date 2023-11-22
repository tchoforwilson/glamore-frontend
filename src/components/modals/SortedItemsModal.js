import React from "react";
import * as Yup from "yup";
import { Grid, Stack } from "@mui/material";
import {
  FormCheckBox,
  FormCheckColor,
  FormContainer,
  FormField,
} from "../forms";
import { SubmitButton } from "../buttons";
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
    min: Yup.number(),
    max: Yup.number(),
  }),
  colors: Yup.array().of(Yup.string()),
  dates: Yup.array().of(Yup.string()),
  sortBy: Yup.array().of(Yup.string()),
  brands: Yup.array().of(Yup.string()),
  genders: Yup.array().of(Yup.string()),
  sizes: Yup.array().of(Yup.string()),
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
  brands: [],
  genders: [],
  sizes: [],
  deals: [],
  materials: [],
};

/**
 *
 * @param {Boolean} isOpen Variable for opening and closing modal dialog.
 * @param {Function} Callback function when modal form is submitted.
 * @param {Function} Callback function when modal form is resetted.
 * @returns
 */
const SortedItemsModal = ({ isOpen, handleSubmit, handleReset }) => {
  return (
    <article className={`modal sortedItems ${isOpen ? "open" : "close"}`}>
      <div className="modal__content">
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
                        placeholder="min price"
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
                        placeholder="max price"
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
                    <FormCheckColor
                      key={color.name}
                      name="colors"
                      label={color.name}
                      value={color.code}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item md={4} sm={4}>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Date</div>
                <div className="sortedItems__field items">
                  {dates.map((date) => (
                    <FormCheckBox
                      key={date.name}
                      name="dates"
                      label={date.name}
                      value={date.value}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Sort By</div>
                <div className="sortedItems__field items">
                  {sortBy.map((sort) => (
                    <FormCheckBox
                      key={sort.name}
                      name="sortBy"
                      label={sort.name}
                      value={sort.value}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Brand</div>
                <div className="sortedItems__field items">
                  {brands.map((brand) => (
                    <FormCheckBox
                      key={brand.name}
                      name="brands"
                      label={brand.name}
                      value={brand.value}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Gender</div>
                <div className="sortedItems__field items">
                  {genders.map((gender) => (
                    <FormCheckBox
                      key={gender.name}
                      name="genders"
                      label={gender.name}
                      value={gender.value}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item md={4} sm={4}>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-Size</div>
                <div className="sortedItems__field items">
                  {sizes.map((size) => (
                    <FormCheckBox
                      key={size.name}
                      name="sizes"
                      label={size.name}
                      value={size.value}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-sales % deals</div>
                <div className="sortedItems__field items">
                  {deals.map((deal) => (
                    <FormCheckBox
                      key={deal.name}
                      name="deals"
                      label={deal.name}
                      value={deal.value}
                    />
                  ))}
                </div>
              </div>
              <div className="sortedItems__group">
                <div className="sortedItems__label">-materials</div>
                <div className="sortedItems__field items">
                  {materials.map((material) => (
                    <FormCheckBox
                      key={material.name}
                      name="materials"
                      label={material.name}
                      value={material.value}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item md={12} sm={12}>
              <Stack direction="row" spacing={6} className="sortedItems__btns">
                <button
                  type="reset"
                  name="reset"
                  className="btn btn--primary btn--reset"
                  onClick={handleReset}
                >
                  Cancel
                </button>
                <SubmitButton title="Apply" />
              </Stack>
            </Grid>
          </Grid>
        </FormContainer>
      </div>
    </article>
  );
};

export default SortedItemsModal;
