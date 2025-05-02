import { Box, Typography, IconButton, TextField, Button, Stack } from "@mui/material";
import { socialLinks } from "../../../data/footerData";
import { SocialLink } from "../../../types/footerTypes";

const FooterTop = () => {
  return (
    <Box sx={{ py: 4, display: "flex", flexDirection: "column", alignItems: "flex-start", pl: 20 }}>
      <Typography variant="subtitle1" mb={2}>
        برای دریافت تخفیف‌های بیشتر ما را دنبال کنید!
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        {socialLinks.map((item: SocialLink, index: number) => (
          <IconButton
            sx={{ background: "white" }}
            key={index}
            component="a"
            href={item.href}
            target="_blank"
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      <Typography variant="subtitle2" gutterBottom>
        خبرنامه فیت‌لند
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
      
            maxWidth: 400 
            
        }}
        
      >
        <TextField
    
          variant="outlined"
          placeholder="ایمیل خود را وارد کنید..."
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFA726", 
              },
              "&:hover fieldset": {
                borderColor: "#FF9800",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF5722",
              },
            },
          }}
        />
        <Button variant="contained" color="warning" size="small">
          ثبت
        </Button>
      </Stack>
    </Box>
  );
};

export default FooterTop;
