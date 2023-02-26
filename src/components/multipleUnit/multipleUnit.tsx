import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FlexContainer, PxRemFieldWrapper } from './styled';
import React from 'react';
import { convertPxsToRems, convertRemsToPxs } from '../utils';

export const MultipleUnit: React.FC = () => {
  const { setValue, getValues, control } = useFormContext();
  const { rootFontSize } = getValues();

  return (
    <FlexContainer>
      <PxRemFieldWrapper>
        <Controller
          name='pxs'
          control={control}
          render={({ field, fieldState }) => (
            <Box>
              <TextField
                {...field}
                placeholder='pxs'
                label='pxs'
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                type='text'
                sx={{ display: 'flex', width: 150 }}
                margin='normal'
                multiline
                onChange={(e) => {
                  field.onChange(e);
                  setValue(
                    'rems',
                    convertPxsToRems(e.target.value, rootFontSize),
                    {
                      shouldValidate: true,
                      shouldDirty: true,
                    }
                  );
                }}
              />
            </Box>
          )}
        />
        <Box>
          <Controller
            name='rems'
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                placeholder='rems'
                label='rems'
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                type='text'
                sx={{ display: 'flex', width: 150 }}
                margin='normal'
                multiline
                onChange={(e) => {
                  field.onChange(e);
                  const pxs = convertRemsToPxs(e.target.value, rootFontSize);
                  setValue('pxs', pxs, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
            )}
          />
        </Box>
      </PxRemFieldWrapper>
      <div>
        <Controller
          name='rootFontSize'
          control={control}
          render={({ field, fieldState }) => (
            <FormControl fullWidth error={fieldState.invalid}>
              <InputLabel id='area-label'>rootFontSize</InputLabel>
              <Select
                sx={{ display: 'flex', width: 100 }}
                labelId='area-label'
                label='rootFontSize'
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  const pxs = convertRemsToPxs(e.target.value, rootFontSize);
                  setValue('pxs', pxs, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              >
                <MenuItem value='8'>8px</MenuItem>
                <MenuItem value='10'>10px</MenuItem>
                <MenuItem value='12'>12px</MenuItem>
                <MenuItem value='14'>14px</MenuItem>
                <MenuItem value='16'>16px</MenuItem>
                <MenuItem value='18'>18px</MenuItem>
                <MenuItem value='20'>20px</MenuItem>
              </Select>
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
      </div>
    </FlexContainer>
  );
};
