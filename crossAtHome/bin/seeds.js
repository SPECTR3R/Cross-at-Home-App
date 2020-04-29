require('dotenv').config();

const mongoose = require('mongoose');
const WodAPI = require('../models/WodAPI.model');

const wodData = [
  {
    wodName: 'Marguerita',
    wodFocus: 'Metcon',
    duration: 'For Time, 50 rounds',
    desc: '1 Burpee, 1 Push-Up, 1 Jumping-Jack, 1 Sit-Up, 1 Handstand Pusp up ',
    level: 'RX',
  },
  {
    wodName: 'Marguerita',
    wodFocus: 'Metcon',
    duration: 'For Time, 50 rounds',
    desc: '1 Burpee, 1 Push-Up, 1 Jumping-Jack, 1 Sit-Up, 1 Handstand',
    level: 'Escalado',
  },
  {
    wodName: 'Marguerita',
    wodFocus: 'Metcon',
    duration: 'For Time, 50 rounds',
    desc: '1 Burpee, 1 Push-Up, 1 Jumping-Jack, 1 Sit-Up, 1 Wall Walk',
    level: 'Principiante',
  },
  {
    wodName: 'Candy',
    wodFocus: 'Metcon',
    duration: 'For time',
    desc: '20 Pull-Ups, 40 Push-Ups, 60 Air Squats',
    level: 'RX',
  },
  {
    wodName: 'Candy',
    wodFocus: 'Metcon',
    duration: 'For time',
    desc: '20 Pull-Ups, 40 Push-Ups, 60 Air Squats',
    level: 'RX',
  },
  {
    wodName: 'Candy',
    wodFocus: 'Metcon',
    duration: 'For time',
    desc: '20 Pull-Ups, 40 Push-Ups, 60 Air Squats ',
    level: 'Escalado',
  },
  {
    wodName: 'Candy',
    wodFocus: 'Metcon',
    duration: 'For time',
    desc: '20 Pull-Ups, 40 Push-Ups, 60 Air Squats',
    level: 'Principiante',
  },
  {
    wodName: 'Cindy',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 20 min',
    desc: '5 Pull-Ups, 10 Push-Ups, 15 Air Squats',
    level: 'RX',
  },
  {
    wodName: 'Cindy',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 20 min',
    desc: '5 Pull-Ups, 10 Push-Ups, 15 Air Squats',
    level: 'Escalado',
  },
  {
    wodName: 'Cindy',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 20 min',
    desc: '5 Pull-Ups, 10 Push-Ups, 15 Air Squats',
    level: 'Principiante',
  },
  {
    wodName: 'Annie',
    wodFocus: 'Metcon',
    duration: 'For Time, 50-40-30-20-10 Reps',
    desc: 'Double-Unders, Sit-Ups ',
    level: 'RX',
  },
  {
    wodName: 'Annie',
    wodFocus: 'Metcon',

    desc: 'Double-Unders o Singles/Alternados, Sit-Ups ',
    level: 'Escalado',
  },
  {
    wodName: 'Annie',
    wodFocus: 'Metcon',
    duration: 'For Time, 50-40-30-20-10 Reps',
    desc: 'Singles-Unders, Sit-Ups ',
    level: 'Principiante',
  },
  {
    wodName: 'Barbara',
    wodFocus: 'Metcon',
    duration: 'For Time, 5 Rounds',
    desc: '20 Pull-Ups, 30 Push-Ups, 40 Sit-Ups, 50 Air Squats, 3 Minutes Rest',
    level: 'RX',
  },
  {
    wodName: 'Barbara',
    wodFocus: 'Metcon',
    duration: 'For Time, 5 Rounds',
    desc: '20 Pull-Ups, 30 Push-Ups, 40 Sit-Ups, 50 Air Squats, 3 Minutes Rest',
    level: 'Escalado',
  },
  {
    wodName: 'Barbara',
    wodFocus: 'Metcon',
    duration: 'For Time, 3 Rounds',
    desc: '20 Pull-Ups, 30 Push-Ups, 40 Sit-Ups, 50 Air Squats, 3 Minutes Rest ',
    level: 'Principiante',
  },
  {
    wodName: 'Maggie',
    wodFocus: 'Fuerza',
    duration: 'For Time, 5 rounds',
    desc: '20 Handstand Push-Ups, 40 Burpees, 60 Pistols (alternando piernas)',
    level: 'RX',
  },
  {
    wodName: 'WOD 1',
    wodFocus: 'Fuerza',
    duration: 'For Time, rounds 30-20-10-20-30 ',
    desc: 'Air Squat, Cada round 10 Handstand Push-Ups',
    level: 'RX',
  },
  {
    wodName: 'WOD 1',
    wodFocus: 'Fuerza',
    duration: 'For Time, rounds 30-20-10-20-30 ',
    desc: 'Air Squat, Cada round 10 Handstand',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 1',
    wodFocus: 'Fuerza',
    duration: 'For Time, rounds 30-20-10-20-30 ',
    desc: 'Air Squat, Push press con botellas, garrafón o mochila',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 2',
    wodFocus: 'Metcon',
    duration: 'AMRAP 20 min',
    desc: '12 Swings, 12 Push-ups, 50 Double-Unders',
    level: 'RX',
  },
  {
    wodName: 'WOD 2',
    wodFocus: 'Metcon',
    duration: 'AMRAP 20 min',
    desc: '12 Swings, 12 Push-ups, 50 Double-Unders o 100 Singles/Alternados',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 2',
    wodFocus: 'Metcon',
    duration: 'AMRAP 20 min',
    desc: '12 Swings, 12 Push-ups, 100 Singles-Unders',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 3',
    wodFocus: 'Fuerza',
    duration: 'EMOM 18 min',
    desc:
      '16 step ups en un banco, silla, sillón, 16 Clean con un garrafón o una mochila llena, del piso al hombro, 16 sit ups',
    level: 'RX',
  },
  {
    wodName: 'WOD 3',
    wodFocus: 'Fuerza',
    duration: 'EMOM 18 min',
    desc:
      '16 step ups (en un banco, silla, sillón), 16 Clean (con un garrafón o una mochila llena, del piso al hombro), 16 sit ups',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 3',
    wodFocus: 'Fuerza',
    duration: 'EMOM 18 min',
    desc:
      '16 step ups (en un banco, silla, sillón), 16 Clean (con un garrafón o una mochila llena, del piso al hombro), 16 sit ups',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 4',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc: '12 Handstand Push-Ups, 12 Push-Ups, 12 Squats, 10 Lunges, 20 Calf-Rise',
    level: 'RX',
  },
  {
    wodName: 'WOD 4',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc: '12 Handstand, 12 Push-Ups, 12 Squats, 10 Lunges, 20 Calf-Rise',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 4',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc:
      '12 Push press con botellas, garrafón o mochila, 12 Push-Ups, 12 Squats, 10 Lunges, 20 Calf-Rise',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 5',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc:
      '15 Dead-Lift (con un garrafón o una mochila llena), Hip thrust 15 (Apoyar la espalda alta en un banco y levantan cadera, poner peso o hacerlo a una pierna), 1 min Plank, 15 Curl de Bicep Pueden hacerlo a una mano o con las dos, botella, mochila',
    level: 'RX',
  },
  {
    wodName: 'WOD 5',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc:
      '15 Dead-Lift (con un garrafón o una mochila llena), Hip thrust 15 (Apoyar la espalda alta en un banco y levantan cadera, poner peso o hacerlo a una pierna, 1 min Plank, 15 Curl de Bicep (Pueden hacerlo a una mano o con las dos, botella, mochila',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 5',
    wodFocus: 'Fuerza',
    duration: 'For Time, 3 rounds',
    desc:
      '15 Dead-Lift ( mochila llena), Hip thrust 15 (Apoyar la espalda alta en un banco y levantan cadera, poner peso o hacerlo a una pierna, 1 min Plank, 15 Curl de Bicep Pueden hacerlo a una mano o con las dos, botella, mochila',
    level: 'Escalado',
  },
  {
    wodName: 'Mary XXX AMRAP',
    wodFocus: 'Fuerza',
    duration: '20 min',
    desc:
      '10 seg Handstand Push-Ups, 20 segundos Pistols alternando piernas, 30 Pull-Ups, 15 Handstand Push-Ups, 30 Pistols alternando piernas, 45 Pull-Ups, 20 seg Handstand Push-Ups, 40 Pistols alternando piernas, 60 Pull-Ups, 25 Handstand Push-Ups, 50 Pistols alternando piernas, 75 Pull-Ups, 30 Handstand Push-Ups, 60 Pistols alternando piernas, 90 Pull-Ups',
    level: 'RX',
  },
  {
    wodName: 'Mary XXX AMRAP',
    wodFocus: 'Fuerza',
    duration: '20 min',
    desc:
      '10seg Handstand, 10seg Pistols alternando piernas, 15seg Push-Ups, 15seg Handstand, 15seg Pistols alternando piernas, 30seg Pull-Ups, 20seg Handstand, 20seg Pistols alternando piernas, 60seg Push-Ups, 25seg Handstand, 25seg Pistols alternando piernas, 75 Push-Ups, 30seg Handstand, 30seg Pistols alternando piernas, 90seg Push-Ups',
    level: 'Escalado',
  },
  {
    wodName: 'Mary XXX, AMRAP',
    wodFocus: 'Fuerza',
    duration: '20 min',
    desc:
      '1 Wall Walk, 1 Pistols Hold (alternando piernas), 1 Push-Ups, 1 Wall Walk, 1 Pistols Hold (alternando piernas), 3 Pull-Ups, 2 Wall Walk, 2 Pistols Hold (alternando piernas), 6 Push-Ups, 2 Wall Walk, 25 Pistols Hold(alternando piernas), 75 Push-Ups, 3 Wall Walk, 3 Pistols Hold(alternando piernas), 9 Push-Ups',
    level: 'Escalado',
  },
  {
    wodName: 'Special Mary',
    wodFocus: 'Fuerza',
    duration: 'For Time',
    desc:
      '5 Strict Handstand Push-Ups, 10 Pistols, 15 Strict Pull-Ups, 10 Strict Handstand Push-Ups, 20 Pistols, 30 Strict Pull-Ups, 15 Strict Handstand Push-Ups, 30 Pistols, 45 Strict Pull-Ups, 10 Strict Handstand Push-Ups, 20 Pistols, 30 Strict Pull-Ups, 5 Strict Handstand Push-Ups, 10 Pistols, 15 Strict Pull-Ups ',
    level: 'RX',
  },
  {
    wodName: 'WOD 6',
    wodFocus: 'Fuerza',
    duration: 'For Time, 20 min',
    desc: 'min 1 12 Push-ups, min 2 12 Squats, min 3 12 clean, min 4 12 lunges',
    level: 'RX',
  },
  {
    wodName: 'WOD 6',
    wodFocus: 'Fuerza',
    duration: 'For Time, 20 min',
    desc: 'min 1 12 Push-ups, min 2 12 Squats, min 3 12 clean, min 4 12 lunges',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 6',
    wodFocus: 'Fuerza',
    duration: 'For Time, 20 min',
    desc: 'min 1 12 Push-ups, min 2 12 Squats, min 3 12 clean, min 4 12 lunges',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 7',
    wodFocus: 'Fuerza',
    duration: 'AMRAP, 12 min',
    desc: '12 Lunges, 12 Handstand Push-Ups, 30 Double-Unders o 60 Singles-Unders/Alternados',
    level: 'RX',
  },
  {
    wodName: 'WOD 7',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 12 min',
    desc: '12 Lunges, 12 Handstand Push-Ups, 60 Singles-Unders/Alternados',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 7',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 12 min',
    desc: '12 Lunges, 12 Handstand Push-Ups, 60 Singles-Unders',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 8',
    wodFocus: 'Fuerza',
    duration: 'For Time, Rounds 21-15-9',
    desc: 'Squat, Dead-Lift (con un garrafón o una mochila llena), Burpees',
    level: 'RX',
  },
  {
    wodName: 'WOD 8',
    wodFocus: 'Fuerza',
    duration: 'For Time, Rounds 21-15-9',
    desc: 'Squat, Dead-Lift (con un garrafón o una mochila llena), Burpees',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 8',
    wodFocus: 'Fuerza',
    duration: 'For Time, Rounds 21-15-9',
    desc: 'Squat, Dead-Lift (con un garrafón o una mochila llena), Burpees',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 9',
    wodFocus: 'Fuerza',
    duration: 'For Time,  2 Rounds',
    desc:
      '100  Double-Unders, 50 clean, 100 high knees (50x lado), 50 swing, 20 Handstand Push-Upss',
    level: 'RX',
  },
  {
    wodName: 'WOD 9',
    wodFocus: 'Fuerza',
    duration: 'For Time, Rounds 21-15-9',
    desc:
      '100  Double-Unders o 200 Singles-Unders/Alternados, 50 clean, 100 high knees (50x lado), 50 swing, 20 Handstand',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 9',
    wodFocus: 'Fuerza',
    duration: 'For Time, Rounds 21-15-9',
    desc:
      '200 Singles-Unders/Alternados, 50 clean, 100 high knees (50x lado), 50 swing, 20 Push press con botellas',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 10',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 15 min',
    desc: '50 lunges (25-25), 100 mountain climbers (50-50), Then For time 50 push ups',
    level: 'RX',
  },
  {
    wodName: 'WOD 10',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 15 min',
    desc: '50 lunges (25-25), 100 mountain climbers (50-50), Then For time 50 push ups',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 10',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 15 min',
    desc: '50 lunges (25-25), 100 mountain climbers (50-50), Then For time 50 push ups',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 11',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'RX',
  },
  {
    wodName: 'WOD 11',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 11',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 12',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 12',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 12',
    wodFocus: 'Metcon',
    duration: 'AMRAP, 5 Rounds 3 min',
    desc: '12 air squats sin peso, 12 saltos a un objeto, 12 push ups 1 min rest',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 4 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups, 20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups,',
    level: 'RX',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups, 20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups,',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups, 20 seg Squats Jumps, 20 seg Push-ups, 20 burpees, 20 Sit-Ups,',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Jumpin-Jacks, 20 seg Push-ups, 20 seg Mountain-Climbers, 20 seg plank, 20 seg High,Kness, 20 seg Squats Jumps, 20 seg Wall-Sit',
    level: 'RX',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Jumpin-Jacks, 20 seg Push-ups, 20 seg Mountain-Climbers, 20 seg plank, 20 seg High,Kness, 20 seg Squats Jumps, 20 seg Wall-Sit',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 13',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Jumpin-Jacks, 20 seg Push-ups, 20 seg Mountain-Climbers, 20 seg plank, 20 seg High,Kness, 20 seg Squats Jumps, 20 seg Wall-Sit',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 14',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Squat-Jumps, 20 seg Push-ups diamante20 seg Push-ups brazos abiertos, 20 seg Crunch, 20 seg abdominales bicicleta',
    level: 'RX',
  },
  {
    wodName: 'WOD 14',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Squat-Jumps, 20 seg Push-ups, 20 seg 20 seg Push-ups brazos abiertos, 20 seg Crunch, 20 seg abdominales bicicleta ',
    level: 'Escalado',
  },
  {
    wodName: 'WOD 14',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Squat-Jumps, 20 seg Push-ups, 20 seg 20 seg Push-ups brazos abiertos, 20 seg Crunch, 20 seg abdominales bicicleta ',
    level: 'Principiante',
  },
  {
    wodName: 'WOD 14',
    wodFocus: 'Metcon',
    duration: 'Tabata, 5 rounds, 20 min, entre cada ejercicio 10 seg de descanso',
    desc:
      '20 seg burpees, 20 seg Squat-Jumps, 20 seg Push-ups, 20 seg 20 seg Push-ups brazos abiertos, 20 seg Crunch, 20 seg abdominales bicicleta ',
    level: 'Principiante',
  },
];

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`DB Ready`);
  await WodAPI.create(wodData);
  console.log(`Database populated with ${wodData}`);
  await mongoose.disconnect();
};

connectDB().catch(error => console.error(error));
