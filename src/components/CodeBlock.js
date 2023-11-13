import { CopyAll } from '@mui/icons-material';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ codeString, language }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString)
          .then(() => alert('Teks telah disalin ke clipboard'))
          .catch(error => console.error('Gagal menyalin teks:', error));
    };
    return (
        <>
            <Stack>
                <Stack sx={{ alignItems: 'center', px: 2, mb: -1 }} bgcolor='grey.700' direction='row' justifyContent='space-between'>
                    <Typography>Javascript</Typography>
                    <Tooltip title='Copy'>
                        <IconButton onClick={copyToClipboard}>
                            <CopyAll />
                        </IconButton>
                    </Tooltip>
                </Stack>
                <SyntaxHighlighter lineNumberStyle={{ color: 'white' }} customStyle={{ fontSize: '0.8rem' }} showLineNumbers={true} language={language} style={vscDarkPlus}>
                    {codeString}
                </SyntaxHighlighter>
            </Stack>
        </>
    );
};
export default CodeBlock