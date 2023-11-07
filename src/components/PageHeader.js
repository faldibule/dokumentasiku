"use client"
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

const PageHeader = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <title>{`${title} | Dokumentasiku`}</title>
    <meta name="description" content="undefined" />
    <meta property="og:url" content="https://github.com/theodevoid/v6-academy/blob/main/apps/web/src/components/HeadMetaData.tsx" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title + ' | Faldibule'} />
    <meta property="og:description" content="undefined" />
    <meta property="og:image" content="" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="github.com" />
    <meta property="twitter:url" content="https://github.com/theodevoid/v6-academy/blob/main/apps/web/src/components/HeadMetaData.tsx" />
    <meta name="twitter:title" content={title + ' | Terakom'} />
    <meta name="twitter:description" content="undefined" />
    <meta name="twitter:image" content="" />
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default PageHeader;
