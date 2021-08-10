/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import type { IconName } from '../Icon/generated'

export enum ButtonStyleVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Floating = 'floating',
}

export enum ButtonColorVariant {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Cobalt = 'cobalt',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  /**
   * @deprecated use `ButtonColorVariant.MonochromeLight` or `ButtonColorVariant.MonochromeDark`
   */
  Monochrome = 'monochrome',
  MonochromeLight = 'monochromeLight',
  MonochromeDark = 'monochromeDark',
}

export enum ButtonSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export default interface ButtonProps extends UIComponentProps {
  type?: HTMLButtonElement['type']
  text?: string
  disabled?: boolean
  loading?: boolean
  active?: boolean
  size?: ButtonSize
  styleVariant?: ButtonStyleVariant
  colorVariant?: ButtonColorVariant
  leftComponent?: IconName | React.ReactNode
  rightComponent?: IconName | React.ReactNode
  onClick?: (event: React.MouseEvent) => void
}
