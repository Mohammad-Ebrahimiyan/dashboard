// src/components/Footer/FooterCopyright.tsx
import { Grid, Divider, Typography, Box } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const FooterCopyright = () => {
  return (
    <Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.7)", width: "100%" }} />
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        pt={2}
        px={2}
      >
        <Grid item xs={12} md={6}>
            
          <Typography
            variant="caption"
            color="rgba(255,255,255,0.4)"
            paddingLeft={15}
          >
            ([https://t.me/kak_mohammad] طراحی شده توسط محمد ابراهیمیان)
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.4)"
            textAlign={{ xs: "center", md: "right" }}
            marginLeft={71}
            paddingRight={15}
          >
            .تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد
          </Typography>
        </Grid>

      </Grid>
      </Box>
  );
};

export default FooterCopyright;
