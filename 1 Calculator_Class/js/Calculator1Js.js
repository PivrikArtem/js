var calculator1 = new calculator1Js('js-calculator1');
var calculator2 = new calculator1Js('js-calculator2');
function anotherOneCalculator(calculator) {
    calculator.render();
    calculator.initialization();
    calculator.addListener();
}
anotherOneCalculator(calculator1);
anotherOneCalculator(calculator2);