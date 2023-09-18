let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",temp);
}

function temp(){
    console.log("he");
    let t1=document.querySelector("input").value;
    
    let t2=document.querySelector(".inn");

    let s1=document.querySelector('.in2');

    let v1=Number(t1);
    if(this.id=="red"){
        let newt = (v1*(9/5))+32;

        s1.innerHTML=newt+"<sup> <sup>o</sup> </sup>"+" F";
    }
    if(this.id=="yel"){
        let newt = (100-v1)*3/2;

        s1.innerHTML=newt+"<sup> <sup>o</sup> </sup>"+" De";
    }
    if(this.id=="gre"){
        let newt = (v1*9/5) + 491;
        s1.innerHTML=newt+"<sup> <sup>o</sup> </sup>"+" R";

    }
    if(this.id=="blu"){
        let newt = v1+273;

        s1.innerHTML=newt+"<sup> <sup>o</sup> </sup>"+" K";
    }
    
    if(this.id=="res"){

        s1.innerHTML="Answer";
        t2.value="";
    }
}