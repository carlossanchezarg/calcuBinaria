var ecuation="";

function mostrar(){
    document.getElementById("res").innerHTML = ecuation;
}

function display(d){
      ecuation=ecuation+d;
      mostrar();
}

function ejecutar(o){
    if(o=="="){
        ecuation=resolve(ecuation);
    }else{
        ecuation="";
    }
    mostrar();
}

function oper(o){
    if(!ecuation==""){
        ecuation=ecuation+o;
    }
    mostrar();
}

function resolve(textEc){
    let s= textEc.split(/[+-\/*]/);
    console.log(textEc.split(/[+-\/*]/));
    let b1 = parseInt(s[0], 2);
    let b2 = parseInt(s[1], 2);
    if(/[+]/.test(textEc)){     
        textEc=(Number(b1.toString(10))+Number(b2.toString(10))).toString(2);
    }else if(/[-]/.test(textEc)){
      textEc=(Number(b1.toString(10))-Number(b2.toString(10))).toString(2);
    }else if(/[\/]/.test(textEc)){
      textEc=(Number(b1.toString(10))/Number(b2.toString(10))).toString(2);
    } else if(/[*]/.test(textEc)){
      textEc=(Number(b1.toString(10))*Number(b2.toString(10))).toString(2);
    }
    return textEc;
    
}
