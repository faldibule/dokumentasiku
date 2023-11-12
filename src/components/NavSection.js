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
  textTransform: 'capitalize',
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

function NavItem({ item, active }) {
  const theme = useTheme();

  const isActiveRoot = active(item.path);
  const pathname = usePathname();

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: '#0D4C92',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const activeSubStyle = {
    color: '#3399FF',
    borderLeft: 1,
    borderColor: '#3399FF',
    fontWeight: 'fontWeightMedium',
    bgcolor: 'grey.800'
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          {open ?
          <KeyboardArrowDown sx={{ color: '#007CF9', fontSize: '1.2rem' }} />
          :
          <KeyboardArrowRight sx={{ color: '#007CF9', fontSize: '1.2rem' }} />
          }
          <ListItemText sx={{ fontWeight: 'bold' }} disableTypography primary={title} />
          {info && info}
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path: childPath } = item;
              const tempChildPath = childPath.replace('/', '')
              const isActiveSub = pathname.split('/')[3] === tempChildPath;

              return (
                <ListItemStyle
                  key={title}
                  component={Link}
                  to={`${path}/${childPath}`}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
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
      component={Link}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={() => false} />
        ))}
      </List>
    </Box>
  );
}
