import React, { ComponentProps, ElementType } from 'react'

type OwnProps<E extends React.ElementType, O> = {
  component?: E
} & O

export type PolymorphicComponentProps<E extends ElementType, O> = OwnProps<
  E,
  O
> &
  Omit<ComponentProps<E>, keyof OwnProps<E, O>>

export type Layer =
  | 'surface'
  | 'surface-container-lowest'
  | 'surface-container-low'
  | 'surface-container'
  | 'surface-container-high'
  | 'surface-container-highest'
