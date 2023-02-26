import { TextField, FormControl } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FlexContainer, PxRemFieldWrapper } from './styled';
import React from 'react';
import { convertPxToRem, convertRemToPx } from '../utils';

export const SingleUnit: React.FC = () => {
  const { setValue, getValues, control } = useFormContext();

  return (
    <FlexContainer>
      <PxRemFieldWrapper>
        <Controller
          name='px'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              label='px'
              sx={{ display: 'flex', width: 150 }}
              margin='normal'
              onChange={(e) => {
                const { rootFontSize } = getValues();
                field.onChange(e);
                setValue('rem', convertPxToRem(e.target.value, rootFontSize), {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />
          )}
        />
        <Controller
          name='rem'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              label='rem'
              sx={{ display: 'flex', width: 150 }}
              margin='normal'
              onChange={(e) => {
                const { rootFontSize } = getValues();
                field.onChange(e);
                setValue('px', convertRemToPx(e.target.value, rootFontSize), {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />
          )}
        />
      </PxRemFieldWrapper>
      <div>
        <Controller
          name='rootFontSize'
          control={control}
          render={({ field, fieldState }) => (
            <FormControl fullWidth error={fieldState.invalid}>
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                type='text'
                label='rootFontSize'
                sx={{ display: 'flex', width: 150 }}
                margin='normal'
                onChange={(e) => {
                  const { rem } = getValues();
                  field.onChange(e);
                  setValue('px', convertRemToPx(rem, e.target.value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
            </FormControl>
          )}
        />
      </div>
    </FlexContainer>
  );
};
