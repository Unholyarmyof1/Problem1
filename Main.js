function validate() {
	var points = 0;
	var Q1_checked = null;
	var Q1_inputs = document.getElementById("Q1");
	
	for (var i = 0; i < Q1_inputs.length; i++) {
		if (Q1_inputs[i].checked) {
			Q1_checked = Q1_inputs[i];
			break;
		}
	}

	if (Q1_checked.value === "30") {
		points++;
	}
	
	var Q2_inputs = document.getElementById("Q2");
	
	if (Q2_inputs.value === "5") {
		points++;
	}
	
	var Q3_inputs = document.getElementById("Q3");
	
	if (Q3_inputs[0].checked === true && Q3_inputs[1].checked === true && Q3_inputs[2].checked === true && Q3_inputs[3].checked === false) {
		points++;
	}
	
	var Q4_inputs = document.getElementById("Q4")[0].value;
	
	if (Q4_inputs=== "343") {
		points++;
	}
	
	switch(points) {
		case 0: alert("You scored " + points + "/4 points.....that's awful");
		break;

		case 1: alert("You scored " + points + "/4 points.....go back to school");
		break;
		
		case 2: alert("You scored " + points + "/4 points.....below average");
		break;
		
		case 3: alert("You scored " + points + "/4 points.....almost got it");
		break;
		
		case 4: alert("You scored " + points + "/4 points.....good job");
		break;
	}
}
