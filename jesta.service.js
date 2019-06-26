'use strict';

const jestaStarter = [
    'Hey dude',
    'Hey man',
    'Hey bro',
    'Yo dude',
    'Good day sir',
];


const jestaCollection = [
  'can you help me with my HW? it\'s a real bummer dude',
  'do you have something to drink? I\'m really thirsty man',
  'got some change?',
  'got a smoke?',
  'can I use your phone?',
  'can you make me a coffee?',
  'can you make me a Macchiato grande?',
  'can you make me some tea?',
];


function getRandomJesta() {
    const rand1 = Math.floor(Math.random() * jestaStarter.length);
    const rand2 = Math.floor(Math.random() * jestaCollection.length);
    return `${jestaStarter[rand1]}, ${jestaCollection[rand2]}`;
}

function getRandomLongJesta(min) {}

function getRandomShortJesta(max) {}

function getJestaContains(str) {}

function getAllJestaStartWith(str) {}

if(typeof module !== 'undefined') {
    module.exports.getRandomJesta = getRandomJesta;
    module.exports.getRandomLongJesta = getRandomLongJesta;
    module.exports.getRandomShortJesta = getRandomShortJesta;
    module.exports.getJestaContains = getJestaContains;
    module.exports.getAllJestaStartWith = getAllJestaStartWith;
}