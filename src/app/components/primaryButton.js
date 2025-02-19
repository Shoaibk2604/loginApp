import { Button, Typography } from "@mui/material";
import React from "react";

const PrimaryButton = ({ title }) => {
  return (
    <Button
      fullWidth
      sx={{
        backgroundColor: "#12372A",
        padding: "8px 12px",
        borderRadius: "8px",
      }}
    >
      <Typography sx={{ color: "#fff" }} fontSize={16} fontWeight={700}>
        {title}
      </Typography>
    </Button>
  );
};

export default PrimaryButton;
