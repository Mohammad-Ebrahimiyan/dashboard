// src/components/Home/PromoSection.tsx
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

interface ProductItem {
  image: string;
  title: string;
  discount: string;
}

interface PromoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  products: ProductItem[];
}

const PromoBox = styled(Box)(({ theme }) => ({
  padding: "40px 0",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const ProductCard = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
}));

const DiscountTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: theme.palette.text.primary,
  color: "#fff",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 30,
  padding: "16px",
  fontSize: "1rem",
  fontWeight: "bold",
  direction: "rtl",
}));

export const PromoSection = ({
  title,
  description,
  buttonText,
  products,
}: PromoSectionProps) => {
  return (
    <PromoBox>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight="bold" color="text.primary" mb={2}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {description}
          </Typography>
          <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4 }}>
            {buttonText}
          </Button>
        </Grid>

        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard>
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "auto" }} />
              <DiscountTag>
                {product.title} <br />{" "}
                <span style={{ color: cssMainColors.crimsonRed }}>{product.discount}</span>
              </DiscountTag>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </PromoBox>
  );
};

export default PromoSection;
