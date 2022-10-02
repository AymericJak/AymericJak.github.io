const tabs = document.querySelectorAll(".tab-button")
const contents = document.querySelectorAll('.tab-content')
let numTabAct = 1;
let numTabPrec = -1;

console.log(numTabAct)

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active-tab')){
            return;
        }
        else {
            numTabPrec = numTabAct;
            tab.classList.add('active-tab');

            tabs[numTabPrec-1].classList.remove('active-tab');
            contents[numTabPrec-1].classList.remove('active-content');
        }

        numTabAct = tab.getAttribute('data-content');
        console.log(numTabAct);
        contents[numTabAct-1].classList.add('active-content');


    })
})