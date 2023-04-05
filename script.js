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
button.addEventListener("click",getdata);

let line1=document.createElement("div");
line1.setAttribute("id","line1");

let line2=document.createElement("div");
line2.setAttribute("id","line2");

let tam_exp=document.createElement("div");
tam_exp.setAttribute("id","tam_exp");


div.append(input,button,line1,line2,tam_exp);
document.body.append(div);

async function getdata(){
    let res=document.getElementById("number").value;
    console.log(res);
    try{
    //let url= 'https://api-thirukkural.vercel.app/api?num=x'${res};
    let res1=await fetch( 'https://jsonplaceholder.typicode.com/users');
    let res2=await res1.json();
    let index=res2.length-1;
    console.log(res2[index]);
    console.log(res2[index].Line1);
    line1.innerHTML=`Line1 :${res2[index].Line1}`;
    console.log(res2[index].Line2);
    line2.innerHTML=`Line2 :${res2[index].Line2}`;
    console.log(res2[index].tam_exp);
    tam_exp.innerHTML=`Tamil explaination :${res2[index].tam_exp}`;
}catch(error){
    console.log(error);
}
}
