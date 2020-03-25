

let checkButton = document.querySelector('#btn-1');

let radioOne = document.querySelector('#one');

let radioTwo = document.querySelector('#two');

 function pesel(){
	 
	let someValue = document.getElementById('field1').value,
	
	someValueInt = parseInt(someValue),
	
	output = [],
	
	sNumber = someValueInt.toString();
	
	for(let i = 0,len = sNumber.length;i < len;i +=1){
		
		output.push(+sNumber.charAt(i));
		
	}
	
	let outputLast = [],
	
	sNumberLast = someValueInt.toString();
	
	for(let i = 0,len = sNumberLast.length;i < len;i += 1){
		
		outputLast.push(+sNumberLast.charAt(i));
		
	}
	
	output.length = 10;
	
	let contSum = [1,3,7,9,1,3,7,9,1,3],
	
	twoDozen=[],
	
	oneDozen=[];
	
	for(let i = 0;i<output.length;i++){
		
		if(output[i]*contSum[i] > 9){
			
			twoDozen += output[i]*contSum[i];
		
		}else if(output[i]*contSum[i] <= 9){
			
			oneDozen += output[i]*contSum[i];
			
		}
		
		
	}
	
    oneDozen = oneDozen.split("");
	
    twoDozen = twoDozen.split("");
	
	twoDozenValues = twoDozen.map(function(a){
		
		return parseInt(a,10);
		
	});
	
	
	oneDozenValues = oneDozen.map(function(a){
		
		return parseInt(a,10);
		
	});
	
	oneDozenSum = 0;
	
	for(let i = 0;i<oneDozenValues.length;i++){
		
		oneDozenSum += oneDozenValues[i];
		
	}
	
	twoDozenSum = 0;
	
	for(let i = 0;i<twoDozenValues.length;i++){
		
		twoDozenValues.splice(i,1);
		
		twoDozenSum += twoDozenValues[i];
		
	}
	
	controlSumm = twoDozenSum + oneDozenSum;

    controlSummArr = [];

    controlSummArr.push(controlSumm);
	
	controlSummArr2 = controlSumm.toString();

    controlSummArr2 = controlSummArr2.split("");
	
	controlSummArr2 = controlSummArr2.slice(1);
	
	controlSummArr2 = controlSummArr2.map(function(a){
		
		return parseInt(a,10);
		
	});
	
	let finall = 10 - controlSummArr2[0];
	
	outputLast = outputLast.slice(10);

    	
	
	console.log(outputLast == finall);
	
	if(someValue.length == 11 && outputLast == finall){
		
		alert('PESEL jest poprawny');
		
	}else{
		
		alert('Długość PESEL nie jest poprawna albo suma kontrolna się nie zgadza')
		
	}
	
}

function nip(){
	
	let nipValue = document.getElementById('field1').value;
	
	nipArray = [];
	
	for(let i = 0,len = nipValue.length;i < len;i +=1){
		
		nipArray.push(+nipValue.charAt(i));
		
	}
	
	nipArray.length = 9;
	
	let nipContSum = [6,5,7,2,3,4,5,6,7],
	
	nipSummTwoArrays = 0;
	
	for(let i = 0;i<nipArray.length;i++){
		
		nipSummTwoArrays += nipContSum[i]*nipArray[i];
		
	}
	
	modulo = nipSummTwoArrays % 11;
	
	nipArray2 = [];
	
	for(let i = 0;i < nipValue.length;i+=1){
		
		nipArray2.push(+nipValue.charAt(i));
		
	}
	
	nipArray3 = nipArray2.slice(9);
	
	console.log(nipArray2);
	
	if(nipArray2.length == 10 && modulo == nipArray3){
		
		alert('NIP poprawny');
		
	}else{
		
		alert('Długość NIP nie jest poprawna albo suma kontrolna się nie zgadza');
		
	}
	
}

checkButton.onclick = function(){
	
	if(radioOne.checked == true){
		
		nip();
		
	}else{
		
		pesel();
		
	}
	
}

