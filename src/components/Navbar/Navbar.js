import React, { Fragment, useState } from "react"
import { navigate } from "gatsby"
import { PrimaryButton } from "../Button/Button"
import "./Navbar.css"

const Navbar = ({ bgColor, borderColor }) => {
  let [linksOpener, setLinkOpenner] = useState(false)
  function openMobileLinks() {
    setLinkOpenner(!linksOpener)
  }
  return (
    <Fragment>
      <div
        className="navbar_container"
        style={bgColor && { background: bgColor, borderBottom: borderColor }}
      >
        <div className="navbar_logo">
          <img
            onClick={() => navigate("/")}
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="navbar_mob_links" onClick={openMobileLinks}>
          <img src="/images/opener.svg" alt="opener" />
        </div>
        <div className="navbar_links">
          <p onClick={() => navigate("/")}>Home</p>
          <p>How it works</p>
          <p>Why apace?</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p>FAQ</p>
          <div className="btn_container">
            <PrimaryButton>FOR BUSINESS</PrimaryButton>
          </div>
        </div>
      </div>
      {linksOpener ? (
        <Fragment>
          {" "}
          <div className="mobile_links_container">
            <div className="mobile_links">
              <div className="mobile_logo">
                <img
                  onClick={() => navigate("/")}
                  src="/images/logo.png"
                  alt="logo"
                />
              </div>
              <div className="img_container_closer">
                <img
                  src="/images/close.svg"
                  alt="close"
                  onClick={openMobileLinks}
                />
              </div>
              <p onClick={() => navigate("/")}>Home</p>
              <p>How it works</p>
              <p>Why apace?</p>
              <p onClick={() => navigate("/about")}>About</p>
              <p>FAQ</p>
            </div>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  )
}

export default Navbar
