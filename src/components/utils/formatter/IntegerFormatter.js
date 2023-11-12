import { Stack, Typography } from '@mui/material'
import React from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `function IntegerFormat(props) {
  return props !== '' ? parseInt(props.replace(/,.*|[^0-9]/g, ''), 10) : '';
}`

const IntegerFormatter = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>IntegerFormatter</Typography>
            <Typography variant='p' color='grey.400'>IntegerFormatter - adalah sebuah function yang dibuat untuk 'memformat' sebuah value menjadi Integer kembali. Biasanya saya gunakan saat ingin mengirim value dari 'NPWP' atau 'Rupiah' ke database</Typography>
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

export default IntegerFormatter