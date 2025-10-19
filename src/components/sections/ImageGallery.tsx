import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'
import ImageViewer from '../imageViewer/Index'
import { useState } from 'react'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const open = selectedIndex > -1

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index)
  }

  const handleCloseImage = () => {
    setSelectedIndex(-1)
  }
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((image, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(index)
              }}
            >
              <img src={image} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleCloseImage}
      />
    </>
  )
}

export default ImageGallery
