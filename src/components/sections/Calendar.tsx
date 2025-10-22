import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import styles from './Calendar.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

const cx = classNames.bind(styles)

import React from 'react'

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  console.log('weddingDate', weddingDate)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>{format(weddingDate, 'yyyy.MM.dd')}</span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <DayPicker
          locale={ko}
          mode="single"
          defaultMonth={weddingDate} // 처음 펼칠 달
          selected={weddingDate} // 선택(하이라이트)할 날짜
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
