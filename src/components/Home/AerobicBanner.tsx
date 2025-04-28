// src/components/Home/AerobicBanner.tsx
import { Box, Button, Grid, Typography } from "@mui/material";
import { margin, styled } from "@mui/system";
import { pinkWoman } from "../../assets/images/index"; // مسیر عکس بک‌گراندت اینجا تغییر بده اگر فرق داشت
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const Background = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${pinkWoman})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: 400,
  borderRadius: 16,
  padding: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
    minHeight: 300,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)", // کمرنگ برای خوانایی متن
  padding: theme.spacing(4),
  borderRadius: 12,
  textAlign: "right",
  maxWidth: 400,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    margin: "0 auto",
  },
}));

const AerobicBanner = () => {
  return (
    <Background>
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item xs={12} md={5}>
          <ContentBox dir="rtl">
            <Typography variant="subtitle1" color="text.secondary" mb={1}>
              برای حال خوب
            </Typography>
            <Typography variant="h5" fontWeight="bold" mb={3}>
              لوازم ایروبیک و تناسب اندام بگیر
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: cssMainColors.secondary,
                borderRadius: 8,
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: cssMainColors.primary,
                },
              }}
            >
              مشاهده همه محصولات
            </Button>
          </ContentBox>
        </Grid>
      </Grid>
    </Background>
  );
};

export default AerobicBanner;
