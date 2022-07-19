import React from "react"
import { Typography } from "@mui/material"
import CustomAccordion from "../Accordion/Accordion"
import "./Question.css"

const Question = () => {
  const questionMockArr = [
    {
      title: "Is Apace a loan?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
    {
      title: "Does Apace operate on weekends or holidays?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
    {
      title: "Where can Apace send funds?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
    {
      title: "How do I utilize Apace services?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
    {
      title: "How long will it take for me to receive my money?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
    {
      title: "Still have questions?",
      description:
        "Apace simply bridges the gap. The money belongs to you at the point of approved return; Apace simply helps to get it in your pocket faster. We do this by issuing a cash advance from the time of return until the money would theoretically hit your account (anywhere from 4-16 days).",
    },
  ]
  return (
    <div className="question_container">
      <div className="question_header">
        <Typography variant="h3">
          Your Frequently Asked Questioned, <span>answered</span>.
        </Typography>
      </div>
      <div className="question_section">
        <CustomAccordion questionMockArr={questionMockArr} />
      </div>
    </div>
  )
}

export default Question
