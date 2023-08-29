function convertir(){
    var bolivianos = 6.96; 
    var res;   
    var dolar = parseInt(document.getElementById('dolares').value);
     
    res = (dolar*bolivianos).toFixed(2);
    document.getElementById('resultado').innerHTML= res+" Bs.";
    // document.getElementById('dolares').value= "";
    
}