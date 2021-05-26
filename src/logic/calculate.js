function calculate (calculatorObject,buttonName){
let {total,next,operation} =calculatorObject
if(buttonName==='AC'){
    total = ''
    next = ''
    operation = ''
}
else if(buttonName==='+/-'){
    total=next*total*-1
}
else if(buttonName==='+'||
        buttonName==='-'||
        buttonName==='/'||
        buttonName==='*'||
        buttonName==='%'
        ){
       operation= !total ? buttonName : null
        }
        return {total,next,operation}
}

export default calculate