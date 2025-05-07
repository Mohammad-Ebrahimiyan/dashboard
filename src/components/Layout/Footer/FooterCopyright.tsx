// src/components/Footer/FooterCopyright.tsx
import { Grid, Divider, Typography, Box, Link } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import TelegramIcon from "@mui/icons-material/Telegram";

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
        px={4}
      >
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" ml={8}>
            <Link
              variant="body2"
              color="rgba(255,255,255,0.4)"
              pl={3}
              href="https://t.me/kak_mohammad"
              target="_blank"
              underline="none"
            >
              [https://t.me/kak_mohammad] طراحی شده توسط محمد ابراهیمیان
            </Link>
            <TelegramIcon
              sx={{
                ml: 1,
                color: "rgba(255,255,255,0.4)",
                fontSize: 18,
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
            alignItems="center"
            gap={1}
            pr={2}
            ml={63}
            paddingRight={11}
          >
            <Typography variant="body2" color="rgba(255,255,255,0.4)">
              تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ
              می‌باشد
            </Typography>
            <SecurityIcon
              sx={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterCopyright;
