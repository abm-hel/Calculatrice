/*function insert(num) {
	$('.result').val($('.result').val() + num);
}

function effacerEcran(){
	$('.result').val('');
}

function effacer() {
	value = $('.result').val();
	$('.result').val(value.substring(0, value.length - 1));
}

function resultat() {
	$('.result').val(eval($('.result').val()));
}*/


$(document).ready(function() 
{
	var result = 0;
	var prevEntry = 0;
	var operation = null;
	var currentEntry = '0';
	updateScreen(result);
	var i = 0;
	
	
	$('button').on('click', function(evt) 
	{
	  var buttonPressed = $(this).attr("value")
	  console.log(buttonPressed);
	  
	  if (buttonPressed === "C")
	  {
		result = 0;
		currentEntry = '0';
	  } 
	  /*else if (buttonPressed === "CE") 
	  {
		currentEntry = '0';
	  }*/
	  
	  else if (buttonPressed === "DEL") 
	  {
		currentEntry = currentEntry.substring(0, currentEntry.length-1);
	  } 
	  
	  else if (buttonPressed === "+/-") 
	  {
		currentEntry *= -1;
	  } 
	  
	  else if (buttonPressed === '.')
	  {
		currentEntry += '.';
	  } 
	  
	  else if (isNumber(buttonPressed))
	  {
		if (currentEntry === '0') 
			currentEntry = buttonPressed;
		else 
			currentEntry = currentEntry + buttonPressed;
	  } 
	  
	  else if (isOperator(buttonPressed)) 
	  {
		prevEntry = parseFloat(currentEntry);
		operation = buttonPressed;
		currentEntry = '';
		i=1;
	  } 
	  
	  else if(buttonPressed === '%') 
	  {
		currentEntry = currentEntry / 100;
	  } 

	  else if (buttonPressed === '=')
	  {
		  if(i==1)
		  {
			currentEntry = operate(prevEntry, currentEntry, operation);
			operation = null;
			i=0;
		  }
	  }
	  
	  updateScreen(currentEntry);
	}

	);
  });
  
  updateScreen = function(displayValue) 
  {
	var displayValue = displayValue.toString();
	$('.screen').val(displayValue);
  };
  
  isNumber = function(value)
  {
	return !isNaN(value);
  }
  
  isOperator = function(value) 
  {
	return value === '/' || value === '*' || value === '+' || value === '-';
  };
  
  operate = function(a, b, operation) 
  {
	a = parseFloat(a);
	b = parseFloat(b);
	
	console.log(a, b, operation);

	if (operation === '+')
	 	return a + b;
	else if (operation === '-') 
		return a - b;
	else if (operation === '*')
		return a * b;
	else if (operation === '/') 
		return a / b;	
  }