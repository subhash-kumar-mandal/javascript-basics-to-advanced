// --> control flow bata hai kon sa cod chalna chahiye 

// --> if condition true hone par es part ko chaloo 
// NOTE haam if ko akele bhi likh sakte hai 
// yadi if condition false hoti hai to else vola part chaloo 
// mtlab yadi  ye nhi (if) to ye (else)



// if (condition) {
//     true par ye part run 
// } else {
//      false hone par part run
// }


if(true){
    console.log("hello run him");
    }else{
        console.log("hello");
        
    }

if(false){
    console.log("not run this part")
}else{
    console.log("HELLO JS")
}

// --->  else if haam jab use karte hai jab ek sath bot saai condition dekhi padhti hai ;
let number =60;
if(number>90){
    console.log("90 se bada hai");
    
}else if(number> 50){
    console.log("bada hai 50 "); // ye part run hua but yadi koi condition true hoti hai aage code run nhi hota hai
    
}else{
    console.log("chota hai 50 se bhi");
    
}



// switch case 
// switch (key) {  key mein jo value hoti hai vo hi case se match hoti hai run hoti hai
//     case value:   yaha case likhte jo match hote hi run hoti hai
        
//         break; ye esliye use karte ye part true hote hi ye run ho or code yahi par ruk jye

//     default:  ye bass else ki tara jab kuch bhi true nhi milta to last mein ye hi chalta  hai 
//         break;
// }

let num  = 7;
switch(true){
    case( num>10):
    console.log("yes bada hai");
    break;
    case(num%2==0):
    console.log("0 ata hai");
    break;
    default:
        console.log("koi true nhi mila");
        break ;
}


// ----> ternary operator

//  condition ? expressionIfTrue : expressionIfFalse;


let check = (2>0)?"yes":"no";
console.log(check)