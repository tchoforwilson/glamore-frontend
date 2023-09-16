import { useState } from "react";
import { Box, Container } from "@mui/material";
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
            <div className="orders__section">
              <div className="orders__header">
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
                          val.id === activeTab ? "active tab_link" : "tab_link"
                        }
                      >
                        {val.name}
                      </a>
                    );
                  })}
                </Box>
                <div>
                  <form className="search__form">
                    <label htmlFor="search" className="sr-only">
                      Search orders
                    </label>
                    <div className="search__input__container">
                      <input
                        id="search"
                        type="text"
                        placeholder="Search orders"
                        className="search__input"
                      />
                      <SearchRounded
                        fontSize="large"
                        className="search__icon"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="orders__body">
                <div id="newOrders">
                  <div className="table__wrapper">
                    <table>
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
                                <td className="text--semibold">
                                  Total: 36, 500 FCFA
                                </td>
                                <td className="font-sm">19 minutes ago</td>
                                <td>5d6cidk6s6foodf00</td>
                                <td>
                                  <button className="order__fetch_btn">
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
            className="dropdown__menu"
            onClick={(e) => {
              const { currentTarget } = e;
              currentTarget
                .querySelector(".icon")
                .classList.toggle("rotate-180");
              currentTarget
                .querySelector(".dropdown__body")
                .classList.toggle("dropdown__body-show");
            }}
          >
            <div className="dropdown__header" onClick={() => {}}>
              Sort
              <ArrowDropDownRounded
                sx={{ transition: "transform ease-in-out 200ms" }}
                className="icon"
                fontSize="large"
              />
            </div>
            <div className="dropdown__body">
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
    <div className="order__item">
      <div className="order__info">
        <a href="#" className="order__info__Link">
          JamesW202
        </a>
        <span className="text--semibold">Total: 35,650 FCFA</span>
        <span className="text-sm text--semibold">Quantity: 5</span>
        <span className="text-sm">19 minutes ago</span>
        <span className="text-sm">#5d6cidk6s6foodf00</span>
        <button className="order__fetch_btn">Fetch for sale</button>
      </div>
      <img src={img1} alt="image-description" className="order__image" />
      <span className="order__item__tag"></span>
    </div>
  );
};
