import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useQuery } from 'react-query'
// ------ Custom axios instance 
import http from '@variable/Api'

const useImport = ({ onSuccess, onError }) => {
    const { success } = useCustomSnackbar()
    return useMutation({
        mutationFn: async ({ formData, url = '', title }) => {
            const res = await http.post(url, formData)
            success('Success Import')
            return res.data
        },
        onSuccess,
        onError,
    })
}

export default useImport

// Usage
const { mutate: upload, isLoading: loadingImport, error } = useImport({
    onSuccess: (res) => {
        // callback when import success
    },
    onError: (err) => {
        // callback when import failed
    }
});

// Call upload function inside submit function
const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", fileData);
    upload({ 
        formData,
        url,
        title
     })
};
`

const UseImport = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useImport</Typography>
            <Typography variant='p' color='grey.400'>
                useImport - adalah sebuah custom hook yang biasa saya gunakan untuk melakukan 'fetch' data ke backend dengan mengirimkan file.
                Custom hook ini biasanya saya pakai pada 'Modal Import' 
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

export default UseImport