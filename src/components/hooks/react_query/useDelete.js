import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useQuery } from 'react-query'
// ------ Custom axios instance 
import http from '@variable/Api'

const useDelete = ({ onSuccess, onError }) => {
    const { success } = useCustomSnackbar()
    return useMutation({
        mutationFn: async (id) => {
            const res = await http.delete(/backend-url/\${id})
            success('Success Delete Data!')
        },
        onSuccess,
        onError
    })
}

export default useDelete

// Usage
const { mutate: deleteData, isLoading: loadingDelete } = useDelete({
    onSuccess: (res) => {
        // callback when delete success
    },
    onError: (err) => {
        // callback when delete error
    }
})
const handleDelete = async () => {
    deleteData(staging?.id)
}
`

const UseDelete = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useDelete</Typography>
            <Typography variant='p' color='grey.400'>
                useDelete - adalah sebuah custom hook yang biasa saya gunakan untuk melakukan 'delete' data ke backend. 
                Biasanya saya membuat custom fetch custom hook untuk setiap modul pada aplikasi. misalnya 'useDeleteProduct' yang berarti berisikan fetch untuk menghapus data suatu product
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

export default UseDelete