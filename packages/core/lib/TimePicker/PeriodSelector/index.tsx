import { Period } from '../types'
import styles from './styles.module.scss'

type Props = {
  className?: string
  value: Period
  onChange: (value: Period) => void
}
export const PeriodSelector = ({ className, value, onChange }: Props) => {
  const onAMClick = () => {
    onChange('AM')
  }
  const onPMClick = () => {
    onChange('PM')
  }
  return (
    <div className={`${styles['period-selector']} ${className}`}>
      <button
        className={`${styles['button']} ${styles['am']} ${
          value === 'AM' ? styles['selected'] : ''
        } `}
        type="button"
        onClick={onAMClick}
      >
        AM
      </button>
      <button
        className={`${styles['button']} ${styles['pm']} ${
          value === 'PM' ? styles['selected'] : ''
        }`}
        type="button"
        onClick={onPMClick}
      >
        PM
      </button>
    </div>
  )
}
