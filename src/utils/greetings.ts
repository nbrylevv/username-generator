import {
  getRandom,
} from "./helpers";

interface Greetings {
  [key: string]: string;
}

export const GREETINGS = [
  'Hey',
  'What\'s up',
  'Privet',
  'How\'s it going',
  'Do you like it',
  'Did you see it',
  'Ah, it\'s you',
  'Listen to my story',
  'Is it you',
  'God bless you',
  'I love you',
  'Looks great',
  'Say it again',
  'Do you remember it'
];

export const getRandomGreetings = function () {
  return GREETINGS[getRandom(0, GREETINGS.length - 1)];
};
