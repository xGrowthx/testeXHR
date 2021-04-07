var xhr = new XMLHttpRequest();
var documento = {
        "idade": 16,
        "cidade": "Cafelandia"
    }

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
        console.log(xhr.response);
        alert("Operação concluída");
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhr.send(documento);
