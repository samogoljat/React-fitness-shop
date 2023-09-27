// products.js

import dumbell from '../assets/gym/dumbell.webp';
import treadmill from '../assets/gym/treadmill.webp';
import yogamat from '../assets/gym/yogamat.webp';
import bands from '../assets/gym/bands.webp';
import kettlebell from '../assets/gym/kettlebell.webp';
import rowingmachine from '../assets/gym/rowingmachine.webp';
import foamroller from '../assets/gym/foamroller.webp';
import jumprope from '../assets/gym/jumprope.webp';
import barbellset from '../assets/gym/barbellset.jpg';
import bench from '../assets/gym/bench.webp';
import ellipticalmachine from '../assets/gym/ellipticalmachine.webp';
import fitnesstracker from '../assets/gym/fitnesstracker.webp';
import gymbag from '../assets/gym/gymbag.webp';
import medicineball from '../assets/gym/medicineball.jpg';
import pilatesring from '../assets/gym/pilatesring.webp';
import pullup from '../assets/gym/pullup.webp';
import pushup from '../assets/gym/pushup.webp';
import stabilityball from '../assets/gym/stabilityball.webp';
import waterbottle from '../assets/gym/waterbottle.webp';
import yogablock from '../assets/gym/yogablock.webp';
import wheyprotein from '../assets/gym/wheyprotein.webp';

const products = [
  { id: 1, name: 'Dumbbell (10kg)', price: '$50', image: dumbell },
  { id: 2, name: 'Treadmill', price: '$500', image: treadmill },
  { id: 3, name: 'Yoga Mat', price: '$25', image: yogamat },
  { id: 4, name: 'Resistance Bands', price: '$15', image: bands },
  { id: 5, name: 'Kettlebell (15kg)', price: '$45', image: kettlebell },
  { id: 6, name: 'Rowing Machine', price: '$300', image: rowingmachine },
  { id: 7, name: 'Foam Roller', price: '$20', image: foamroller },
  { id: 8, name: 'Jump Rope', price: '$10', image: jumprope },
  { id: 9, name: 'Barbell Set', price: '$120', image: barbellset },
  { id: 10, name: 'Weight Bench', price: '$150', image: bench },
  {
    id: 11,
    name: 'Elliptical Machine',
    price: '$350',
    image: ellipticalmachine,
  },
  { id: 12, name: 'Medicine Ball (5kg)', price: '$30', image: medicineball },
  { id: 13, name: 'Pull-Up Bar', price: '$40', image: pullup },
  { id: 14, name: 'Stability Ball', price: '$35', image: stabilityball },
  { id: 15, name: 'Pilates Ring', price: '$20', image: pilatesring },
  { id: 16, name: 'Yoga Block', price: '$10', image: yogablock },
  { id: 17, name: 'Push-Up Grips', price: '$15', image: pushup },
  { id: 18, name: 'Fitness Tracker', price: '$100', image: fitnesstracker },
  { id: 19, name: 'Water Bottle', price: '$12', image: waterbottle },
  { id: 20, name: 'Gym Bag', price: '$45', image: gymbag },
  { id: 20, name: 'Whey Protein', price: '$20', image: wheyprotein },
];

export default products;
