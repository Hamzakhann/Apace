import React from "react"
import { navigate } from "gatsby"
import { PrimaryButton } from "../Button/Button"
import "./Navbar.css"

const Navbar = ({ bgColor, borderColor }) => {
  return (
    <div
      className="navbar_container"
      style={bgColor && { background: bgColor, borderBottom: borderColor }}
    >
      <div className="navbar_logo">
        <img onClick={() => navigate("/")} src="/images/logo.png" alt="logo" />
      </div>
      <div className="navbar_links">
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/work")}>How it works</p>
        <p onClick={() => navigate("/why")}>Why apace?</p>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/faq")}>FAQ</p>
        <div className="btn_container">
          <PrimaryButton>FOR BUSINESS</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
