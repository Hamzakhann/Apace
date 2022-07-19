import { Grid, Typography } from "@mui/material"
import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PrimaryButton } from "../Button/Button"
import "./ApaceFamily.css"

const ApaceFamily = () => {
  const { ref, inView, entry } = useInView()
  return (
    <div className="apace_container">
      <div className="apace_header">
        <Typography variant="h3">
          We’re always looking for passionate people.
          <br />
          <span> Join the apace family</span>.
        </Typography>
      </div>
      <div className="apace_card_container">
        <Grid
          container
          spacing={4}
          className="Grid_container_spread_tablet"
          ref={ref}
        >
          <Grid item xs={12} md={4}>
            <motion.div
              className="apace_card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img src="/images/apace_1.png" alt="apace" />
              <Typography variant="h4" className="apace_card_1">
                Diversity
              </Typography>
              <Typography variant="body1">
                The apace family is all about inclusion and diversity. We hire
                based on talent and no other reason. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              className="apace_card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img src="/images/apace_2.png" alt="apace" />
              <Typography variant="h4" className="apace_card_2">
                No fine print
              </Typography>
              <Typography variant="body1">
                We are super transparent with emplyee benifits, we dont
                overpromise unless we can overdeliver. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              className="apace_card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img
                src="/images/apace_3.png"
                alt="apace"
                className="apace_card_3_img"
              />
              <Typography variant="h4" className="apace_card_3">
                Innovation
              </Typography>
              <Typography variant="body1">
                We never stop innovating. We reward out of the box thinking and
                will always be up for a challange. No gamble, no future is a
                motto we stand by. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </div>
      <div className="btn_container_apace">
        <PrimaryButton>FUND US ON ZIPERCRUITER</PrimaryButton>
      </div>
    </div>
  )
}

export default ApaceFamily
