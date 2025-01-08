

let agee=()=>{

    let age=document.querySelector("#aga").value   // link input tag
    let tim= new Date();
    let result= tim.getFullYear()-age;
    let show=document.querySelector("#show")   // link p tag
    show.innerHTML=result


 }