// //------XMLHttpRequest() // antes se hacia asi
// // Definimos la URL que vamos a solicitar via Ajax
// var ajax_url = "http://mysite.com/json/data.json";
// // Definimos los parámetros que vamos a enviar
// var params = "parametro=valor&otro_parametro=otro_valor";
// // Añadimos los parámetros a la URL
// ajax_url += '?' + params;
// // Creamos un nuevo objeto encargado de la comunicación
// var ajax_request = new XMLHttpRequest();
// // Definimos como queremos realizar la comunicación
// ajax_request.open( "GET", ajax_url, true );
// //Enviamos la solicitud
// ajax_request.send();

//con las llaves se debe de poner return
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json()})
  .then((data) => {
    console.log(data);
  });
///Se puede asi tambien

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
