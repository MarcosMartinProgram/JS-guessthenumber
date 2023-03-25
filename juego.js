// Generar un número aleatorio entre un mínimo y un máximo
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostrar un resultado en la interfaz
function showResult(resultId) {
	// Ocultar todos los resultados
	var results = document.querySelectorAll('.result');
	for (var i = 0; i < results.length; i++) {
		results[i].style.display = 'none';
	}

	// Mostrar el resultado correspondiente
	var result = document.getElementById(resultId);
	result.style.display = 'block';
}

// Obtener los elementos de la interfaz
var guessInput = document.getElementById('guess-input');
var guessButton = document.getElementById('guess-button');
var correctResult = document.getElementById('result-correct');
var lowResult = document.getElementById('result-low');
var highResult = document.getElementById('result-high');

// Generar el número aleatorio y definir el rango
var minNumber = 1;
var maxNumber = 100;
var randomNumber = getRandomNumber(minNumber, maxNumber);

// Agregar un evento al botón de adivinar
guessButton.addEventListener('click', function() {
	// Obtener el número ingresado por el usuario
	var guessNumber = parseInt(guessInput.value);

	// Comprobar si el número es válido
	if (guessNumber < minNumber || guessNumber > maxNumber || isNaN(guessNumber)) {
		alert('Please enter a number between ' + minNumber + ' and ' + maxNumber + '.');
	} else {
		// Comprobar si el número es correcto
		if (guessNumber === randomNumber) {
			showResult('result-correct');
		} else if (guessNumber < randomNumber) {
			showResult('result-low');
		} else {
			showResult('result-high');
		}
	}
});
