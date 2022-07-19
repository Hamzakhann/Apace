import { Grid, Typography } from "@mui/material"
import React from "react"
import "./About.css"

const AboutHeroHeader = () => {
  return (
    <div className="about_hero_header">
      <Grid container spacing={3} className="Grid_container_spread_tablet">
        <Grid item xs={12} md={6}>
          <div className="about_hero_content">
            <Typography variant="h2" className="heading_1">
              Supplying consumers with financial tools
            </Typography>
            <Typography variant="h2" className="heading_2">
              {"&"} helping merchants drive growth.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="about_hero_header_img">
            <img src="/images/hero_2.png" alt="hero" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutHeroHeader
