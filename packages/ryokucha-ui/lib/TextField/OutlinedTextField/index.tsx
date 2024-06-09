import { forwardRef } from 'react'
import { TextFieldProps } from '../types'
import { Icon } from '@/Icon'
import styles from './styles.module.scss'

export const OutlinedTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      icon,
      error,
      supportingText,
      readOnly,
      className,
      placeholder,
      layer = 'surface',
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${styles['text-field']}`}>
        {icon && (
          <Icon
            variant="outline"
            type={icon}
            className={`${styles['icon']} ${
              typeof error !== 'undefined' ? styles['icon-error'] : ''
            }`}
          />
        )}
        <div className={styles['input-wrapper']}>
          <input
            ref={ref}
            id={id}
            className={`${styles['input']} ${styles[layer]} ${
              icon ? styles['input-with-icon'] : ''
            } ${error ? styles['input-error'] : ''}`}
            placeholder={placeholder || ''}
            readOnly={readOnly}
            {...props}
          />
          {label && (
            <label
              htmlFor={id}
              className={`${styles['label']} ${styles[layer]}`}
            >
              {label}
            </label>
          )}
        </div>
        <p
          className={`${styles['supporting-text']} ${
            error ? styles['supporting-text-error'] : ''
          }`}
        >
          {supportingText && supportingText} {error && error}
        </p>
      </div>
    )
  }
)
