import React from "react";
import "./header.css";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <header className={"header"}>
      <Link to="/">
        <img
          className={"logo-header"}
          src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png"
          alt="Amazon"
        />
      </Link>
      <div className={"search-header"}>
        <input className={"inputtext-header"} type="text" />
        <IoMdSearch className={"search-logo"} />
      </div>
      <div className={"nav-header"}>
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className={"options-header"}>
            <span className={"option-optionlineOne"}>
              Hello {user ? user.email : "Guest"}
            </span>
            <span className={"option-optionlineTwo"}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={"options-header"}>
          <span className={"option-optionlineOne"}>Returns</span>
          <span className={"option-optionlineTwo"}>& Orders</span>
        </div>
        <div className={"options-header"}>
          <span className={"option-optionlineOne"}>Your</span>
          <span className={"option-optionlineTwo"}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={"shopbasket"}>
            <MdShoppingBasket className={"shopbasketIcon"}></MdShoppingBasket>
            <span className={"option-optionlineTwo header-basketcount"}>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
