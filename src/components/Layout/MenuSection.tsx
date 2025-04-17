import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import { menuItems } from "../../constants/MenuItem";

const CustomDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== "highlight",
})<{ highlight?: boolean }>(({ theme, highlight }) => ({
  borderColor: highlight ? theme.palette.primary.main : theme.palette.divider,
  borderBottomWidth: highlight ? 2 : 1,
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const MenuSection = () => {
  return (
    <List disablePadding>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton sx={{ py: 1.2 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
          {index < menuItems.length - 1 && (
            <CustomDivider highlight={index === 0} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default MenuSection;
