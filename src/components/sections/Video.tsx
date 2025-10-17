import styles from '../sections/Video.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video muted={true} autoPlay={true} loop={true} poster="/assets/poster.jpg">
        <source src="/assets/main.mp4" type="video/webm" />
      </video>
    </Section>
  )
}

export default Video
