import { Box, Typography } from "@mui/material";
import { footerAbout } from "../../../data/footerData";

const FooterLegal = () => {
  return (
    <Box mb={4} textAlign="right"  marginLeft={30}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        فروشگاه اینترنتی فیت‌لند
      </Typography>
      <Typography
        variant="body2"
        color="rgba(255,255,255,0.7)"
        maxWidth={700}
        // ml="auto"
        lineHeight={1.8}
      >
        {footerAbout}
      </Typography>
    </Box>
  );
};

export default FooterLegal;
