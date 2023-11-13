import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useQuery } from 'react-query'
// ------ Custom axios instance 
import http from '@variable/Api'

const useFetch = (params) => {
    return useQuery(['id-of-query', params], async ({ signal }) => {
        try {
            const res = await http.get('url-backend', {
                signal,
                params
            })
            return res.data.data
        } catch (err) {
        }
    })
}

export default useFetch

// Usage
const [params, setParams] = useState({
    limit: 10,
    paginate: 1, // true
})
const { data: dataProduct, isLoading } = useFetch(params)
`

const UseFetch = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useFetch</Typography>
            <Typography variant='p' color='grey.400'>
                useFetch - adalah sebuah custom hook yang biasa saya gunakan untuk melakukan 'fetching' data ke backend. 
                Biasanya saya membuat custom fetch custom hook untuk setiap modul pada aplikasi. misalnya 'useFetchProduct' yang berarti berisikan fetch untu medapatkank data product
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

export default UseFetch