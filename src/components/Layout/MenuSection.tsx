import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import { menuItems } from "../../constants/MenuItem";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const CustomDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== "highlight",
})<{ highlight?: boolean }>(({ theme, highlight }) => ({
  borderColor: highlight ? theme.palette.primary.main : theme.palette.divider,
  borderBottomWidth: highlight ? 2 : 1,
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const MenuSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); 

  return (
    <List disablePadding>
      {menuItems.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <React.Fragment key={index}>
            <ListItemButton
              sx={{
                py: 1.2,
                color: isActive ? cssMainColors.warmOrange : "inherit",
                fontWeight: isActive ? "bold" : "normal",
              }}
              selected={isActive}
              onClick={() => setActiveIndex(index)}
            >
              <ListItemIcon
                sx={{
                  color: isActive
                    ? cssMainColors.warmOrange
                    : "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive ? "bold" : "normal",
                }}
              />
            </ListItemButton>

            {index < menuItems.length - 1 && (
              <CustomDivider highlight={isActive} />
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default MenuSection;
