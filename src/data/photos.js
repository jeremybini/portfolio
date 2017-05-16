import { v4 } from 'uuid'

const getPhotoSrc = ({ kind, title }, { height, width }) => {
  return require(`../assets/images/photos/${title}-${width}x${height}.${kind}`)
}

const getMaxDimensions = ({ sizes }) => {
  const { height, width } = sizes.reduce((max, size) =>
    size.height > max.height ? size : max
  , sizes[0])

  return {
    maxHeight: height,
    maxWidth: width,
  }
}

const addDataToPhoto = photo => {
  const sizes = photo.sizes.map(size => ({
    ...size,
    src: getPhotoSrc(photo, size)
  }));

  const { maxHeight, maxWidth } = getMaxDimensions(photo);

  return {
    ...photo,
    maxHeight,
    maxWidth,
    sizes,
  }
}

// Hard code photos here until need to fetch
const photos = [
  {
    categories: ['climbing', 'nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 197 },
      { width: 600, height: 393 },
      { width: 900, height: 590 },
      { width: 1200, height: 787 },
      { width: 1500, height: 984 },
      { width: 1800, height: 1180 },
    ],
    title: 'garrett-bishop',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 105 },
      { width: 600, height: 209 },
      { width: 900, height: 314 },
      { width: 1200, height: 418 },
      { width: 1500, height: 523 },
      { width: 1800, height: 628 },
    ],
    title: 'horseshoe-bend',
  },
  {
    categories: ['night sky', 'nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 118 },
      { width: 600, height: 236 },
      { width: 900, height: 353 },
      { width: 1200, height: 471 },
      { width: 1500, height: 589 },
      { width: 1800, height: 707 },
    ],
    title: 'milkyway-over-the-druids',
  },
  {
    categories: ['climbing'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 200 },
      { width: 600, height: 400 },
      { width: 900, height: 600 },
      { width: 1200, height: 800 },
      { width: 1500, height: 1000 },
      { width: 1800, height: 1200 },
    ],
    title: 'pieter-tbone-shuffle',
  },
  {
    categories: ['night sky'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 200 },
      { width: 600, height: 400 },
      { width: 900, height: 600 },
      { width: 1200, height: 800 },
      { width: 1500, height: 1000 },
      { width: 1800, height: 1200 },
    ],
    title: 'water-tank-texas',
  },
  {
    categories: ['climbing'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 450 },
      { width: 600, height: 900 },
      { width: 900, height: 1350 },
      { width: 1200, height: 1800 },
      { width: 1500, height: 2250 },
      { width: 1800, height: 2700 },
    ],
    title: 'aleks-horsepens',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 200 },
      { width: 600, height: 400 },
      { width: 900, height: 600 },
      { width: 1200, height: 800 },
      { width: 1500, height: 1000 },
      { width: 1800, height: 1200 },
    ],
    title: 'aleks-horseshoe-canyon',
  },
  {
    categories: ['climbing'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 450 },
      { width: 600, height: 900 },
      { width: 900, height: 1350 },
      { width: 1200, height: 1800 },
      { width: 1500, height: 2250 },
      { width: 1800, height: 2700 },
    ],
    title: 'aleks-hueco',
  },
  {
    categories: ['climbing'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 200 },
      { width: 600, height: 400 },
      { width: 900, height: 600 },
      { width: 1200, height: 800 },
      { width: 1500, height: 1000 },
      { width: 1800, height: 1200 },
    ],
    title: 'aleks-leavenworth',
  },
  {
    categories: [],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 216 },
      { width: 600, height: 432 },
      { width: 900, height: 648 },
      { width: 1200, height: 864 },
      { width: 1500, height: 1081 },
      { width: 1800, height: 1297 },
    ],
    title: 'babalicious',
  },
  {
    categories: ['climbing', 'nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 118 },
      { width: 600, height: 237 },
      { width: 900, height: 355 },
      { width: 1200, height: 473 },
      { width: 1500, height: 591 },
      { width: 1800, height: 710 },
    ],
    title: 'bryan-france',
  },
  // {
  //   categories: ['nature'],
  //   id: v4(),
  //   kind: 'jpg',
  //   sizes: [
  //     { width: 300, height: 420 },
  //     { width: 600, height: 839 },
  //     { width: 900, height: 1259 },
  //     { width: 1200, height: 1679 },
  //     { width: 1500, height: 2098 },
  //     { width: 1800, height: 2518 },
  //   ],
  //   title: 'california-clouds',
  // },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 128 },
      { width: 600, height: 256 },
      { width: 900, height: 384 },
      { width: 1200, height: 513 },
      { width: 1500, height: 641 },
      { width: 1800, height: 769 },
    ],
    title: 'california-petroglyph',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 206 },
      { width: 600, height: 411 },
      { width: 900, height: 617 },
      { width: 1200, height: 823 },
      { width: 1500, height: 1029 },
      { width: 1800, height: 1234 },
    ],
    title: 'font-sunset',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 195 },
      { width: 600, height: 391 },
      { width: 900, height: 586 },
      { width: 1200, height: 781 },
      { width: 1500, height: 977 },
      { width: 1800, height: 1172 },
    ],
    title: 'hueco-tanks',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 450 },
      { width: 600, height: 900 },
      { width: 900, height: 1350 },
      { width: 1200, height: 1800 },
      { width: 1500, height: 2250 },
      { width: 1800, height: 2700 },
    ],
    title: 'pink-sands',
  },
  {
    categories: ['nature'],
    id: v4(),
    kind: 'jpg',
    sizes: [
      { width: 300, height: 184 },
      { width: 600, height: 368 },
      { width: 900, height: 553 },
      { width: 1200, height: 737 },
      { width: 1500, height: 921 },
      { width: 1800, height: 1105 },
    ],
    title: 'utah-storm',
  },
]

export default photos.map(addDataToPhoto);
