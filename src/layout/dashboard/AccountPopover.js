"use client"
import { useMemo, useRef, useState } from 'react';
import Link from 'next/link'
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { authentication } from '@/recoil/Authentication';
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  // {
  //   label: 'Home',
  //   icon: 'eva:home-fill',
  //   linkTo: '/',
  // },
  {
    label: 'Change Password',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
  // {
  //   label: 'Settings',
  //   icon: 'eva:settings-2-fill',
  //   linkTo: '#',
  // },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const navigate = useRouter();
    const anchorRef = useRef(null);

    const [open, setOpen] = useState(null);
    const { user } = useRecoilValue(authentication);

    const [dialog, setDialog] = useState(false);
    const handleDialog = () => setDialog(!dialog);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogout = () => {
        navigate("/logout");
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    p: 0,
                    ...(open && {
                        "&:before": {
                            zIndex: 1,
                            content: "''",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            position: "absolute",
                            bgcolor: (theme) =>
                                alpha(theme.palette.grey[900], 0.1),
                        },
                    }),
                }}
            >
                <Avatar
                    sx={{ bgcolor: grey[500], width: 40, height: 40 }}
                    aria-label="recipe"
                >
                    
                </Avatar>
            </IconButton>

            <MenuPopover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                sx={{
                    p: 0,
                    mt: 1.5,
                    ml: 0.75,
                    "& .MuiMenuItem-root": {
                        typography: "body2",
                        borderRadius: 0.75,
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {user?.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        noWrap
                    >
                        {user?.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem
                            key={option.label}
                            to={option.linkTo}
                            component={Link}
                            onClick={handleDialog}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: "dashed" }} />

                <MenuItem onClick={handleLogout} sx={{ m: 1, color: "red" }}>
                    Logout
                </MenuItem>
            </MenuPopover>
        </>
    );
}
