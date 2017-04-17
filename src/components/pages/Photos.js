import React from 'react';
import { v4 } from 'uuid';

import FilteredImageList from '../../containers/FilteredImageList';

import Column from '../ui/Column';

import PageWithNav from './PageWithNav';

const images=[
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature'],
    height: 533,
    id: v4(),
    src: '/aleks_leavenworth_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_leavenworth.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 525,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature', 'panorama'],
    height: 1200,
    id: v4(),
    src: '/garrett_bishop_thumbnail.jpg',
    width: 800,
    zoomSrc: '/garrett_bishop.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Milky Way',
    categories: ['nature', 'night sky', 'panorama'],
    height: 3909,
    id: v4(),
    src: '/milkyway-over-the-druids-smaller-thumbnail.jpg',
    width: 9954,
    zoomSrc: '/milkyway-over-the-druids-smaller.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature'],
    height: 533,
    id: v4(),
    src: '/aleks_leavenworth_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_leavenworth.jpg',
  },
  {
    alt: 'Milky Way',
    categories: ['nature', 'night sky', 'panorama'],
    height: 3909,
    id: v4(),
    src: '/milkyway-over-the-druids-smaller-thumbnail.jpg',
    width: 9954,
    zoomSrc: '/milkyway-over-the-druids-smaller.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 525,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature', 'panorama'],
    height: 1200,
    id: v4(),
    src: '/garrett_bishop_thumbnail.jpg',
    width: 800,
    zoomSrc: '/garrett_bishop.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Milky Way',
    categories: ['nature', 'night sky', 'panorama'],
    height: 3909,
    id: v4(),
    src: '/milkyway-over-the-druids-smaller-thumbnail.jpg',
    width: 9954,
    zoomSrc: '/milkyway-over-the-druids-smaller.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature'],
    height: 533,
    id: v4(),
    src: '/aleks_leavenworth_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_leavenworth.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 525,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature', 'panorama'],
    height: 1200,
    id: v4(),
    src: '/garrett_bishop_thumbnail.jpg',
    width: 800,
    zoomSrc: '/garrett_bishop.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Milky Way',
    categories: ['nature', 'night sky', 'panorama'],
    height: 3909,
    id: v4(),
    src: '/milkyway-over-the-druids-smaller-thumbnail.jpg',
    width: 9954,
    zoomSrc: '/milkyway-over-the-druids-smaller.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature'],
    height: 533,
    id: v4(),
    src: '/aleks_leavenworth_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_leavenworth.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 525,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing', 'nature', 'panorama'],
    height: 1200,
    id: v4(),
    src: '/garrett_bishop_thumbnail.jpg',
    width: 800,
    zoomSrc: '/garrett_bishop.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
  {
    alt: 'Milky Way',
    categories: ['nature', 'night sky', 'panorama'],
    height: 3909,
    id: v4(),
    src: '/milkyway-over-the-druids-smaller-thumbnail.jpg',
    width: 9954,
    zoomSrc: '/milkyway-over-the-druids-smaller.jpg',
  },
  {
    alt: 'Photoototosodf',
    categories: ['climbing'],
    height: 1200,
    id: v4(),
    src: '/aleks_2_thumbnail.jpg',
    width: 800,
    zoomSrc: '/aleks_2.jpg',
  },
];

function getCategories(images) {
  const categoriesSet = images.reduce((categories, image) => {
    image.categories && image.categories.forEach(category =>
      categories.add(category)
    );

    return categories;
  }, new Set());

  return [...categoriesSet];
}

const Photo = (props) => (
  <PageWithNav>
    <Column>
      <FilteredImageList
        categories={ getCategories(images) }
        images={ images } />
    </Column>
  </PageWithNav>
);

Photo.propTypes = {

};

export default Photo;