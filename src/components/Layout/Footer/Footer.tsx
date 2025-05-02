import { Box, Container } from "@mui/material";
import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";
import FooterBadges from "./FooterBadgeSection";
// import FooterCopyright from "./FooterCopyright"; a

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#00101E", color: "#fff", mt: 8, pt: 6, pb: 3 }}>
      <Container maxWidth="xl">
        <FooterTop />
        <FooterLinks />
        <FooterLegal />
        <FooterBadges />
        {/* <FooterCopyright /> */}
      </Container>
    </Box>
  );
};

export default Footer;
