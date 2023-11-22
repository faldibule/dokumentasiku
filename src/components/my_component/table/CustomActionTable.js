import { Stack, Typography } from '@mui/material'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `import { IconButton, Stack, Tooltip } from "@mui/material"
import Iconify from "./Iconify"

const CustomActionTableComponent = ({ 
    approve = false, edit = false, 
    handleApprove = () => {}, handleEdit = () => {}, handleDelete = () => {} 
}) => {
    return (
        <Stack direction='row' justifyContent='center' height={38}>
            {approve ?
                <Tooltip title='Update Status'>
                    <IconButton hidden={approve} onClick={handleApprove}>
                        <Iconify icon='fluent:approvals-app-32-regular' sx={{ color: 'black', fontSize: 23 }} />
                    </IconButton>
                </Tooltip>
            : null
            }
            {edit ?
                <Tooltip title='Update'>
                    <IconButton onClick={handleEdit}>
                        <Iconify icon='material-symbols:edit' sx={{ color: 'green', fontSize: 23 }} />
                    </IconButton>
                </Tooltip>
            : null
            }
            <Tooltip title='Delete'>
                <IconButton onClick={handleDelete}>
                    <Iconify icon='material-symbols:delete' sx={{ color: 'red', fontSize: 23 }} />
                </IconButton>
            </Tooltip>
        </Stack>
    )
}
export default CustomActionTableComponent`

const CustomActionTable = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>CustomActionTable</Typography>
            <Typography variant='p' color='grey.400'>CustomActionTable - adalah sebuah component yang dibuat untuk keperluan action pada sebuah table</Typography>
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

export default CustomActionTable