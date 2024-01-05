var formulaire2=document.querySelector(".formulaire2");

formulaire2.onsubmit=(e)=>{
  e.preventDefault();
  console.log(formulaire2.montant.value);

  
  openKkiapayWidget({amount:formulaire2.montant.value,position:"right",callback:"/success",
  data:"Don à l'ONG",
  theme:"#092374",
  sandbox:"true",
  key:"78b8acc02f9711ee956c0531e8fd6ff2"})

}