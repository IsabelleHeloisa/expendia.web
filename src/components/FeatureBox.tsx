import React from 'react'
import { Stack, StackProps } from '@mui/material'

export default function FeatureBox({ children, ...rest }: StackProps) {
  return (
    <Stack
      {...rest}
      direction={{ xs: 'column-reverse', md: 'row' }}
      justifyContent="space-around"
      alignItems="center"
    >
      {children}
    </Stack>
  )
}
