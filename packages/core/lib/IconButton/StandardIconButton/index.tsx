import React from 'react'
import { IconForIconButton } from '../IconForIconButton'
import { IconButtonProps } from '../types'
import styles from './styles.module.scss'

const StandardIconButtonComponent = <E extends React.ElementType>({
  icon,
  disabled = false,
  active = false,
  noRipple = false,
  className,
  variant = 'standard',
  iconVariant,
  component,
  ...props
}: IconButtonProps<E>) => {
  const Component = component || 'button'
  return (
    <Component {...props} className={`${className} ${styles['button']}`}>
      <div
        className={`${styles['icon-wrapper']} ${
          !disabled
            ? styles['icon-wrapper-enabled']
            : styles['icon-wrapper-disabled']
        } ${
          !disabled && !noRipple ? styles['icon-wrapper-enabled-ripple'] : ''
        }`}
      >
        <IconForIconButton
          className={`${
            active ? styles['icon-active'] : styles['icon-nonactive']
          }`}
          icon={icon}
          variant={variant}
          active={active}
          iconVariant={iconVariant}
        />
      </div>
    </Component>
  )
}
export const StandardIconButton = React.memo(
  StandardIconButtonComponent
) as typeof StandardIconButtonComponent
