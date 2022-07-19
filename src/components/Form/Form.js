import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import "./Form.css"
import MenuItem from "@mui/material/MenuItem"
import { OutlineButton } from "../Button/Button"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 900,
  margin: "0 0 0 0",
  bgcolor: "#00B1FF",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
}

export default function CustomModal({ setFormState }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setFormState(false)

  return (
    <React.Fragment>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="mui_custom_box">
          <div className="form_container">
            <div className="close_icon" onClick={() => setFormState(false)}>
              <img src="/images/close.svg" alt="close btn" />
            </div>
            <div className="form">
              <Typography variant="h4">Spill the tea..</Typography>
              <input type="text" placeholder="Your Name*" />
              <br />
              <input type="text" placeholder="Email Address*" />
              <br />
              <select>
                <option disabled={true}>Choose</option>
                <option value="hello">Company that you'd like to</option>
                <option>Email Address</option>
                <option>Company</option>
                <option>Comment</option>
              </select>
              <br />
              <textarea
                type="text"
                className="textArea"
                placeholder="Leave a message for your retailer.*"
              />
              <br />
              <div className="btn_container">
                <OutlineButton>SEND IT!</OutlineButton>
              </div>
              <div className="agreeText">
                <Typography variant="body1">
                  By submitting this form you agree to our privacy policy. By
                  submitting this form you agree to our privacy policy. By
                  submitting this form you agree to our privacy policy.
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  )
}
