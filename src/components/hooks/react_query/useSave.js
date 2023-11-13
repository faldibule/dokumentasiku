import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useQuery } from 'react-query'
// ------ Custom axios instance 
import http from '@variable/Api'

const useSave = ({ onSuccess, onError }) => {
    const { success } = useCustomSnackbar()
    return useMutation({
        mutationFn: async ({ formData, id }) => {
            if(!!id){
                const res = await http.patch('backend-url', {}, {
                    params: {
                        ...Object.fromEntries(formData)
                    }
                })
                success('Success Edit Data')
            }else{
                const res = await http.post('backend-url', formData)
                success('Success Add Data')
            }
        },
        onSuccess,
        onError,
    })
}

export default useSave

// Usage
const { mutate: save, isLoading: loadingSave, error } = useSave({
    onSuccess: () => {
        // callback when query success
    }
    onError: () => {
        // callback when query failed/error
    }
})
// get error response if exist
const errors = error?.response?.data?.errors 
// Submit data by call 'save' function
const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const id = props?.id
    save({ formData, id })
}
`

const UseSave = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useSave</Typography>
            <Typography variant='p' color='grey.400'>
                useSave - adalah sebuah custom hook yang biasa saya gunakan untuk mengirim sebuah 'Request' untuk menyimpan data ke backend. 
                Biasanya saya membuat custom fetch custom hook untuk setiap modul pada aplikasi. misalnya 'usSaveProduct' yang berarti berisikan fetch untuk menyimpan data product
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

export default UseSave