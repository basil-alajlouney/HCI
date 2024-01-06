let goto = (endpoint:string)=>{
  let currentEndpoint = location.href.split("/").at(-1)!;
  location.href = location.href.replace(currentEndpoint,endpoint);
  console.log(currentEndpoint);
  console.log("Hola Mundo");
  setTimeout(() => {
    console.log(location.href);
  }, 5000);
}

export{
  goto
}