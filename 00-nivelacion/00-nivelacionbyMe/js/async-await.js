//Ejemplode funcion async No puede haber un await sin async pero si async sin await
const peticion= async() => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   const data = await response.json();
   console.log(data);
   return data;
};

const data = peticion().then(console.log);
console.log('data',data);



// //El async espera que se ejecute la funcion
// const peticion = async () => {
//     setTimeout(() => {
//         const datos = {
//             id: 3,
//             name: "Clementine Bauch",
//             username: "Samantha",
//             email: "Nathan@yesenia.net",
//         };
//         console.log(datos);
//     },5000);
// }
// peticion().then(console.log);

// //El asinc vuelve promesa cualquier funcion
// const saludo = async() => {
//     return "Hola mundo"
// };
// saludo().then((response) => console.log(response));


// //Asi se realiza una promesa
// const saludo = () => {
//     return new Promise((resolve)=>{
//         resolve("Hola mundo");
//     });
// };
// saludo().then((response) => console.log(response));




// const peticion = async () => {
//     setTimeout(() => {
//       const datos = {
//         id: 3,
//         name: "Clementine Bauch",
//         username: "Samantha",
//         email: "Nathan@yesenia.net",
//       };
  
//       console.log(datos);
//     }, 1000);
//   };
  
//   peticion().then(console.log);
  