import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useQuery } from 'react-query'
// ------ Custom axios instance 
import http from '@variable/Api'

const useFetchById = (params) => {
    return useQuery(['unique-name-for-react-query', id], async ({ signal }) => {
        try {
            const res = await http.get(backend-url/\${id})
            return res.data.data
        } catch (err) {
        }
    }, {
        cacheTime: 0 //disable cache for this query
    })
}

export default useFetchById

// Usage
const { id } = useParams()
const { data, isLoading } = useFetchById(id)
`

const UseFetchById = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useFetchById</Typography>
            <Typography variant='p' color='grey.400'>
                useFetchById - adalah sebuah custom hook yang biasa saya gunakan untuk melakukan 'fetching' data ke backend dan mengirimkan 'id' sebagai pengondisian query. 
                Biasanya saya membuat custom fetch custom hook untuk setiap modul pada aplikasi. misalnya 'useFetchProductById' yang berarti berisikan fetch untu medapatkan data product sesuai dengan id yang dikirim
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

export default UseFetchById