let sections = document.getElementsByClassName("section");
let ratingBtn = document.querySelectorAll("button");
let submitBtn = document.querySelector("input");
let note;
let rateNote;
submitBtn.addEventListener("click", submit);
//LOOP FOR QUE ADICIONA A CADA BOTÃO A FUNÇÃO Rate()
for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", Rate);
}
function Rate(num){
    let nota = num.target.value;
    if(nota){
        rateNote = `Sua avaliação foi ${nota} de 5`;
        note=nota;
        num.target.style.backgroundColor="#979797";
        num.target.style.color="#fff";
        console.log(rateNote);
    }
}
function submit(){ 
    // DECLARAÇÃO/ATRIBUIÇÃO DOS ELEMENTOS DO DOM
    let img = document.querySelector("img");
    let h1 = document.querySelector("h1");
    let paragraph = document.querySelector("p");
    let btn = document.querySelector("input");
    //CRIAÇÃO DA ÁREA QUE EXIBE A NOTA DADA
    let rateView = document.createElement("p");
    sections[0].appendChild(rateView);
    rateView.innerHTML=`You selected ${note} of 5`;
    img.src="../images/illustration-thank-you.svg";
    //ESTILIZAÇÕES
    img.style.backgroundColor="#100f13";
    sections[0].style.justifyContent="center";
    sections[0].style.flexDirection="column";
    sections[0].style.gap="2em";
    h1.innerHTML="Thank you!";
    rateView.style.color="rgb(255, 150, 31)";
    rateView.style.padding="5px 20px";
    rateView.style.borderRadius="50px";
    rateView.style.backgroundColor="#18171d";
    sections[1].style.textAlign="center";
    paragraph.innerHTML="We apreciate you taking the time to give a rating! if you ever need more support, don't hesitate to get in touch!";
    paragraph.style.color="rgb(116, 117, 140)";
    //REMOÇÃO DE ITENS NÃO MAIS NECESSÁRIOS
    sections[2].remove();
    btn.remove();
}