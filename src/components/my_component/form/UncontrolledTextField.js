import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
    <TextField
        fullWidth 
        label='Label'
        name='name'
        defaultValue={staging?.name}
        required
        helperText={!!errors?.name && errors?.name[0]}
        error={!!errors?.name}
    /> 
`

const UncontrolledTextField = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>Uncontrolled TextField</Typography>
            <Typography variant='p' color='grey.400'>
                Uncontrolled TextField - adalah sebuah component yang dibuat untuk menerima 
                input user dengan konsep "Controlled" yang berarti setiap perubahan pada form input tidak diawasi oleh 'state'. 
                Maka dari itu kita tidak memerlukan function onChange untuk perubahan pada valuenya. Untuk uncontrolled input, kita bisa menggunakan 'defaultValue' untuk menjadi initial value.
                Perlu diingat bahwa merubah state pada 'defaultValue' tidak akan me-rerender halaman. 
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

export default UncontrolledTextField