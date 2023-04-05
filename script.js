var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","number");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-success");
button.style.marginLeft="5px";
button.style.marginBottom="7px";
button.innerHTML="search";
button.addEventListener("click",foo);

let line1=document.createElement("div");
line1.setAttribute("id","line1");

let line2=document.createElement("div");
line2.setAttribute("id","line2");

let tam_exp=document.createElement("div");
tam_exp.setAttribute("id","tam_exp");


div.append(input,button,line1,line2,tam_exp);
document.body.append(div);

async function foo(){
    let res=document.getElementById("number").value;
    console.log(res);
    try{
    let url= `https://api-thirukkural.vercel.app/api?num=${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    console.log(res2.Line1);
    line1.innerHTML=`Kural Number: ${res}=>${res2.line1}`;
    line1.style.fontWeight="bold";
    line1.style.color="darkblue"
    console.log(res2.Line2);
    line2.innerHTML=` ${res2.line2}`;
    line2.style.fontWeight="bold";
    line2.style.color="darkblue"
    console.log(res2.tam_exp);
    tam_exp.innerHTML=`Tamil explaination :${res2.tam_exp}`;
    tam_exp.style.fontWeight="bold";
    tam_exp.style.color="green";
}catch(error){
    console.log(error);
}
}
