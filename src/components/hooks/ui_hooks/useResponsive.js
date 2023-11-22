import { Stack, Typography } from '@mui/material'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function useResponsive(query, key, start, end) {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const mediaDown = useMediaQuery(theme.breakpoints.down(key));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  if (query === 'only') {
    return mediaOnly;
  }
  return null;
}

// Usage
const isMobile = useResponsive('down', 'lg'); // dibaca "Apakah layar user dibawah large?"
`
const UseResponsive = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>useResponsive</Typography>
            <Typography variant='p' color='grey.400'>
                useResponsive - adalah sebuah custom hook yang biasa saya gunakan untuk mendapatkan informasi mengenai media query user saat mengakses suatu page.
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

export default UseResponsive