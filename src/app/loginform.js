import { Box, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { TextBox } from "./components/textBox";
import PrimaryButton from "./components/primaryButton";

const Loginform = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="left"
        sx={{
          fontSize: {
            xs: 20,
            sm: 24,
            md: 28,
            lg: 28,
          },
        }}
        color="#000000"
        fontWeight="600"
      >
        Complete registration payment
      </Typography>
      <Typography
        mt={1.5}
        variant="h2"
        textAlign="left"
        sx={{
          fontSize: {
            xs: 18,
            sm: 18,
            md: 22,
            lg: 22,
          },
        }}
        color="#000000"
        fontWeight="600"
      >
        Personal details
      </Typography>
      <Grid container spacing={3} mt={2}>
        <Grid size={6}>
          <TextBox label="Address line" placeHolder="P.o.Box 1223" />
        </Grid>
        <Grid size={6}>
          <TextBox label="City" placeHolder="Arusha" />
        </Grid>
        <Grid size={6}>
          <TextBox label="State" placeHolder="Arusha,Tanzania" />
        </Grid>
        <Grid size={6}>
          <TextBox label="Postal code" placeHolder="9090" />
        </Grid>
      </Grid>
      <Typography
        mt={2}
        variant="h2"
        textAlign="left"
        fontSize={24}
        color="#000000"
        fontWeight="700"
      >
        Payment methods
      </Typography>
      <Stack direction="row" gap={2} mt={2}>
        {[...Array(5)].map((elm, i) => {
          return (
            <Box
              key={i}
              sx={{
                background: "#FFF4EE",
                width: "52px",
                height: "36px",
                borderRadius: "8px",
              }}
            />
          );
        })}
      </Stack>
      <Grid container spacing={3} mt={2}>
        <Grid size={12}>
          <TextBox label="Cardholder's name" placeHolder="Seen on your card" />
        </Grid>
        <Grid size={12}>
          <TextBox label="Card number" placeHolder="Seen on your card" />
        </Grid>
        <Grid size={6}>
          <TextBox label="Expirity" placeHolder="20/26" />
        </Grid>
        <Grid size={6}>
          <TextBox label="CVC" placeHolder="654" />
        </Grid>
        <Grid size={12}>
          <PrimaryButton title="Next" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loginform;
