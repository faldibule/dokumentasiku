import { Stack, Typography } from '@mui/material'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function DownloadDialog({ open, handleClose, handleDownload, loading }) {
   return (
      <Dialog
         fullWidth
         maxWidth="xs"
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <DialogTitle>Download</DialogTitle>
         <DialogContent>
            <DialogContentText>Are you sure want to download this data?</DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button variant="text" onClick={handleClose}>
               Cancel
            </Button>
            <LoadingButton loading={loading} variant="text" color="secondary" onClick={handleDownload} autoFocus>
               Download
            </LoadingButton>
         </DialogActions>
      </Dialog>
   );
}
`

const DownloadDialog = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>DownloadDialog</Typography>
            <Typography variant='p' color='grey.400'>
                DownloadDialog - adalah sebuah component yang dibuat untuk memunculkan dialog atau pop up saat user saat ingin melakukan download suatu file.
            </Typography>
            <Stack>
                <CodeBlock 
                    codeString={codeToDisplay}
                    language='javascript'
                />
            </Stack>
        </Stack>
    </div>
  )
}

export default DownloadDialog