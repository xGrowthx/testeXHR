var xhr = new XMLHttpRequest();
var documento;

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response;
        documento = JSON.parse(documento);
        console.log(documento);
        alert("Operação concluída")
    }
}

xhr.open("GET","json.json");

xhr.send();
