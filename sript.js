function check() {
    var c=0
var q1=document.test1.question1.value;
var q2=document.test1.question2.value;
var q3=document.test1.question3.value;
var q4=document.test1.question4.value;
var q5=document.test1.question5.value;
var result=document.getElementById("result");
if  (q1=="script") {c++}
if (q2=="script") {c++}
if (q3=="let") {c++}
if (q4=="for loop") {c++}
if (q5=="if not") {c++}
    test1.style.display= "none";
    
     if (c==1) {
         result.textContent="your score is 20%.lets do it again!!"
     }
    else if (c==2) {
        result.textContent= "good."
    } else if (c==3) {
        result.textContent=" nice work."
    }
      else if (c==4) {
          result.textContent="great."
      }
       else if (c==5){
           result.textContent="excellent!!!"
       }
     

} 