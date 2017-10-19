
//this function, sleep_in, says whether or not you will sleep in based on if it is a weekday or vacation
function sleep_In(weekday, vacation) {
    if (weekday == true && vacation == true){
        return true;
    } else {
        if (weekday == true && vacation == false){
            return false;
        } else {
            if(weekday == false && vacation == true){
                return true;
            } else {
                if(weekday == false && vacation == false){
                    return true;
                }
            }
        }
    }
}

// this function, monkey_trouble, says whether each monkey is smiling
function monkey_trouble(a_smile, b_smile) {
    if (a_smile == true && b_smile == true || a_smile == false && b_smile == false){
        return (true);
    } else {
        return false;
    }
}

// this function, string_times, returns a string a number of times
function string_times (string, num) {
    if (num == 0) {
        return false;
    } else {
        var output = string;
        for (var i = 1; i < num; i++) {
            output += string;
        }
    }
    return output;
}

// this function, front_times, prints the first 3 characters of a string
function front_times (string, int){
    var output = string.substring(0,3);
    var outputTwo = string.substring(0,3);
    if (int == 0){
        return false;
    } else {
        for (var i = 1; i < int; i ++){
            output+=outputTwo;
        }
    }
    return output;
}

// this function, string_bits, returns every other letter of a given string
function string_bits (string){
var str = string;
var num = str.length;
var bit = "";
for (var i = 0; i < num; i += 2){
    bit += str.charAt (i);
}
return bit;
}

// this function, caught_speeding, tells you whether you got a small, large, or no speeding ticket
function caughtSpeeding (speed, birthday){
    if (speed <= 60 && birthday == false|| speed <= 65 && birthday == true ){
        return "0";
    } else {
        if (60 < speed && speed <= 80 || 65 < speed && speed <= 85 && birthday == true) {
            return "1";
        } else {
            if (81 <= speed){
                return "2";
            }
        }
    }
}

// this function, fizzBuzz, returns integers with an ! after them unless they are divisible by 3 or 5
function fizzBuzz (int) {
    if (int % 5 == 0 && int % 3 == 0) {
        return "FizzBuzz!";
    } else {
        if (int % 3 == 0) {
            return "Fizz!";
        } else {
            if (int % 5 == 0){
                return "Buzz!";
            }
        }
    }
    if (int % 5 != 0 && int % 3 != 0){
        return int + "!";
    }
}

// the function teaParty tells us whether a part was good depending on the amounts of tea and candy
function teaParty (tea, candy){
    if (tea < 5 || candy < 5) {
        return "0";
    }
    if (tea >= candy * 2 || candy >= tea * 2) {
        return "2";
    }
    if (candy >= 5 && tea >= 5) {
        return "1";
    }
}


// this function blackJack returns the value closest to 21
function blackJack (numOne, numTwo) {
    if (numOne > 21 && numTwo > 21) {
        return "0";
    } else {
        if (numOne > 21 || numTwo <= 21 && numTwo > numOne) {
            return numTwo;
        } else {
            if (numTwo > 21 || numOne > numTwo) {
                return numOne;
            }
        }
    }
}

// this function, loneSum, returns the sum of three integers if they are not equal to each other
function loneSum (a, b, c){
    var sum = a + b + c
    if (a == c && a == b && c == b){
        return "0";
    }
    if (a==b){
            return c;
    }
    if (a==c){
        return b;
    }
    if (b==c){
        return a;
    }
    return sum;
}



function tester() {
    document.getElementById("output1").innerHTML = sleep_In(true, false);
    document.getElementById("output2").innerHTML = sleep_In(true, true);
    document.getElementById("output3").innerHTML = monkey_trouble(true, true);
    document.getElementById("output4").innerHTML = monkey_trouble(false, true);
    document.getElementById("output5").innerHTML = monkey_trouble(false, true);
    document.getElementById("output6").innerHTML = string_times("gang gang ", 345);
    document.getElementById("output7").innerHTML = front_times("bro", 15);
    document.getElementById("output8").innerHTML = string_bits("leah");
    document.getElementById("output9").innerHTML = caughtSpeeding(80, true);
    document.getElementById("output10").innerHTML = fizzBuzz(32);
    document.getElementById("output11").innerHTML = teaParty(60, 2348);
    document.getElementById("output12").innerHTML = blackJack(2, 6);
    document.getElementById("output13").innerHTML = loneSum(2,4,6);
}