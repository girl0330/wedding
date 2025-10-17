import { parseISO, format, getDay } from 'date-fns'
import styles from '../sections/Heading.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Heading = ({ date }: { date: string }) => {
  if (!date) return null

  const weddingDate = parseISO(date)
  const weddingDay = DAYS[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{weddingDay}</div>
    </Section>
  )
}

export default Heading
