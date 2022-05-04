// eslint-disable-next-line
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
// import { a } from "react-router-dom";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.favourite);

  const switcherTab = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector(".navbar").classList.add("active");
    } else {
      document.querySelector(".navbar").classList.remove("active");
    }
  });

  return (
    <div className="Header">
      {/* Header hrefpBar */}
      <div className="Header__hrefpbar space__beetween">
        {/* hrefpbar Left */}
        <div className="logo pxy__10">
          <Link to="/">
            <img
              //   src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              // src="https://seeklogo.com/images/E/ecommerce-host-logo-16DE6E3D80-seeklogo.com.png"
              src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/279092917_2871845096451906_8821620375334053829_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGY1lsg2Rc9C1Pfbmr8eWDa9EJIQKhRIDr0QkhAqFEgOqliv53sWGQK2VqtKrdtApeu93yI1B9eSTBnrTar_oX4&_nc_ohc=gZdEdNgQsZUAX-ljeBK&_nc_ht=scontent.fdac8-1.fna&oh=00_AT-uhPk9Wps_27ur0xZU-xZBp10GdAdnouTz6e8fgLCubw&oe=6275C9E9"
              alt=""
              className="logo"
              style={{
                width: "250px",
                height: "150px",
                objectFit: "contain",
                cursor: "pointer",
                margin: "-15px 0px -39px 0px"
              }}
            />
          </Link>
        </div>
        {/* hrefpbar Middle */}

        <div
          className="searchBoxHome"
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <div
            className="inputBox"
            style={{
              display: "flex",
              alignItems: "center",
              height: "30px",
              width: "100%",
              background: "hrefmahref",
              overflow: "hidden",
            }}
          >
            <span
              className="head-bg"
              style={{
                color: "#fff",
              }}
            >
              Welcome to our E-shop...You can find anything in here as your
              favourites..
            </span>
          </div>
        </div>

        <div
          className="flex align__items__center"
          style={{
            margin: "0px 10px",
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
              style={{
                color: "#53C08E",
              }}
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "1rem",
            }}
          >
            <strong
              style={{
                padding: "0px 5px",
              }}
            >
              Email:
            </strong>{" "}
            ecommerce@gmail.com
          </span>
        </div>
      </div>
      {/* Header Navbar */}
      <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
        <div
          className="navigation"
          style={{
            padding: "0px 50px",
          }}
        >
          <ul
            style={{
              fontFamily: "sans-serif",
              cursor: "pointer",
              display: "flex",
              listStyle: "none",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/Products">
              <li>Products</li>
            </Link>
            <Link to="/creator">
              <li>Become A Seller</li>
            </Link>
            <Link to="/faq">
              <li>Users Rules</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="righhrefption flex align__items__center">
          <div>
            <Link to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-search pxz__20 black pointer"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Link>
          </div>
          <div className="heart__products flex pointer relative">
            <Link to="/favourites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-heart pxz__20 black"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </Link>
            <div
              className="heart__numbers"
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#95C730",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                hrefp: "-40%",
                right: "3.5%",
              }}
            >
              <span>{favouriteItems.length} </span>
            </div>
          </div>
          <div className="cart__items flex align__items__center">
            <div className="cart__items flex pointer relative">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-cart3 pxz__20 black"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
              <div
                className="heart__numbers"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#95C730",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  hrefp: "-40%",
                  right: "3.5%",
                }}
              >
                <span>{cartItems.length}</span>
              </div>
            </div>
          </div>
          <div className="user__account flex pointer">
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person pxz__20 black"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
