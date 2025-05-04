import { Grid, List, ListItemText, Typography } from "@mui/material";

import { footerLinkGroups } from "../../../data/footerData";
import { FooterLinkGroup } from "../../../types/footerTypes";

const FooterLinks = () => {
  return (
    <Grid
    container
    direction='row-reverse'
    spacing={5}
    textAlign="right"
    sx={{margin:'25px 0 0 250px'}}
    >
      {footerLinkGroups.map((group: FooterLinkGroup, index: number) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Typography fontWeight="bold" gutterBottom>
            {group.title}
          </Typography>
          <List>
            {group.items.map((item, idx) => (
              <ListItemText
                key={idx}
                primary={item}
                sx={{ marginBottom: 2 }} 
                // primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterLinks;
