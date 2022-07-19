import React, { Fragment, useState } from "react"
import { Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./Works.css"

const Works = () => {
  let [stepState, setStepState] = useState("step1")
  const step1 = useInView()
  const step2 = useInView()
  const step3 = useInView()

  return (
    <div className="works_container">
      <Grid container spacing={3} className="Grid_container_spread_tablet">
        <Grid item xs={12} md={6}>
          <div className="works_content">
            <Typography variant="h3">How it works</Typography>
            <div className="steps_container">
              <Typography
                variant="body1"
                className={stepState === "step1" ? "activeStep" : null}
                onClick={() => setStepState("step1")}
              >
                Step 1
              </Typography>
              <Typography
                variant="body1"
                className={stepState === "step2" ? "activeStep" : null}
                onClick={() => setStepState("step2")}
              >
                Step 2
              </Typography>
              <Typography
                variant="body1"
                className={stepState === "step3" ? "activeStep" : null}
                onClick={() => setStepState("step3")}
              >
                Step 3
              </Typography>
            </div>
            {stepState === "step1" ? (
              <Fragment>
                <Typography variant="h4">Go Shopping</Typography>
                <Typography variant="body1">
                  Shop your favorite stores online lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Excepteur sint occaecat
                  cupidatat non proident.
                </Typography>
              </Fragment>
            ) : null}
            {stepState === "step2" ? (
              <Fragment>
                <Typography variant="h4">Issue a Return</Typography>
                <Typography variant="body1">
                  Shop your favorite stores online lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Excepteur sint occaecat
                  cupidatat non proident.
                </Typography>
              </Fragment>
            ) : null}
            {stepState === "step3" ? (
              <Fragment>
                <Typography variant="h4">Instant Refund</Typography>
                <Typography variant="body1">
                  Shop your favorite stores online lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Excepteur sint occaecat
                  cupidatat non proident.
                </Typography>
              </Fragment>
            ) : null}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {stepState === "step1" ? (
            <Fragment>
              <div className="works_img">
                <div className="img_container">
                  <img src="/images/works_1.png" alt="works image" />
                  <motion.div
                    ref={step1.ref}
                    className="inner_img"
                    animate={{ scale: step1.inView ? 1 : 0 }}
                    initial={{ scale: step1.inView ? 1 : 0 }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <img src="/images/works_upper_1.png" alt="upper image" />
                  </motion.div>
                </div>
              </div>
            </Fragment>
          ) : null}
          {stepState === "step2" ? (
            <Fragment>
              <div className="works_img">
                <div className="img_container">
                  <img src="/images/works_1.png" alt="works image" />
                  <motion.div
                    ref={step2.ref}
                    className="inner_img"
                    animate={{
                      scale: step2.inView ? 1 : 0,
                    }}
                    initial={{ scale: step2.inView ? 1 : 0 }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <img src="/images/works_upper_1.png" alt="upper image" />
                  </motion.div>
                </div>
              </div>
            </Fragment>
          ) : null}
          {stepState === "step3" ? (
            <Fragment>
              <div className="works_img">
                <div className="img_container">
                  <img src="/images/works_1.png" alt="works image" />
                  <motion.div
                    ref={step3.ref}
                    className="inner_img"
                    animate={{
                      scale: step3.inView ? 1 : 0,
                    }}
                    initial={{ scale: step3.inView ? 1 : 0 }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <img src="/images/works_upper_1.png" alt="upper image" />
                  </motion.div>
                </div>
              </div>
            </Fragment>
          ) : null}
        </Grid>
      </Grid>
    </div>
  )
}

export default Works
