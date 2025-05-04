import { Box, Container, Grid } from "@mui/material";
import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";
import FooterBadges from "./FooterBadgeSection";
// import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#00101E", color: "#fff", mt: 8, pt: 6, pb: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={12} md={4}>
            <FooterTop />
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <FooterLinks />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FooterBadges />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FooterLegal />
          </Grid>


          {/* <Grid item xs={12}> */}
          {/*   <FooterCopyright /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
