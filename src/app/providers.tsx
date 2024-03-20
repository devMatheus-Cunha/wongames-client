import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import ProviderReactQuery from '@/lib/reactQuery/provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ProviderReactQuery>
        <GlobalStyles />
        {children}
      </ProviderReactQuery>
    </>
  )
}
