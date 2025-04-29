// src/components/Home/PromoSection.tsx
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/system";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductListSection from "./ProductListSection";

interface ProductItem {
  image: string;
  title: string;
  discount: string;
  price?: string;
  sizes?: string[];
  colors?: string[];
}

interface PromoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  products: ProductItem[];
  backgroundColor?: string;
  titleBackground?: boolean;
  titleAlign?: string;
}

const PromoBox = styled(Box)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor }) => ({
    backgroundColor: backgroundColor || theme.palette.background.paper,
    padding: "50px 10px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  })
);


const Title = styled(Typography)(() => ({
  background: cssMainColors.primary,
  color: "#fff",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "center",
  marginBottom: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

const PromoSection = ({
  title,
  description,
  buttonText,
  products,
  backgroundColor,
  // titleAlign,
 // titleBackground,

}:
PromoSectionProps) => {
  return (
    <PromoBox backgroundColor={backgroundColor}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} sx={{ ml: { md: "auto" } }}>
          <Title variant="h5" fontWeight="bold">
            {title}
            <ArrowForwardIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />
          </Title>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {description}
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ borderRadius: 2, px: 4 }}
          >
            {buttonText}
          </Button>
        </Grid>

        
        <Grid item xs={12} md={8}>
          <ProductListSection title={title} products={products} />
        </Grid>
      </Grid>
    </PromoBox>
  );
};

export default PromoSection;
