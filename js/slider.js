let contents = [
    {
        img: 'url(img/fon.png)',
        title: 'Безопасность <br> — превыше всего',
        text: 'Конкурс направлен на поддержку молодежных инициатив и привлечение внимания широкой общественности к проблематике обеспечения безопасности на дорогах.'
    },
    {
        img: 'url(img/test2.jpg)',
        title: 'Заголовок 2',
        text: 'текст 2 какой-то'
    },
    {
        img: 'url(img/fon.png)',
        title: 'Заголовок 3',
        text: 'текст 3 другой'
    }
]

let img = document.querySelector('.slider_section');
let title = document.querySelector('.slider_section__title').children[0];
let text = document.querySelector('.slider_section__text').children[0];

console.log();

let number = 0;
let lenghtContents = contents.length - 1; 

function next() {

    if (number == lenghtContents) {
        number = 0;
    } else {
        number++;
    }

    title.innerHTML = contents[number].title;
    text.innerHTML = contents[number].text;
    img.style.backgroundImage = contents[number].img;
}

function prev() {

    if (number == 0) {
        number = 2;
    } else {
        number--;
    }

    title.innerHTML = contents[number].title;
    text.innerHTML = contents[number].text;
    img.style.backgroundImage = contents[number].img;
}
