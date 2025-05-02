import { Grid, List, ListItemText, Typography } from "@mui/material";

import { footerLinkGroups } from "../../../data/footerData";
import { FooterLinkGroup } from "../../../types/footerTypes";

const FooterLinks = () => {
  return (
    <Grid
      container
      direction="row-reverse"
      spacing={4}
      justifyContent="center"
      textAlign="right"
      pb={6}
    >
      {footerLinkGroups.map((group: FooterLinkGroup, index: number) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Typography fontWeight="bold" gutterBottom>
            {group.title}
          </Typography>
          <List dense>
            {group.items.map((item, idx) => (
              <ListItemText
                key={idx}
                primary={item}
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterLinks;
