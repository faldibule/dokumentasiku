import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
    }
`

const UncontrolledOnSubmit = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>Uncontrolled OnSubmit</Typography>
            <Typography variant='p' color='grey.400'>
                Uncontrolled OnSubmit - adalah sebuah function yang dibuat untuk mengatur aliran data yang sudah diinput oleh user pada Form input yang menggunakan "Uncontrolled" input.
                Kelebihannya adalah kita tidak perlu mengatur state pada form input dan cocok untuk halaman yang memiliki banyak form input karena tidak akan menimbulkan 'Lag' saat proses input, 
                namun kita tidak dapat melakukan CSV (Client Side Validation).
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

export default UncontrolledOnSubmit