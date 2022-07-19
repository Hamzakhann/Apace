import { styled } from "@mui/material/styles"
import MuiButton from "@mui/material/Button"

export const PrimaryButton = styled(MuiButton)(props => ({
  background: "#0D83B9",
  fontWeight: 700,
  color: "#ffffff",
  textAlign: "center",
  width: "196px",
  height: "42px",
  "&:hover": {
    background: "#e1d06f",
  },
  borderRadius: "10px",
}))

export const OutlineButton = styled(MuiButton)(props => ({
  background: "#ffffff",
  fontWeight: 700,
  color: "#0D83B9",
  textAlign: "center",
  width: "196px",
  height: "42px",
  "&:hover": {
    background: "#e1d06f",
  },
  borderRadius: "10px",
}))
