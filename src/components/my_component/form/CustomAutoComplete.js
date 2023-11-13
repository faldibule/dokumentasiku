import { Stack, Typography } from '@mui/material'
import React, { Fragment, forwardRef } from 'react'
import CodeBlock from '../../CodeBlock'

const codeToDisplay = `import { Autocomplete, TextField } from "@mui/material";

const CustomAutocomplete = ({ 
    label, errors, options, getOptionLabel, selectedValue, inputValue, 
    setInputValue, setSelectedValue, size = "medium", isAutoCompleteItem = false, disabled = false 
}) => {
    return (
        <Autocomplete
            disabled={disabled}
            fullWidth
            freeSolo
            options={options}
            getOptionLabel={getOptionLabel}
            value={selectedValue || null} 
            inputValue={inputValue}
            onInputChange={(e, value, reason) => {
                if(isAutoCompleteItem){
                    setInputValue(reason === 'reset' ? '' : value)
                }else{
                    setInputValue(value)
                }
            }}
            onChange={(event, newValue) => {
                setSelectedValue(newValue);
            }}
            renderInput={(params) => (
                <TextField 
                    {...params} 
                    disabled={disabled}
                    size={size}
                    required={!isAutoCompleteItem}
                    fullWidth
                    label={label}
                    error={!!errors}
                    helperText={!!errors && errors[0]}
                />
            )}
        />
    )
}

export default CustomAutocomplete

const index = () => {
    return (
        <CustomAutocomplete 
            disabled={isApproved}
            options={dataLocation.data}
            getOptionLabel={(option) => option.location_name}
            label='Location'
            inputValue={locationState.input}
            setInputValue={handleInputLocation}
            selectedValue={locationState.selected}
            setSelectedValue={handleSelectedLocation}
            errors={errors?.location_id}
        />
    )
}
`

const CustomAutoComplete = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>CustomAutoComplete</Typography>
            <Typography variant='p' color='grey.400'>CustomAutoComplete - adalah sebuah component yang dibuat untuk keperluan Autocomplete untuk keperluan seperti form ataupun lainnya</Typography>
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

export default CustomAutoComplete