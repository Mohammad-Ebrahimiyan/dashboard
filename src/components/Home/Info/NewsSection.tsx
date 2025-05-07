import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { newsData } from "../../../data/newsData";
import { NewsItem } from "../../../types/newsItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewsCard = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

const NewsImage = styled("img")({
    width: "100%",
    height: "360px",
    objectFit: "fill",
  });
  

const NewsSection = () => {
  return (
    <Box mb={8}>
      <Typography variant="h5" fontWeight="bold" mb={4} textAlign="center">
        جدیدترین‌ ها در اخبار ورزش
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {newsData.map((news: NewsItem, index: number) => (
          <Grid item xs={12} md={6} key={index}>
            <NewsCard>
              <NewsImage src={news.image} alt={news.title} />
              <Box p={3} >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  {news.summary}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<ArrowForwardIcon />}
                  href={news.link}
                sx={{textAlign:'center'}}
                >
                  مشاهده خبر
                </Button>
              </Box>
            </NewsCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsSection;
