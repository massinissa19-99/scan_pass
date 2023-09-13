import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import logoTransparent from "../../../Assets/sonatrachImg/logoTransparent.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        md={12}
        alignItems={"center"}
        sx={{
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={LazyLoadImage}
          height="250px"
          width="200px"
          src={logoTransparent}
          alt="..."
          effect="blur"
          boxShadow={22}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
          }}
        />
        <Box
          data-aos={isMd ? "fade-right" : "fade-up"}
          paddingLeft={isMd && 2}
          p={1}
        >
          <Box marginBottom={2}>
            <Typography
              // variant="h4"
              color="text.primary"
              sx={{
                // marginTop: "20px",
                color: "white",
                fontSize: "16px",
                letterSpacing: "2px",
              }}
            >
              <span
                style={{
                  fontWeight: 400,
                  // borderBottom: "3px solid rgb(240,128,0)",
                  padding: "5px",
                  marginRight: "15px",
                
                }}
              >
                L’Énergie du
              </span>
           
              <Typography
                component={"span"}
                variant={"inherit"}
                sx={{
                  fontWeight: 900,
                  color: "#f08000",
                }}
              >
                {" "}
                Changement
              </Typography>
              <hr style={{width:"7%", margin:"0 40%", color:"rgb(240,128,0)", border:"2px solid", opacity:"1"}}/>
            </Typography>
          </Box>
          <Box
            marginBottom={3}
            sx={{
              width: "60%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
              <Typography
              variant="h6"
              component="p"
              sx={{
                color: "#F9FAFE",
                fontSize: "28px",
                fontWeight: "bolder",
                marginTop: "8%",
                letterSpacing: "8px",
               
              }}
            >
              Bienvenue dans notre espace client !
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "#cdcdcd",
                fontSize: "16px",
                marginBottom: "30px",
                letterSpacing: "1px",
              }}
            >
              SONATRACH, acteur majeur dans l’industrie pétrolière, première
              entreprise du continent Africain, à travers ses partenaires
              SONATRACH est présente dans de nombreux pays.
            </Typography>
          
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              fullWidth={isMd ? false : true}
              href="#contacts"
              sx={{
                marginRight: isMd ? "2%" : null,
                background: "#1e24c1",
                borderRadius: "15px",

                ":hover": { background: "#454cfa", color: "white" },
              }}
            >
              Je suis visiteur
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth={isMd ? false : true}
              href="/login"
              sx={{
                background: "#f08000",
                borderRadius: "15px",
                ":hover": { background: "#f06000", color: "white" },
              }}
            >
              Je suis employé
            </Button>
            {/* <Button
              variant="contained"
              color="#fff"
              size="large"
              href="/login"
          
              fullWidth={isMd ? false : true}
              sx={{ border: "none", borderRadius: "15px",background:"#f08000",
                ":hover": { background: "#454cfa", color: "white"},
                }}
            >
              
              Je suis employé
            </Button> */}
          </Box>
        </Box>
      </Grid>
      {/* <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={pass}
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
          }}
        />
      </Grid> */}
    </Grid>
  );
};

export default Hero;
