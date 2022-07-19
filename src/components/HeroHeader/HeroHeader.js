import React from "react"
import "./HeroHeader.css"
import { Grid, Typography } from "@mui/material"

const HeroHeader = () => {
  return (
    <div className="Hero_header_container">
      <Grid container spacing={3} className="Grid_container_spread_tablet">
        <Grid item xs={12} md={6}>
          <div className="hero_header_content">
            <Typography variant="h1">Get your instant refund.</Typography>
            <Typography variant="body1">
              Don't wait 3-7 business days to receive your refund when returning
              your purchase to the retailer.{" "}
              <span>Use Apace to get refunded instantly.</span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="hero_header_img">
            <img src="/images/banner.png" alt="banner" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroHeader
