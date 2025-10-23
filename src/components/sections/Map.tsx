import styles from './Map.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { useEffect, useRef } from 'react'

import { Location } from '@models/wedding'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

const Map = ({ location }: { location: Location }) => {
  const mapContainer = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(location.lat, location.lng)

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        market.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <IconMap className={cx('icon-map')} />
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a className={cx('btn-find-way')} href={location.link} target="_blank" rel="noreferrer">
          길찾기
        </a>
      </div>

      <div>
        <IconMetro className={cx('icon-metro')} />
        <WayTocome label="지하철" list={location.waytocome.bus} />
        <IconBus className={cx('icon-bus')} />
        <WayTocome label="버스" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

function WayTocome({ label, list }: { label: React.ReactNode; list: string[] }) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((waytoCome) => (
          <li>{waytoCome}</li>
        ))}
      </ul>
    </div>
  )
}

function IconMap({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0 -1028.4)">
        <g>
          <g>
            <path d="m12 1032.4-5 0.8v11.5l5-0.8z" fill="#27ae60" />
            <path d="m7 1046.7-5 1.3v3.5l5 0.9z" fill="#3498db" />
            <path d="m2 1032.4v13l5-1.3v-10.9z" fill="#2ecc71" />
            <path d="m12 1044.9-5 2.6v4.9l5-0.9z" fill="#2980b9" />
            <path d="m12 1041.8-5 2.3v3.4l5.023-2z" fill="#f39c12" />
            <path d="m8.9499 1032.9 2.5031 9.2 0.547-0.2v-9.5z" fill="#f39c12" />
            <path d="m12.078 1032.4 2.422 10.8h2.5v-10z" fill="#2ecc71" />
            <path d="m12 1032.4v10.3l2.5-0.3-2.422-10z" fill="#f1c40f" />
            <path d="m17.026 1041.3-5.026 0.7v4.2l5-0.5z" fill="#f1c40f" />
            <path d="m17 1033.2v8.2l5-1.4v-7.6z" fill="#27ae60" />
            <path d="m22 1042.4-5 2.4v7.6l5-0.9z" fill="#2980b9" />
            <path d="m17 1044.8-4.997 0.7-0.003 6 5 0.9z" fill="#3498db" />
            <path d="m7 1044.1-5 0.8v3.3l5-0.7z" fill="#f1c40f" />
            <path d="m22 1039-5 2.4v3.4l5-1.6z" fill="#f39c12" />
          </g>
          <g fill="#c0392b">
            <path d="m8.4023 1035.8c0.3907-0.4 0.586-0.9 0.586-1.4 0-0.6-0.1953-1.1-0.586-1.5-0.3906-0.3-0.8619-0.5-1.414-0.5s-1.0235 0.2-1.4141 0.5c-0.3906 0.4-0.5859 0.9-0.5859 1.5 0 0.5 0.1953 1 0.5859 1.4s0.862 0.6 1.4141 0.6 1.0234-0.2 1.414-0.6m2.5857-1.4c0 0.5-0.086 1-0.258 1.4l-2.8433 6c-0.0833 0.2-0.2083 0.3-0.375 0.4-0.1614 0.1-0.3359 0.2-0.5234 0.2s-0.3646-0.1-0.5313-0.2c-0.1614-0.1-0.2812-0.2-0.3593-0.4l-2.8516-6c-0.1719-0.4-0.2578-0.9-0.2578-1.4 0-1.1 0.3906-2.1 1.1719-2.9 0.7812-0.7 1.7239-1.1 2.8281-1.1 1.1041 0 2.0469 0.4 2.8281 1.1 0.7816 0.8 1.1716 1.8 1.1716 2.9" />
          </g>
        </g>
      </g>
    </svg>
  )
}

