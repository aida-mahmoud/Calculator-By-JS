var mynum=document.getElementById("mynum");
var mynumbers=Array.from( document.querySelectorAll(".num"));

var sec_num="";
var sum =document.getElementById("sum");

        mynumbers.forEach((num)=>{
        num.addEventListener("click",()=>{
           // console.log(num.textContent);
        if(mynum.value==0){mynum.value="";}
        if(num.textContent=="="){
           var out= eval(mynum.value);
           //console.log("the out ="+out);
           mynum.value =out;
        }
        else if(num.textContent=="C"){
            mynum.value="0";
        }
        else if(num.textContent=="del"){
            var arr=Array.from( mynum.value);
            arr.pop();
            console.log(arr);
            mynum.value=arr.toString().replace(/,/g, '');
                }
        else if(num.textContent=="off"){
            console.log("aida");
            document.getElementById("off").textContent="on";
           
        }
        else if(num.textContent=="on"){
            document.getElementById("off").textContent="off";
            mynum.value="0";
        }
        else{
             mynum.value +=num.textContent;
        }
           
        })
    })
    

    
    
    /*var fir_num=mynum.value;//5
    sum.addEventListener(("click"),()=>{
        mynum.value="";
        
       // creatnum();
        sec_num+=mynum.value;
        console.log(sec_num);
    })*/
   