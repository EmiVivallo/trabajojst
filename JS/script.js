function validar(){
    var form = document.form;
    if (form.nombre. value==0){
        alert("Este espacio se encuentra vacio");
        form.nombre.value="";
        form.nombre.focus();
    return false;
    }
    if(form.apellido. value==0){
     alert ("El espacio de apellido se encuentra vacio");
     form.apellido.value="";
     form.apellido.focus();
     return false;
    }
    if(form.calculo. value== 28){
     alert ("El calculo esta bien");
     form.calculo.value="";
     form.calculo.focus();
     
    }else{
     return false
    }
 }