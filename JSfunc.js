function tripleFive() {
	for (var i = 0; i < 3; i++)
	      console.log('Five!');
}

function lastLetter(str){
     return str.charAt(str.length - 1);
}

function square(num){
     return num * num;
}

function negate(num){
     return -(num);
}

function toArray(num1, num2, num3){
	 var arr = [num1, num2, num3];
     return arr;
}

function startswithA(str){
	   if (str.charAt(0) === 'A' || str.charAt(0) === 'a')
           return true;
       else
       		return false;

}

function excite(str){
	 str = str + "!!!";
     return str;
}

function sun(str) {
	var s = str.indexOf('s');
	var ss = str.indexOf('S');
	var u = str.indexOf('u');
	var n = str.indexOf('n');
     if (((s == u - 1) && (s == n - 2 )) || ((ss == u - 1) && (ss == n - 2 )))
	 	return true;
	 else
	 	return false;
}



tripleFive();

console.log(lastLetter('Hello'));

console.log(square(4));

console.log(negate(-3));

console.log(toArray(1, 2, 4));

console.log(startswithA("apple"));

console.log(excite("Awesome"));

console.log(sun("Sunday"));