function IconMetro({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M8.3,59.5L8.3,59.5L8.3,59.5z M10.2,60.3L10.2,60.3L10.2,60.3z M10.1,63.8L10.1,63.8L10.1,63.8z M10.9,61.9   L10.9,61.9L10.9,61.9z M10.2,60.3l4.8-11.5c-0.4-0.2-0.7-0.3-0.9-0.5c-0.3-0.2-0.4-0.4-0.4-0.4c-0.1-0.1-0.3-0.2-0.4-0.2L8.3,59.5   C8,60.3,8,61.2,8.4,62c0.3,0.8,0.9,1.4,1.8,1.8c0.8,0.3,1.7,0.3,2.5,0c0.8-0.3,1.4-0.9,1.8-1.8l1.9-4.7h31.4l1.9,4.7   c0.7,1.7,2.6,2.5,4.3,1.8c1.7-0.7,2.5-2.6,1.8-4.3l-4.9-11.8c-0.3,0.2-0.6,0.3-0.9,0.5c-0.1,0.1-0.2,0.1-0.3,0.2   c-0.6,0.4-2.1,0.6-4.2,0.8c-0.3,0-0.7,0.1-1,0.1l0.6,1.6H19l0.7-1.6c-0.2,0-0.5,0-0.7-0.1v0.2h0l-0.4,0l-1,0l-0.9,2.1l-0.6,1.4h1.5   h28.9h1.5l-0.6-1.4l-0.8-2c0.7-0.1,1.6-0.2,2.5-0.7l4.8,11.5c0.7,1.6-1.8,2.5-2.4,1L49.3,56L49,55.4h-0.7H15.6H15L14.7,56l-2.2,5.3   c-0.1,0.3-0.4,0.6-0.7,0.7c-0.3,0.1-0.7,0.1-1,0c-0.3-0.1-0.6-0.4-0.7-0.7C10,60.9,10,60.6,10.2,60.3L10.2,60.3z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M14.9,48.8l-4.8,11.5c-0.1,0.3-0.1,0.7,0,1c0.1,0.3,0.4,0.6,0.7,0.7c0.3,0.1,0.7,0.1,1,0   c0.3-0.1,0.6-0.4,0.7-0.7l2.2-5.3l0.3-0.6h0.7h32.7H49l0.3,0.6l2.2,5.3c0.1,0.3,0.4,0.6,0.7,0.7c0.3,0.1,0.7,0.1,1,0   c0.3-0.1,0.6-0.4,0.7-0.7c0.1-0.3,0.1-0.7,0-1l-4.8-11.5c-0.9,0.4-1.8,0.6-2.5,0.7l0.8,2l0.6,1.4h-1.5H17.5h-1.5l0.6-1.4l0.9-2.1   l1,0l0.4,0h0v-0.2c-2.6-0.2-4.3-0.5-4.5-0.8c-0.3-0.1-0.5-0.3-0.8-0.4c0,0,0.1,0.2,0.4,0.4C14.2,48.5,14.5,48.6,14.9,48.8   L14.9,48.8z"
          fill="#CCCCCC"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M47.5,25.4L44.4,9.8c-0.4-2-1.6-4.3-3.9-4.3h-6.2l0,19.8H47.5L47.5,25.4z M29.7,25.4l0-19.8h-6.2   c-2.3,0-3.5,2.3-3.9,4.3l-3.1,15.5H29.7L29.7,25.4z M15.2,8.9c0.8-4.2,3.7-8,8.3-8h16.9c4.6,0,7.5,3.8,8.3,8L54.9,39   c0.8,4-1.7,7.6-5.3,9.3c-3.1,0.8-34.3,0.3-35.1,0C11.4,46.9,9,44,9,40.5C9,40.1,9,39.6,9.1,39C11.2,29,13.2,19,15.2,8.9L15.2,8.9z"
          fill="#0F8C7E"
        />
        <path d="M46.3,24.4L43.4,10c-0.3-1.5-1.1-3.5-2.9-3.5h-5.2l0,17.9H46.3L46.3,24.4z M45.3,9.6l3.4,16.7H33.3l0-21.8h7.2   C43.3,4.6,44.8,7.2,45.3,9.6L45.3,9.6z M28.8,24.4l0-17.9h-5.2c-1.8,0-2.6,2-2.9,3.5l-2.9,14.4H28.8L28.8,24.4z M30.7,26.4H15.3   l3.4-16.7c0.5-2.5,2-5.1,4.8-5.1h7.2L30.7,26.4L30.7,26.4z M14.2,8.8C15.2,4.1,18.4,0,23.5,0h16.9c5.1,0,8.4,4.1,9.3,8.8l6.1,30.1   h0c0.9,4.5-1.9,8.5-5.8,10.3c-1.8,1.1-16.2,0.4-19,0.4C23.4,49.6,16,50,14,49.1l0,0c-1.7-0.8-3.3-2.1-4.4-3.6v0   c-1-1.5-1.6-3.2-1.6-5c0-0.2,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.8l0,0L14.2,8.8L14.2,8.8z M16.1,9.1l-6.1,30.1h0   c0,0.2-0.1,0.5-0.1,0.7c0,0.2,0,0.4,0,0.6c0,1.5,0.5,2.8,1.3,3.9l0,0c0.9,1.3,2.2,2.3,3.6,3c1.1,1.1,33.4,0.5,34.2,0   c3.1-1.7,5.6-4.4,4.8-8.2l0,0L47.9,9.1C47.1,5.4,44.6,2,40.5,2H23.5C19.4,2,16.9,5.4,16.1,9.1L16.1,9.1z" />
        <path
          d="M16.5,25.4h13.2l0-19.8h-6.2c-2.3,0-3.5,2.3-3.9,4.3L16.5,25.4L16.5,25.4z"
          fill="#E6E6E6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M17.7,24.4h11l0-17.9h-5.2c-0.7,0-1.3,0.3-1.7,0.8c-0.6,0.7-1,1.7-1.2,2.7L17.7,24.4L17.7,24.4z M29.7,26.4H16.5h-1.2   l0.2-1.2l3.1-15.6C18.9,8.4,19.5,7,20.4,6c0.8-0.9,1.8-1.4,3.2-1.4h6.2h1l0,1l0,19.8v1H29.7L29.7,26.4z" />
        <path
          d="M34.3,5.6l0,19.8h13.2L44.4,9.8c-0.4-2-1.6-4.3-3.9-4.3H34.3L34.3,5.6z"
          fill="#E6E6E6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M35.2,6.5l0,17.9h11L43.4,10c-0.2-1-0.6-2-1.2-2.7c-0.4-0.5-1-0.8-1.7-0.8H35.2L35.2,6.5z M33.3,25.4l0-19.8l0-1h1h6.2   c1.3,0,2.4,0.6,3.2,1.4c0.9,1,1.4,2.4,1.7,3.6l3.1,15.6l0.2,1.2h-1.2H34.3h-1V25.4L33.3,25.4z" />
        <path
          d="M27.9,37.7c0-1.3-1-2.3-2.3-2.3h-6.2c-1.3,0-2.3,1-2.3,2.3c0,1.3,1,2.3,2.3,2.3h6.2   C26.9,40,27.9,39,27.9,37.7L27.9,37.7z M36.1,37.7c0,1.3,1,2.3,2.3,2.3h6.2c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3h-6.2   C37.1,35.4,36.1,36.4,36.1,37.7L36.1,37.7z"
          fill="#FFC810"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M26.9,37.7c0-0.7-0.6-1.3-1.3-1.3h-6.2c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3h6.2C26.3,39,26.9,38.4,26.9,37.7   L26.9,37.7z M28.9,37.7c0,1.8-1.5,3.3-3.3,3.3h-6.2c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.3,3.3-3.3h6.2   C27.4,34.4,28.9,35.9,28.9,37.7L28.9,37.7z M37.1,37.7c0,0.7,0.6,1.3,1.3,1.3h6.2c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3   h-6.2C37.7,36.4,37.1,37,37.1,37.7L37.1,37.7z M35.1,37.7c0-1.8,1.5-3.3,3.3-3.3h6.2c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3   h-6.2C36.6,41,35.1,39.5,35.1,37.7L35.1,37.7z" />
      </g>
    </svg>
  )
}

