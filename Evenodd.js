function EvenOdd()
{
		this.calculate=function()
		{
			var x=document.getElementById("in");
			var y=document.getElementById("out");
			//-------------------
			if(  parseInt(x.value)  % 2 == 0) y.value="EVEN";
			else y.value="ODD";
			//-------------------
		}
		this.isInteger=function(id)
		{
    		var flag=true;
    		var x=document.getElementById(id);
    		if (x.value==null || x.value=="") 	{ alert("Integer Field Empty");flag=false;}
    		else if (x.value==" ") 				{ alert("Space is not Valid"); flag=false;}
    		else if (isNaN(x.value)) 			{ alert("Value Not A Number"); flag=false;}
    		else if ((parseFloat(x.value))%1 !=0 ) { alert("Value Is Not An Integer");flag=false;}
    		return flag;    	
		}	
}
var x=new EvenOdd();
function init()
{
   var b1=document.getElementById("calc");
   b1.addEventListener("click",function (){if (x.isInteger('in')) x.calculate();},false);
   var text1=document.getElementById("in");
   text1.addEventListener("focus",function(){document.getElementById('in').value='';},false);
}
window.addEventListener("load",init,false);