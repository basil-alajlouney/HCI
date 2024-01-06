let goto = (endpoint:string)=>{
  let currentEndpoint = location.href.split("/").at(-1)!;
  location.href = location.href.replace(currentEndpoint,endpoint);
}

export{
  goto
}