function IconBus({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>bus</title>
      <path
        fill="#5c3b51"
        d="M5,48H15a0,0,0,0,1,0,0v8a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V48A0,0,0,0,1,5,48Z"
      />
      <path
        fill="#5c3b51"
        d="M49,48H59a0,0,0,0,1,0,0v8a2,2,0,0,1-2,2H51a2,2,0,0,1-2-2V48A0,0,0,0,1,49,48Z"
      />
      <rect fill="#ffe94f" height="6" width="58" x="3" y="42" />
      <rect fill="#deb142" height="3" width="58" x="3" y="42" />
      <rect fill="#f74b50" height="6" width="14.5" x="24.75" y="42" />
      <path
        fill="#ffe94f"
        d="M7,24H57a2,2,0,0,1,2,2V42a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V26A2,2,0,0,1,7,24Z"
      />
      <path
        fill="#deb142"
        d="M7,24H57a2,2,0,0,1,2,2v1a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V26A2,2,0,0,1,7,24Z"
      />
      <circle fill="#f74b50" cx="12.05" cy="32.26" r="2.9" />
      <circle fill="#f74b50" cx="52.05" cy="32.26" r="3" />
      <rect fill="#2d95b5" height="4" width="34" x="15.05" y="48" />
      <rect fill="#45d4d9" height="14" width="48" x="8.05" y="10" />
      <rect fill="#2d95b5" height="3" width="48" x="8.05" y="10" />
      <path
        fill="#ffe94f"
        d="M9,6H55a2,2,0,0,1,2,2v2a0,0,0,0,1,0,0H7a0,0,0,0,1,0,0V8A2,2,0,0,1,9,6Z"
      />
      <path
        fill="#2c2a3d"
        d="M61,41H60V26a3,3,0,0,0-3-3V11a1,1,0,0,0,1-1V8a3,3,0,0,0-3-3H9A3,3,0,0,0,6,8v2a1,1,0,0,0,1,1h0V23H7a3,3,0,0,0-3,3V41H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h1v7a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V53h32v3a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V49h1a1,1,0,0,0,1-1V42A1,1,0,0,0,61,41Zm-12,6h-8.8V43H60v4h-11Zm-23.3-4h12.5v4H25.75Zm29.3-32V23h-22V11ZM8,8A1,1,0,0,1,9,7H55a1,1,0,0,1,1,1V9H8Zm1.05,3h22V23h-22ZM6,26a1,1,0,0,1,1-1H57a1,1,0,0,1,1,1V41H6ZM4,43H23.75v4H4ZM14.05,56a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V49h8v7Zm2-5V49h32v2Zm42,5a1,1,0,0,1-1,1h-6a1,1,0,0,1-1-1V49h8Z"
      />
      <path
        fill="#2c2a3d"
        d="M12.05,28.36a3.9,3.9,0,1,0,3.9,3.9A3.91,3.91,0,0,0,12.05,28.36Zm0,5.8a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,12.05,34.16Z"
      />
      <path
        fill="#2c2a3d"
        d="M52.05,36.26a4,4,0,1,0-4-4A4,4,0,0,0,52.05,36.26Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,52.05,30.26Z"
      />
      <path fill="#2c2a3d" d="M23.24,28a1,1,0,0,0-1,1v9a1,1,0,0,0,2,0V29A1,1,0,0,0,23.24,28Z" />
      <path fill="#2c2a3d" d="M29.24,39a1,1,0,0,0,1-1V29a1,1,0,0,0-2,0v9A1,1,0,0,0,29.24,39Z" />
      <path fill="#2c2a3d" d="M35.24,39a1,1,0,0,0,1-1V29a1,1,0,0,0-2,0v9A1,1,0,0,0,35.24,39Z" />
      <path fill="#2c2a3d" d="M41.24,39a1,1,0,0,0,1-1V29a1,1,0,0,0-2,0v9A1,1,0,0,0,41.24,39Z" />
    </svg>
  )
}

export default Map
