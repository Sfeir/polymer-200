'use strict';

exports.persons = [
  {
    id: 1,
    lastname: 'Kenobi',
    firstname: 'Obi-Wan',
    gender: 'male',
    photo: 'http://vignette4.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg',
    contact: {
      mail: 'obi-wan.kenobi@user.com',
      fixedPhone: '+33100114451',
      mobilePhone: '+33600114451',
      street: '48 rue Jacques Dulud',
      postalCode: '92200',
      city: 'Neuilly-sur-Seine',
      office: '4è étage, Bureau B'
    },
    functionName: 'Maitre Jedi',
    manager: 'Yoda',
    entity: 'RA',
    weapon: 'sabre laser',
    skills: [
      'persuasion',
      'télékinésie',
      'saut'
    ]
  },
  {
    id: 2,
    lastname: 'Skywalker',
    firstname: 'Luke',
    gender: 'male',
    photo: 'http://vignette1.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg',
    contact: {
      mail: 'luke.skywalker@user.com',
      fixedPhone: '+33100114452',
      mobilePhone: '+33600114452',
      street: '48 rue Jacques Dulud',
      postalCode: '92200',
      city: 'Neuilly-sur-Seine',
      office: '1è étage, Bureau A'
    },
    functionName: 'Jedi',
    manager: 'Obi-Wan',
    entity: 'RA',
    weapon: 'sabre laser',
    skills: [
      'persuasion',
      'télékinésie',
      'déflexion'
    ]
  },
  {
    id: 3,
    lastname: 'Solo',
    firstname: 'Han',
    gender: 'male',
    photo: 'http://api.randomuser.me/portraits/men/34.jpg',
    contact: {
      mail: 'han.solo@user.com',
      fixedPhone: '+33100114455',
      mobilePhone: '+33600114455',
      street: '48 rue Jacques Dulud',
      postalCode: '92200',
      city: 'Neuilly-sur-Seine',
      office: '2è étage, Bureau A'
    },
    functionName: 'capitaine',
    manager: '',
    entity: 'contrebandier',
    weapon: 'blaster',
    skills: [
      'entourloupe',
      'vol'
    ]
  }
];
