// fitness-shop-frontend/src/helpers/fetchProducts.js
import dumbbell_10kg from '../assets/gym/dumbbell_10kg.webp';
import treadmill from '../assets/gym/treadmill.webp';
import yoga_mat from '../assets/gym/yoga_mat.webp';
import resistance_bands from '../assets/gym/resistance_bands.webp';
import kettlebell_15kg from '../assets/gym/kettlebell_15kg.webp';
import rowing_machine from '../assets/gym/rowing_machine.webp';
import foam_roller from '../assets/gym/foam_roller.webp';
import jump_rope from '../assets/gym/jump_rope.webp';
import barbell_set from '../assets/gym/barbell_set.jpg';
import weight_bench from '../assets/gym/weight_bench.webp';
import elliptical_machine from '../assets/gym/elliptical_machine.webp';
import medicine_ball_5kg from '../assets/gym/medicine_ball_5kg.jpg';
import pull_up_bar from '../assets/gym/pull-up_bar.webp';
import stability_ball from '../assets/gym/stability_ball.webp';
import pilates_ring from '../assets/gym/pilates_ring.webp';
import yoga_block from '../assets/gym/yoga_block.webp';
import push_up_grips from '../assets/gym/push-up_grips.webp';
import fitness_tracker from '../assets/gym/fitness_tracker.webp';
import water_bottle from '../assets/gym/water_bottle.webp';
import gym_bag from '../assets/gym/gym_bag.webp';
import whey_protein from '../assets/gym/whey_protein.webp';

export const products = [
  { id: 1, name: 'Dumbbell 10kg', price: 50, image: dumbbell_10kg },
  { id: 2, name: 'Treadmill', price: 500, image: treadmill },
  { id: 3, name: 'Yoga Mat', price: 25, image: yoga_mat },
  { id: 4, name: 'Resistance Bands', price: 15, image: resistance_bands },
  { id: 5, name: 'Kettlebell 15kg', price: 45, image: kettlebell_15kg },
  { id: 6, name: 'Rowing Machine', price: 300, image: rowing_machine },
  { id: 7, name: 'Foam Roller', price: 20, image: foam_roller },
  { id: 8, name: 'Jump Rope', price: 10, image: jump_rope },
  { id: 9, name: 'Barbell Set', price: 120, image: barbell_set },
  { id: 10, name: 'Weight Bench', price: 150, image: weight_bench },
  { id: 11, name: 'Elliptical Machine', price: 350, image: elliptical_machine },
  { id: 12, name: 'Medicine Ball 5kg', price: 30, image: medicine_ball_5kg },
  { id: 13, name: 'Pull-Up Bar', price: 40, image: pull_up_bar },
  { id: 14, name: 'Stability Ball', price: 35, image: stability_ball },
  { id: 15, name: 'Pilates Ring', price: 20, image: pilates_ring },
  { id: 16, name: 'Yoga Block', price: 10, image: yoga_block },
  { id: 17, name: 'Push-Up Grips', price: 15, image: push_up_grips },
  { id: 18, name: 'Fitness Tracker', price: 100, image: fitness_tracker },
  { id: 19, name: 'Water Bottle', price: 12, image: water_bottle },
  { id: 20, name: 'Gym Bag', price: 45, image: gym_bag },
  { id: 21, name: 'Whey Protein', price: 20, image: whey_protein },
];

// you no longer need axios and nameChange in this file if you're not making API calls or manipulating strings
