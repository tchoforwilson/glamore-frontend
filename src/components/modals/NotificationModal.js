import { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import img3 from "../../assets/moreimg/img3.jpg";

const NotificationItem = ({ image, description, toggle }) => {
  /**
   * Renders a notification item
   * @param {string} string - Link providing an image to notification
   * @param {string} description - Brief description of Notification
   
   * @return {JSX}
   *
   *  */

  return (
    <Grid container fontSize="14px"  columns={6} sx={{ padding: "1rem" }}>
      <Grid item xs={2} md={1}>
        <img src={img3} className="notification__item__image" />
      </Grid>
      <Grid item xs={4} md={5} sx={{paddingX: ".5rem"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Kaki shoes from @Lawrence's store</p>
          <button className="notification__item__btn">On it's way!!</button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function NotificationModal({ toggle }) {
  const [show, toggleShow] = useState(true);
  if (!show) {
    return null;
  }
  /**
   * Renders a notification modal. This is not a standalone component but must be rendered as a child of a parent component which trigger it's visibility using conditional rendering and state
   * @param {function} toggle - Used to toggle the notification between show/hide
   * @returns {JSX}
   *
   */
  if (!show) {
    return null
  }
  return (
    <div
      className="notification__modal__container"
      onClick={(e) => {
        // This complex for testing purposes, all hide/show actions will be managed by parent component
        if (toggle) {
            
          toggle();
        } else {
            if(e.target == e.currentTarget){
                toggleShow((prev) => !prev);
            }
        }
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters={true}
        sx={{
          backgroundColor: "#f1f1f1",
          marginX: "auto",
          marginY: "1rem",
        
        }}
      >
        <div className="notification__header">
            <h3>5 new notifications</h3>
        </div>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </Container>
    </div>
  );
}
