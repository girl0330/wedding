import styles from './Section.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
