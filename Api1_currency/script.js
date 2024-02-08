fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))
                   //passing json to the function

let select =document.querySelectorAll(".curr");
console.log(select);   //it give an array

function displayDropDown(res)
{
	let curr=Object.entries(res);     //json convert into array
      for (let i=0;i<curr.length;i++)
	{
		let opt =`<option value="${curr[i][0]}" >${curr[i][0]}</option>`;
		//console.log(`<option value="${curr[i][0]}" >${curr[i][0]}</option>`); 
		select[0].innerHTML+=opt;
		select[1].innerHTML+=opt;
	} 
}

let btn=document.getElementById("btn1");
let sel=document.querySelectorAll("sel");
let inp=document.getElementById("input");
btn.addEventListener("click",()=>{
  
if (select[0].value===select[1].value)
{
alert("choose diff opt!");
}
else
{
convert(select[0].value,select[1].value,inp.value);
}


}
);


function convert(c1,c2,val)
{

const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${val}&from=${c1}&to=${c2}`)
  .then(resp => resp.json())
  .then((data) => {
   console.log(Object.values(data.rates));
document.getElementById("result").value=Object.values(data.rates)[0];
  });
}