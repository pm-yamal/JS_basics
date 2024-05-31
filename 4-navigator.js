// Цель Задания:
// Разработать функционал простого навигатора для тренировки навыков программирования на JavaScript, включающий в себя основы математики.

// Задача:
// Рассчитать дистанцию от текущего местоположения пользователя до желаемой точки назначения.
// Местоположения задаются через координаты (широта и долгота), обозначаемые как latitude (широта) и longitude (долгота).
// Входные Данные:
// Текущее местоположение пользователя (Position Latitude, Position Longitude)
// Местоположение точки назначения (Destination Latitude, Destination Longitude)
// Задача Программирования:
// Написать код, который рассчитывает расстояние от текущей точки до точки назначения, представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
// Для расчетов можно воспользоваться приемами математики, вспомнить знания из школы или найти формулу в интернете.

// Решение
const positionLatitude = 10;        //x1
const positionLongitude = 34;       //y1
const destinationLatitude = 3;     //x2
const destinationLongitude = 10;    //y2

const distance = Math.sqrt(Math.pow((destinationLatitude - positionLatitude), 2) + Math.pow((destinationLongitude - positionLongitude), 2));
console.log(distance);             