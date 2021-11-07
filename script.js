$(document).ready(function() 
{
	var result = 0;
	var currentEntry = '0';
	updateScreen(result);

	$(document).keydown(function(e){
		e.preventDefault();
	  });
	
	
	$('button').on('click', function(evt) 
	{
	  var buttonPressed = $(this).attr("value")
	  console.log(buttonPressed);
	  
	  if (buttonPressed === "C")
	  {
		result = 0;
		currentEntry = '0';
	  } 

	  else if (buttonPressed === "DEL") 
	  {
		  if(currentEntry !="0")
			currentEntry = currentEntry.substring(0, currentEntry.length-1);
	  } 
	  
	  else if (buttonPressed === "+/-") 
	  {
		if(currentEntry!=0)
		{
			currentEntry *= -1;
		}
	  } 
	  
	  else if (buttonPressed === '.')
	  {
		currentEntry += '.';
	  } 
	  
	  else if(buttonPressed === '%') 
	  {
		currentEntry = currentEntry / 100;
	  } 

    else if(currentEntry === '0') 
    {
      currentEntry = buttonPressed;
    }
    else if(buttonPressed === '=') 
    {
      currentEntry = eval($('.screen').val());
    }
		else 
    {
      currentEntry = currentEntry + buttonPressed;
    }

	  updateScreen(currentEntry);
	}

	);
  });
  
  updateScreen = function(displayValue) 
  {
    displayValue = displayValue.toString();
    $('.screen').val(displayValue);
  };
  
