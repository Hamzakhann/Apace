import React, { Fragment } from "react"
import HeroHeader from "../components/HeroHeader/HeroHeader"
import Navbar from "../components/Navbar/Navbar"
import { Container } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import "../styles/global.scss"
import Works from "../components/Works/Works"
import Mission from "../components/Mission/Mission"
import Question from "../components/Question/Question"
import Merchants from "../components/Merchants/Merchants"
import Footer from "../components/Footer/Footer"
import CustomModal from "../components/Form/Form"

const Home = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" disableGutters={true}>
          <Navbar />
          <HeroHeader />
          <Works />
          <Mission />
          <Question />
          <Merchants />
          <Footer />
        </Container>
      </ThemeProvider>
    </Fragment>
  )
}

export default Home

// social icons lagane hain from font-awesome || done

// works me dummy images lagani ha || done

// padding 1.5rem || done

// images size smaller on small screens || done

// animations videos se dekhna || done
