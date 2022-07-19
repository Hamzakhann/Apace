import React from "react"
import { Grid, Typography } from "@mui/material"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer_container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9} lg={9} xl={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <div className="section_1">
                <img src="/images/logo.png" alt="logo" />
                <small>Call Us:</small>
                <span className="section1_num">1-888-718-1004</span>
                <small>Email Us:</small>
                <span>info@apacepayments.com</span>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <div className="section_2">
                <Typography variant="h5">Merchants</Typography>
                <small>Partner with Apace</small>
                <small>Transparency</small>
                <small>Integrate</small>
                <small>Merchant sign in</small>
                <small>Merchant sign up</small>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <div className="section_2">
                <Typography variant="h5">Consumers</Typography>
                <small>How it works</small>
                <small>ApaceBlue</small>
                <small>Why apace?</small>
                <small>Your instant refund</small>
                <small>Consumer login</small>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <div className="section_2">
                <Typography variant="h5">Support</Typography>
                <small>Apace for retailers</small>
                <small>Developer support</small>
                <small>Frequently Asked Questions</small>
                <small>Contact</small>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={2}>
          <div className="section_3">
            <div className="line"></div>
            <div className="connected">
              <Typography variant="h5">Stay Connected</Typography>
              <div className="box_container">
                <img src="/images/insta.svg" alt="instagram" />
                <img src="/images/lindedin.svg" alt="linkedin" />
                <img src="/images/fb.svg" alt="facebook" />
                <img src="/images/twitter.svg" alt="twitter" />
              </div>
            </div>
            <div className="works">
              <Typography variant="h5">In the Works</Typography>
              <div className="box_container">
                <img src="/images/appstore.png" alt="instagram" />
                <img src="/images/googlestore.png" alt="twitter" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="footer_end_container">
        <div className="terms">
          <small>Privacy Policy</small>
          <small>Terms of Conditions</small>
          <small>Site by Yudart</small>
        </div>
        <div className="copy_right">
          <small>© 2022 Apace payments Inc.</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
