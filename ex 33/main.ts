// Creating a Array

// using For-loop
let number = [1,2,3,4,5,6,7,8,9,10];

for( let oneNumber of number){
    let ordinalEnding: string;
    
    if(oneNumber === 1){
        ordinalEnding = "st"

    }else if(oneNumber === 2){
        ordinalEnding = "nd"
    }
    else if(oneNumber === 3){
        ordinalEnding = "rd"
    }
    else {
        ordinalEnding = "th"
    } 
    console.log(`${oneNumber}${ordinalEnding}`);
}



