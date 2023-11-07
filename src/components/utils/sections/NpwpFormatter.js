import { Stack, Typography } from '@mui/material'
import React from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `function NpwpFormat(value) {
    value = value.replace(/[A-Za-z\W\s_]+/g, '');
    let split = 6;
    const dots = [];
  
    for (let i = 0, len = value.length; i < len; i += split) {
      split = i >= 2 && i <= 6 ? 3 : i >= 8 && i <= 12 ? 4 : 2;
      dots.push(value.substr(i, split));
    }
  
    const temp = dots.join('.');
    return temp.length > 12 ? \${temp.substr(0, 12)}-\${temp.substr(12, 7)} : temp;
}`

const NpwpFormatter = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>NpwpFormatter</Typography>
            <Typography variant='p' color='grey.400'>NpwpFormatter - adalah sebuah function yang dibuat untuk 'memformat' sebuah value menjadi format 'NPWP'</Typography>
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

export default NpwpFormatter