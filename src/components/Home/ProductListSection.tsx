// src/component/Home/ProductListSection.tsx
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductItem } from "../../types/ProductItem";

// interface ProductItem {
//   image: string;
//   title: string;
//   discount: string;
//   price: string;
//   sizes: string[];
// }

const ProductListSection = ({
  title,
  products,
}: {
  title: string;
  products: ProductItem[];
}) => {
  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        {title}
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductListSection;
