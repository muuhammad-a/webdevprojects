let accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordionItem =>{
    let title = accordionItem.querySelector('h3');
    let content = accordionItem.querySelector('p');
    let arrow = accordionItem.querySelector('i');

    title.addEventListener('click', function(){
        content.classList.toggle('active');
        arrow.classList.toggle('active-arrow');
    })
})