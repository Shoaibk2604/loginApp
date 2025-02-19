import Image from "next/image";
import styles from "./page.module.css";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Logo from "../../public/logo.png";
import Loginform from "./loginform";

const footerLinks = [
  { label: "Instructions" },
  { label: "License" },
  { label: "Terms of use" },
  { label: "Privacy" },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box>
          <Grid container justifyContent="center">
            <Grid size={10}>
              <Box
                sx={{
                  marginTop: "4em",
                  marginBottom: "3em",
                }}
              >
                <Typography
                  variant="h2"
                  textAlign="center"
                  color="#FFFFFF"
                  fontWeight="900"
                  sx={{
                    fontSize: {
                      xs: 36,
                      sm: 48,
                      md: 64,
                      lg: 64,
                    },
                  }}
                >
                  Card payment Checkout form
                </Typography>
              </Box>
              <Grid container>
                <Grid
                  size={12}
                  sx={{
                    marginBottom: "24px",
                    background: "#ffffff",
                    borderRadius: "46px",
                    padding: {
                      xs: "30px 40px 2px 30px",
                      sm: "40px 60px 2px 40px",
                      md: "60px 80px 2px 60px",
                      lg: "60px 80px 2px 60px",
                    },
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}
                  >
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Stack alignItems="center" justifyContent="center">
                        <Image
                          src={Logo}
                          alt="paymentLogo"
                          width={92}
                          height={95}
                        />
                        <Typography
                          sx={{
                            fontSize: {
                              xs: 30,
                              sm: 34,
                              md: 40,
                              lg: 40,
                            },
                          }}
                          mt={3}
                          variant="h1"
                          fontWeight="900"
                          textAlign="center"
                          color="#12372A"
                        >
                          Payment gateway
                        </Typography>
                        <Typography
                          fontSize={18}
                          variant="h6"
                          fontWeight="500"
                          color="#A3AED0"
                        >
                          Enter school location details!
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Loginform />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: "3em 0px" }}
                  >
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Typography
                        textAlign="center"
                        color="#A3AED0"
                        fontWeight={700}
                        fontSize={14}
                      >
                        © 2024. All Rights Reserved. Made by Switcher.faiz!
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Stack
                        direction="row"
                        spacing={3}
                        alignItems="center"
                        justifyContent="center"
                      >
                        {footerLinks.map((link) => (
                          <Typography
                            key={link.label}
                            color="#12372A"
                            fontWeight={600}
                            fontSize={14}
                          >
                            {link.label}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
