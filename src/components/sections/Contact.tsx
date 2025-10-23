import styles from './Contact.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

import React from 'react'
import Accordion from '../shared/Accordion'

const Contact = () => {
  return (
    <Section title="여락처 및 마음 전하실 곳">
      <Accordion label="신랑측">신랑측신랑측신랑측신랑측신랑측</Accordion>
      <Accordion label="신부측">신부측신부측신부측신부측신부측</Accordion>
    </Section>
  )
}

export default Contact
