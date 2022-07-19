import React from "react"
import { Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./Mission.css"

const Mission = () => {
  const { ref, inView, entry } = useInView()
  return (
    <div className="mission_container">
      <div className="mission_header">
        <Typography variant="h3">
          Our mission is simple. Provide you with the benifit of{" "}
          <span>instant refunds</span>. Period.
        </Typography>
      </div>
      <div className="mission_card_container">
        <Grid
          container
          spacing={4}
          className="Grid_container_spread_tablet"
          ref={ref}
        >
          <Grid item xs={12} md={4}>
            <motion.div
              className="card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img src="/images/card_1.png" alt="card" />
              <Typography variant="h4">Accessibility</Typography>
              <Typography variant="body1">
                Money comes and goes. Too often, waiting for a refund ties up
                your money for weeks. Apace unties that knot and gives you the
                control over your refund.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              className="card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img src="/images/card_2.png" alt="card" />
              <Typography variant="h4">Transparency</Typography>
              <Typography variant="body1">
                The Apace fee structure is simple and always the same. 1.9% of
                the total refund cost gets deducted. Never more. Never less.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              className="card"
              animate={{
                scale: inView ? 1 : 0,
              }}
              initial={{ scale: inView ? 1 : 0 }}
              transition={{
                type: "spring",
              }}
            >
              <img src="/images/card_3.png" alt="card" />
              <Typography variant="h4">Flexibility</Typography>
              <Typography variant="body1">
                Apace makes your shopping experience flexible and stress-free.
                With Apace, your refund will be in your bank account instantly
                allowing you to freely repurchase or rebook.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Mission
