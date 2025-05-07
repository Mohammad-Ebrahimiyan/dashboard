import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import {BannerProps} from '../../../types/bannerProps'
const Background = styled(Box)(({ theme }) => ({
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: 650,
  padding: theme.spacing(6),
  display: "flex",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
    minHeight: 300,
  },
  marginBottom: '60px',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: theme.spacing(4),
  borderRadius: 12,
  textAlign: "right",
  maxWidth: 400,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    margin: "0 auto",
  },
}));


const Banner = ({ image, subtitle, title, buttonText }: BannerProps) => {
  return (
    <Background style={{ backgroundImage: `url(${image})` }}>
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item xs={12} md={5}>
          <ContentBox dir="rtl">
            <Typography variant="subtitle1" color="text.secondary" mb={1}>
              {subtitle}
            </Typography>
            <Typography variant="h5" fontWeight="bold" mb={3}>
              {title}
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
              {buttonText}
            </Button>
          </ContentBox>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Banner;
