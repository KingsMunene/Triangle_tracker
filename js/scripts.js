function triangleType(){
var side1 = (document.getElementById("sidea").value);
var side2 = (document.getElementById("sideb").value);
var side3 = (document.getElementById("sidec").value);
var dg = (document.getElementsByClassName("DG").value);
if(side1==side2 && side2==side3){
		alert("equilateral")
  }
else if(side1==side2 || side2 ==side3 || side1==side3){
		alert("isosceles")
		}
else	if((side1 + side2) <= side3 && (side1 + side3) <= side2 || (side2 + side3) <= side1){
    alert("Not a definite triangle")
		}
else{
     alert("This is a scalene triangle");
		 }
};
