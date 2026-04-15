
// question  1 Stock span 
//  [100,80,60,70,75,85]

//  aaj tak kitne Continouous days tak price chota ya barabar tha current ;
//  haam ko span chahiye to es baar element se saam nhi chalega haam ko index chahiye 
//  es baar haam stack mein index store karege jo kaam 


function Stock_Span(array) {
    const result = []
    const stack = [];

    for (let i = 0; i < array.length; i++) {


        while (stack.length > 0 && array[i] >= array[stack.at(-1)]) {
            stack.pop();
        };

        if (stack.length === 0) {
            result[i] =i+ 1;
        } else {
            result[i] = i - stack.at(-1)
        }

        stack.push(i);
    };
    return result;
}

console.log(Stock_Span([100,80,60,70,60,75,85]));


//  question 2 kitne din baar current  temperature bada  mila btaoo

function Temperature(array){
    const result = [];
    const stack  =[];

    for(let i=array.length-1;i>=0;i--){

        while(stack.length>0 &&  array[stack.at(-1) ]<array[i] ){
            stack.pop();
        };


        if(stack.length===0){
            result[i] =0;
        }else{
            result[i] = stack.at(-1) - i
        };
    
        stack.push(i)

     
    };
    return result ;
};


console.log(Temperature([73,74,75,71,69,72,76,75]))
