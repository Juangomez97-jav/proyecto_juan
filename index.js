const inicio =
document.getElementById("abrir");
const btnca =
document.getElementById("btnca");
const modal =
document.getElementById("modal");

inicio.addEventListener("click",()=>{
    modal.showModal();
})

btnca.addEventListener("click",()=>{
    modal.close();
});