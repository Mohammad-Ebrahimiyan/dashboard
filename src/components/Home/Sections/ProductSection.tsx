import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { ProductItem } from "../../../types/productItem";


const ProductCard = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(2),
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

const DiscountTag = styled(Box)(() => ({
  position: "absolute",
  top: 10,
  left: 10,
  backgroundColor: cssMainColors.crimsonRed,
  color: "#fff",
  padding: "5px 10px",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "4px",
}));

const ProductDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const ProductSection = ({ title, products }: { title: string, products: ProductItem[] }) => {
  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        {title}
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard>
              <DiscountTag>{product.discount}</DiscountTag>
              <ProductImage src={product.image} alt={product.title} />
              <ProductDetails>
                <Typography variant="h6" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={2}>
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" size="small">
                  مشاهده جزئیات
                </Button>
              </ProductDetails>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
