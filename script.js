window.onload=()=>{
    document.getElementById("btn").addEventListener("click",calculateBmi)
}
 function calculateBmi(){
   let height= document.getElementById("height").value
   let weight = document.getElementById("weight").value
   let result= document.getElementById("result")
   
   if(!height|| isNaN(height)||height<0){
   result.innerText=" Enter Values of Height First"
   return
   }else if(!weight|| isNaN(weight)||weight<0){
    result.innerText=" Enter Values of Weight First"
    return
    }
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.5){
        result.innerText=`UnderWeight: ${bmi}`
    } else if((bmi>18.5)&& (bmi<24.9)){
        result.innerText=`Normal: ${bmi}`
    }else if((bmi>25)&& (bmi<29.9)){
        result.innerText=`OverWeight: ${bmi}`
    }else if((bmi>30)&& (bmi<34.9)){
        result.innerText=`Obesity (class I): ${bmi}`
    }else if((bmi>35)&& (bmi<39.9)){
        result.innerText=`Obesity (class II): ${bmi}`
    }else{
        result.innerText=`Extreme Obesity ${bmi}`
    }

 }
