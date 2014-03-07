
function primeTester(n){
	
			//var n = document.getElementById("pTest").value;
			
			if(n == 2 || n == 3){
			
				return true;
			
			}
			
			if(n < 2){
			
				return false;
			
			}
			
			var m = Math.sqrt(n);
			var res = false;
			for(var i = 2; i <= m; i++){
	
								
				if(n%i==0){
				
					return false;
					
				
				} else {
				
					res = true;
									
				}
	
			}

			return res;

		}
		
		function primeResult(){
		
			var quickTest = document.getElementById("pTest").value;
			
			if(isNaN(quickTest) || !isFinite(quickTest) || quickTest == ""){
			
			
				alert("Enter a valid numeric value greater than 1.");
				return;
			
			} else{
			
				var passToSub = document.getElementById("pTest").value;
				result = "Result for " +passToSub+ " primality test is:   " + primeTester(passToSub)
				alert(result);
				return;
				
			}
		
		}
		
		function primeLister(){
		
			var strResult = "";
			var n = document.getElementById("pCount").value;
			var tester2 = "blerch " + n + "<br />" + "more blerch";
			
		
			for(var i = 0; i <= n; i++){
			
				//var aTest = primeTester(i);
				
				if(primeTester(i)){
				
					//strResult += i + " is " + aTest;
					strResult += i + " ";
				
				}
			
			
			
			}
		
			//document.getElementById("txtArea").innerHTML = "working";
			document.getElementById("txtArea").innerHTML = strResult;
		
		
		}
		
		
function fibList(n){	
	
	var fibArray = new Array();
	fibArray[0] = "This value should not be seen.";
	
	for(var i = 1; i <= n; i++){
	
		fibArray[i] = fibLocator(i);
		
		//document.getElementById("txtAreaF").innerHTML = fibArray;
		
		
	}
	
	fibArray.shift();
	document.getElementById("txtAreaF").innerHTML = fibArray;


}

function fibLocator(n){
	//finds the fibonacci value of the given parameter (6th value in sequence for example)
	
	if(n == 1){
	
		return 0;
	
	} else if(n == 2 || n == 3){
	
	
		return 1;	
	
	} else {
	
		return fibLocator(n-1) + fibLocator(n-2);
	
	}
	

}

function fibQuickAns(n){	
	
	
	var testing = fibLocator(n); 
	
	alert("working so far: " +testing);
	
	

}	
		
		