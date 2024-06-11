import React from 'react'
import { IconButtonProps } from './types'
import { StandardIconButton } from './StandardIconButton'

const IconButtonComponent = <E extends React.ElementType = 'button'>(
  props: IconButtonProps<E>
) => {
  const variant = props.variant || 'standard'
  if (variant === 'standard') {
    return <StandardIconButton {...props} />
  } else if (variant === 'filled') {
    return <></>
  } else {
    throw new Error('Invalid variant')
  }
}

export const IconButton = React.memo(
  IconButtonComponent
) as typeof IconButtonComponent
