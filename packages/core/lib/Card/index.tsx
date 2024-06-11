import { Layer } from '@/types'
import { ComponentProps, memo } from 'react'
import styles from './styles.module.scss'

export type CardVariant = 'elevated' | 'filled' | 'outlined'

type OwnProps<E extends React.ElementType> = {
  component?: E
  layer?: Layer
  variant?: CardVariant
}

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps<E>>

const CardComponent = <E extends React.ElementType = 'div'>({
  children,
  className,
  component,
  variant = 'filled',
  layer = 'surface-container',
  ...props
}: Props<E>) => {
  const hasAction = props.onClick || props.href || props.to
  const Component = component || 'div'
  return (
    <Component
      {...props}
      className={`${styles['card']} ${styles[variant]} ${
        hasAction ? styles['has-action'] : ''
      } ${styles[layer]} ${className}`}
    >
      {children}
    </Component>
  )
}

export const Card = memo(CardComponent) as typeof CardComponent
