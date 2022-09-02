// if ("serviceWorker" in navigator) { //--otra forma de hacer el if
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js");
  // console.log("serviceWorker si existe");
}

// if (navigator.serviceWorker) {
//   navigator.serviceWorker.register("./sw.js");
// }
