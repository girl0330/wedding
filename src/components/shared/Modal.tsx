import Dimmed from './Dimmed'
import styles from './Modal.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface ModalProps {
  open: boolean
  title?: string
  body: React.ReactNode
  rightButtonLabel?: string
  onRightButtonClick: () => void
  leftButtonLabel?: string
  onLeftButtonClick: () => void
}

const Modal = ({
  open,
  title,
  body,
  rightButtonLabel = '닫기',
  leftButtonLabel = '참석',
  onRightButtonClick,
  onLeftButtonClick,
}: ModalProps) => {
  if (!open) {
    return null
  }
  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title === null ? null : <div className={cx('txt-title')}>{title}</div>}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onLeftButtonClick}>{rightButtonLabel}</button>
            <button onClick={onRightButtonClick}>{leftButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
