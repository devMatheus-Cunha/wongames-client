import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

const warapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
     font-size: ${theme.font.sizes.xxlarge};
    `};
  `,
  lineLeft: (theme: DefaultTheme, lineColors?: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColors!]};
  `,

  lineBottom: (theme: DefaultTheme, lineColors?: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColors!]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && warapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && warapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && warapperModifiers[size](theme)}
  `}
`
