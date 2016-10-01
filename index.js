var FizzBuzz = require('./fizzbuzz.js');
var fizzer = new FizzBuzz(0, 100);

fizzer.fizz('Fuzz');
fizzer.buzz('Bizz');
fizzer.fizzer(5);
fizzer.buzzer(3);

fizzer.start();