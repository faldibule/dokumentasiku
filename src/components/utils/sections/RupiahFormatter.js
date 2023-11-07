import { Stack, Typography } from '@mui/material'
import React from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `function NumberFormat(bilangan, prefix) {
  const numberString = String(bilangan)
    .replace(/[^,\d]/g, '')
    .toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? \${rupiah},\${split[1]} : rupiah;
  return prefix === undefined ? rupiah : prefix === 'Rp' ? Rp\${rupiah} : \${rupiah}%;
}`

const RupiahFormatter = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>RupiahFormatter</Typography>
            <Typography variant='p' color='grey.400'>RupiahFormatter - adalah sebuah function yang dibuat untuk 'memformat' sebuah value menjadi format 'Rupiah'</Typography>
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

export default RupiahFormatter