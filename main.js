let cards = document.getElementsByClassName('work-card');
for(let i =0;i<cards.length;i++){
    let title = cards[i].children[1];
    cards[i].children[0].addEventListener('mouseenter',function(e){
        console.log('hello');
        title.classList.toggle("togle-title");
    })
    cards[i].children[0].addEventListener('mouseleave',function(e){
        console.log('hello');
        title.classList.toggle("togle-title");
    })
}