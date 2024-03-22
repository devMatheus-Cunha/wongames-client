'use client'

import { PropsWithChildren } from 'react'

import ProviderReactQuery from '@/lib/reactQuery/provider'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import GlobalStyles from '@/styles/global'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProviderReactQuery>
          <GlobalStyles />
          {children}
        </ProviderReactQuery>
      </ThemeProvider>
    </>
  )
}
