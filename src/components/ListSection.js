"use client"
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
//
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 35,
  position: 'relative',
  // textTransform: 'capitalize',
  color: 'white',
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 16,
  height: 16,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active, activeSection, parentUrl }) {
  const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen((prev) => true);
  };

  const activeRootStyle = {
    color: '#0D4C92',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const activeSubStyle = {
    fontWeight: 'fontWeightMedium',
    borderLeft: 1, pl: 2, 
    borderColor: '#3190F0', 
    color: '#3190F0'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemText sx={{ fontWeight: 'bold', color: 'grey.500', fontSize: '0.9rem' }} disableTypography primary={title} />
          {info && info}
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path: childPath } = item;
              const tempChild = childPath.replaceAll('/', '').replaceAll('#', '') 
              const isActiveList = activeSection === tempChild

              return (
                <ListItemStyle
                  key={title}
                  component={Link}
                  to={`${parentUrl}${path}${childPath}`}
                  sx={{
                    pl: 2,
                    ...(isActiveList && activeSubStyle),
                  }}
                >
                  <ListItemText sx={{ fontSize: '0.8rem', fontWeight: 'bold' }} disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
        sx={{
          ...(isActiveRoot && activeRootStyle),
        }}
      >
        <ListItemText sx={{ fontWeight: 'bold', color: 'grey.500', fontSize: '0.9rem' }} disableTypography primary={title} />
        {info && info}
      </ListItemStyle>
  );
}

ListSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function ListSection({ navConfig, activeSection, parentUrl, ...other }) {
  const pathname = usePathname();

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={() => {}} activeSection={activeSection} parentUrl={parentUrl} />
        ))}
      </List>
    </Box>
  );
}
