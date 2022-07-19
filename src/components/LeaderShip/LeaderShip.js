import { Grid, Typography } from "@mui/material"
import React from "react"
import "./LeaderShip.css"

const LeaderShip = () => {
  return (
    <div className="leader_ship_container">
      <Typography variant="body1">Meet our leadership team</Typography>
      <div className="leader_container">
        <Grid container spacing={10}>
          <Grid item xs={12} md={3}>
            <div className="leader_ship_card">
              <div className="img_container">
                <img src="/images/leader_1.png" alt="Leader ship picture" />
              </div>
              <small>Mache Lax</small>
              <span>Founder {"&"} CEO</span>
              <img src="/images/arr.png" alt="arrow" className="arrow" />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leader_ship_card">
              <div className="img_container">
                <img src="/images/leader_2.png" alt="Leader ship picture" />
              </div>
              <small>Lisa Kudrwo</small>
              <span>Cheif Revenue Officer</span>
              <img src="/images/arr.png" alt="arrow" className="arrow" />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leader_ship_card">
              <div className="img_container">
                <img src="/images/leader_3.png" alt="Leader ship picture" />
              </div>
              <small>Chi Simons</small>
              <span>Cheif Marketing Officer</span>
              <img src="/images/arr.png" alt="arrow" className="arrow" />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leader_ship_card">
              <div className="img_container">
                <img src="/images/leader_4.png" alt="Leader ship picture" />
              </div>
              <small>Yitz Dancziger</small>
              <span>Head Of Development</span>
              <img src="/images/arr.png" alt="arrow" className="arrow" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default LeaderShip
