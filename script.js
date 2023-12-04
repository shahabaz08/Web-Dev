const navItems=document.querySelector(".navbar-collapse");


console.log(navItems);


navItems.addEventListener('click',changeC);


function changeC(){
    navItems.style.color="#ff8033";
}