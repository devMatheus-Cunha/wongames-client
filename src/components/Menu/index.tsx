import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Close as CloseIcon
} from '@styled-icons/material'

import Logo from '../Logo'

import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Searchs" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
