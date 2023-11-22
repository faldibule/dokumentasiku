import { Stack, Typography } from '@mui/material'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { Link } from "react-router-dom" // if using react
// import Link from 'next/link' // if using next js


const CustomLinkComponent = ({ 
    label = 'default', url = '/dashboard', 
    style = { textDecoration: 'none', color: 'blue' } 
}) => {
    return (
        <Link style={style} to={url}>
            {label}
        </Link>
    )
}
export default CustomLinkComponent
`

const CustomLink = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>CustomLink</Typography>
            <Typography variant='p' color='grey.400'>CustomLink - adalah sebuah component yang dibuat untuk keperluan link pada column sebuah table maupun diluar table</Typography>
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

export default CustomLink