import { Box, Divider, Typography } from "@mui/material";
import { footerCopyright } from "../../../data/footerData";

const FooterBottom = () => {
  return (
    <Box mt={6}>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        color="gray"
        mt={2}
      >
        {footerCopyright}
      </Typography>
    </Box>
  );
};

export default FooterBottom;
