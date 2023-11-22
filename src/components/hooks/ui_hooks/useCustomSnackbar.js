import { Stack, Typography } from '@mui/material'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useSnackbar } from 'notistack';

const useCustomSnackbar = () => {
    const { enqueueSnackbar: setSnackbar } = useSnackbar();
    
    const success = (string, variant = 'success') => {
        setSnackbar(string, { variant })
    }
    const failed = (string, variant = 'error') => {
        setSnackbar(string, { variant })
    }

    return {
        success,
        failed
    }
}

export default useCustomSnackbar

// Usage
const { success, failed } = useCustomSnackbar()
`
const UseCustomSnackbar = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useCustomSnackbar</Typography>
            <Typography variant='p' color='grey.400'>
                useCustomSnackbar - adalah sebuah custom hook yang biasa saya gunakan untuk menampilkan snackbar/toaster saat setelah user melakukan suatu event
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

export default UseCustomSnackbar