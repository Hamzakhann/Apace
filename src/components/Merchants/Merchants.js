import React, { Fragment, useState } from "react"
import { Grid, Typography } from "@mui/material"
import "./Merchants.css"
import { PrimaryButton } from "../Button/Button"
import CustomModal from "../Form/Form"

const Merchants = () => {
  let [formState, setFormState] = useState(false)
  return (
    <Fragment>
      {formState ? <CustomModal setFormState={setFormState} /> : null}
      <div className="merchants_container">
        <Grid container spacing={3} className="Grid_container_spread_tablet">
          <Grid item xs={12} md={6}>
            <div className="merchants_content">
              <div className="merchants_logo">
                <img src="/images/logo.png" alt="logo" />
                <span></span>
                <small>for retailers</small>
              </div>
              <Typography variant="body1">
                Give your retail shop an edge with apace. Earn your customer’s
                loyalty by providing the flexible, instant, and effortless
                experience that they deserve.
              </Typography>
              <div className="btn_container_merchants">
                <PrimaryButton onClick={() => setFormState(!formState)}>
                  FOR MERCHANTS
                </PrimaryButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="merchants_img">
              <img src="/images/merchant_1.png" alt="merchants" />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Merchants
