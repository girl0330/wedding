import styles from './Share.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

import React, { useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import CopyToClipboard from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const Share = ({ groomName, brideName, date }: ShareProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.6/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      console.log(window)

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
        imageUrl: 'https://i.pinimg.com/736x/7b/fb/12/7bfb12055f4f2dedc16e993374564e29.jpg',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  console.log(window)

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button>
            <IconClipboard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

function IconClipboard() {
  return (
    <svg enable-background="new 0 0 48 48" id="Layer_1" version="1.1" viewBox="0 0 48 48">
      <path
        clip-rule="evenodd"
        d="M37,47H11c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4h3l0,0c0.553,0,1,0.448,1,1  s-0.447,1-1,1l0,0h-3C9.896,6,9,6.896,9,8v35c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2h-3l0,0  c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,0,0,0.001,0H37c2.209,0,4,1.791,4,4v35C41,45.209,39.209,47,37,47z M35,9  c0,0.552-0.447,1-1,1H14c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,1.125-0.125,2-1l2-2c0,0,0.781-1,2-1h1c0-1.657,1.344-3,3-3  c1.657,0,3,1.343,3,3h1c1.312,0,2,1,2,1l2,2c0.875,0.875,2,1,2,1C34.553,8,35,8.448,35,9z M24,3c-0.553,0-1,0.448-1,1h2  C25,3.448,24.553,3,24,3z M29.363,7c0,0-0.679-1-1.817-1h-7.091c-1.14,0-1.818,1-1.818,1l-0.909,1h12.545L29.363,7z"
        fill-rule="evenodd"
      />
    </svg>
  )
}

function IconKakao() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M50.208,7.556C6.123,7.324-14.318,53.867,25.774,74.543c-0.705,2.429-4.527,15.63-4.68,16.667
           c-0.109,0.811,0.509,1.491,1.511,1.143C24.053,92.15,39.385,81.38,42.039,79.51C105.612,87.119,118.13,10.476,50.208,7.556z"
        fill="#3D1D1C"
      />
      <path
        d="M27.433,53.943c-0.086,3.333-5.216,3.346-5.307,0c0,0,0-15.763,0-15.763h-4.14
           c-3.429-0.087-3.436-5.107,0-5.196c0,0,13.587,0,13.587,0c3.431,0.091,3.435,5.105,0,5.196c0,0-4.14,0-4.14,0V53.943z"
        fill="#FFE812"
      />
      <path
        d="M49.733,56.076c-1.191,0.628-3.495,0.475-3.895-0.806c0,0-1.314-3.44-1.314-3.44l-8.091,0l-1.315,3.442
           c-0.398,1.279-2.703,1.433-3.893,0.804c-0.732-0.337-1.435-1.265-0.629-3.768l6.347-16.705c1.299-3.426,5.766-3.441,7.073,0.003
           c0,0,6.344,16.698,6.344,16.698C51.167,54.812,50.464,55.74,49.733,56.076z"
        fill="#FFE812"
      />
      <path
        d="M63.143,56.09H54.63c-1.402,0-2.543-1.091-2.543-2.432V35.637c0.091-3.492,5.324-3.503,5.417,0
           c0,0,0,15.588,0,15.588h5.639C66.492,51.308,66.499,56.005,63.143,56.09z"
        fill="#FFE812"
      />
      <path
        d="M83.914,54.092c-0.236,2.275-3.433,3.113-4.745,1.231c0,0-6.222-8.245-6.222-8.245l-0.921,0.921v5.789
           c-0.087,3.492-5.216,3.505-5.308,0.001c0,0,0-18.152,0-18.152c0.092-3.495,5.213-3.502,5.307,0c0,0,0,5.703,0,5.703l7.403-7.403
           c0.888-0.901,2.432-0.707,3.298,0.193c0.901,0.856,1.096,2.418,0.195,3.298l-6.047,6.046l6.531,8.653
           C83.83,52.687,84.013,53.395,83.914,54.092z"
        fill="#FFE812"
      />
      <polygon points="37.829,47.131 43.129,47.131 40.479,39.602" fill="#3D1D1C" />
    </svg>
  )
}

export default Share
