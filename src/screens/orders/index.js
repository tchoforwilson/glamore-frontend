import { Box, Container } from "@mui/material";
import { default as nn } from "./orders.module.css";
import { useState } from "react";
import { ArrowDropDownRounded, SearchRounded } from "@mui/icons-material";
import img1 from "../../assets/moreimg/img1.jpg";

export default function Orders() {
  const TAB_MENU_ITEMS = [
    { id: 0, name: "All orders" },
    { id: 1, name: "New orders" },
    { id: 2, name: "Important" },
    { id: 3, name: "Complete" },
  ];

  const [activeTab, setActiveTab] = useState(null);

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flexGrow: 1,
        }}
      >
        <Box>
          {/* Sidebar here */}
          Sidebar
        </Box>
        <Box sx={{ width: "100%" }}>
          <section>
            {/* Header component here */}
            <h1>Orders</h1>
          </section>
          <section>
            <div className={nn.orders_section}>
              <div className={nn.orders_header}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  {TAB_MENU_ITEMS.map((val) => {
                    return (
                      <a
                        key={val.id}
                        onClick={() => setActiveTab(val.id)}
                        href={"#"}
                        className={
                          val.id === activeTab
                            ? nn.active + " " + nn.tab_link
                            : nn.tab_link
                        }
                      >
                        {val.name}
                      </a>
                    );
                  })}
                </Box>
                <div>
                  <form className={nn.searchForm}>
                    <label htmlFor="search" className={nn.sr_only}>
                      Search orders
                    </label>
                    <div className={nn.searchInput_container}>
                      <input
                        id="search"
                        type="text"
                        placeholder="Search orders"
                        className={nn.searchInput}
                      />
                      <SearchRounded fontSize="large" className={nn.searchIcon} />
                    </div>
                  </form>
                </div>
              </div>
              <div className={nn.orders_body}>
                <div id="newOrders">
                  <div className={nn.table_wrapper}>
                    <table className={nn.orders_table}>
                      {/* <thead>
                    <tr>
                        
                    </tr>
                </thead> */}
                      <tbody>
                        {Array(20)
                          .fill(1, 0, 20)
                          .map((val) => {
                            // temporal
                            return (
                              <tr key={val}>
                                <td>James 4 items</td>
                                <td className={nn.font_semibold}>
                                  Total: 36, 500 FCFA
                                </td>
                                <td className={nn.text_sm}>19 minutes ago</td>
                                <td>5d6cidk6s6foodf00</td>
                                <td>
                                  <button
                                    className={nn.orderItem_info_fetchBtn}
                                  >
                                    Fetch for sale
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <section>{/* Navbar section */}</section>
        <section>
          {/* Sectionfor settings like sort and filter */}
          <div
            className={nn.dropdown_menu}
            onClick={(e) => {
              const {currentTarget} = e 
              currentTarget.querySelector("."+nn.icon).classList.toggle(nn.rotate_180)
              currentTarget.querySelector("."+nn.dropdown_body).classList.toggle(nn.dropdown_body_show)
            }}
          >
            <div className={nn.dropdown_header} onClick={() => {}}>
              Sort
              <ArrowDropDownRounded sx={{transition: "transform ease-in-out 200ms"}} className={nn.icon} fontSize="large" />
            </div>
            <div className={nn.dropdown_body}>
              <ul>
                <li>Menu items</li>
                <li>Menu items</li>
                <li>Menu items</li>
                <li>Menu items</li>
                <li>Menu items</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </section>
      </Box>
    </Container>
  );
}

const OrderItem = () => {
  return (
    <div className={nn.orderItem}>
      <div className={nn.orderItem_info}>
        <a href="#" className={nn.orderItem_info_link}>
          JamesW202
        </a>
        <span className={nn.font_semibold}>Total: 35,650 FCFA</span>
        <span className={`${nn.font_semibold} ${nn.text_sm}`}>Quantity: 5</span>
        <span className={nn.text_sm}>19 minutes ago</span>
        <span className={nn.text_sm}>#5d6cidk6s6foodf00</span>
        <button className={nn.orderItem_info_fetchBtn}>Fetch for sale</button>
      </div>
      <img src={img1} alt="image-description" className={nn.orderItem_image} />
      <span className={nn.orderItem_tag}></span>
    </div>
  );
};
