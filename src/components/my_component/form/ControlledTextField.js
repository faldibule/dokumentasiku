import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
    <TextField name="title" 
        label="Label" 
        value={state} 
        name="name"
        helperText={!!errorsData.name && errorsData?.name[0]}
        error={!!errorsData.name}
        onChange={handleChange} 
        fullWidth 
    />
`

const ControlledTextField = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>Controlled TextField</Typography>
            <Typography variant='p' color='grey.400'>
                Controlled TextField - adalah sebuah component yang dibuat untuk menerima 
                input user dengan konsep "Controlled" yang berarti setiap perubahan pada form input tersebut diawasi oleh 'state'. 
                Kita bisa menggunakan onChange dan attribute 'value' untuk handle perubahan yang terjadi pada input tersebut.
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

export default ControlledTextField