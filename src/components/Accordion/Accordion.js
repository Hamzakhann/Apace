import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function SimpleAccordion({ questionMockArr }) {
  let [btnState, setBtnState] = React.useState(null)
  let [btnActive, setBtnActive] = React.useState(false)

  return (
    <React.Fragment>
      {questionMockArr.map((item, i) => (
        <Accordion>
          <AccordionSummary
            expandIcon={
              btnState === i && btnActive === true ? (
                <small>-</small>
              ) : (
                <small>+</small>
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => {
              setBtnState(i)
              setBtnActive(!btnActive)
            }}
          >
            <Typography variant="body1" style={{ color: "#0F4C82" }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <small>{item.description}</small>
          </AccordionDetails>
        </Accordion>
      ))}
    </React.Fragment>
  )
}
