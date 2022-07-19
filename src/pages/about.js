import React, { Fragment } from "react"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { Container } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import AboutHeroHeader from "../components/HeroHeader/About/About"
import Fast from "../components/Fast/Fast"
import LeaderShip from "../components/LeaderShip/LeaderShip"
import ApaceFamily from "../components/ApaceFamily/ApaceFamily"
import ApaceTheme from "../components/ApaceTheme/ApaceTheme"

const about = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" disableGutters={true}>
          <Navbar bgColor="#F7FDFF" borderColor="26px solid #D1D1D1" />
          <AboutHeroHeader />
          <Fast />
          <LeaderShip />
          <ApaceFamily />
          <ApaceTheme />
          <Footer />
        </Container>
      </ThemeProvider>
    </Fragment>
  )
}

export default about
