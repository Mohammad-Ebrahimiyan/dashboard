import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import { serviceHighlights } from "../../data/serviceHighlightsData";

const ServiceHighlights = () => {
  return (
    <Box sx={{ backgroundColor: "#F1F9FF", py: 6, mt: 6 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" fontWeight="bold" mb={1} textAlign="center" sx={{ color: "#002244" }}>
            با بیش از ده سال سابقه فروش لوازم ورزشی و لباس‌های ورزشی
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={2} justifyContent="center">
            {serviceHighlights.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    textAlign: "center",
                    borderRadius: 3,
                    border: "1px solid #d0e5f6",
                  }}
                >
                  <Stack alignItems="center" spacing={1}>
                    {item.icon}
                    <Typography fontWeight="bold" sx={{ color: "#08365E" }}>
                      {item.title}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceHighlights;
