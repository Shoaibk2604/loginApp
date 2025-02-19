import { FormControl, InputBase, InputLabel } from "@mui/material";
import React from "react";

export const TextBox = ({ label, placeHolder }) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel
        style={{ color: "#2B3674", fontSize: "18px" }}
        color="#2B3674"
        shrink
        htmlFor="bootstrap-input"
      >
        {label}
      </InputLabel>
      <InputBase
        placeholder={placeHolder}
        id="bootstrap-input"
        sx={{
          "label + &": {
            marginTop: 2.5,
            fontSize: 16,
          },
          "& .MuiInputBase-input": {
            borderRadius: "8px",
            position: "relative",
            backgroundColor: "#ffffff",
            border: "1px solid",
            borderColor: "#E0E5F2",
            fontSize: 16,
            width: "100%",
            padding: "10px 12px",
          },
        }}
      />
    </FormControl>
  );
};
