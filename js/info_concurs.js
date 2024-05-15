const titles = document.querySelectorAll('.info_title');

const content = {
    0: `<p><span class="bold_p">Конкурс действует до 1 августа 2024 года</span><br><br>
    <span class="bold_p">Итоги подводятся ежемесячно:</span><br>
    <span class="bold_p">5 числа</span> — при оформлении заявки с 23 по 30/31 число <br>
    <span class="bold_p">15 числа</span> — при оформлении заявки с 01 по 12 число<br>
    <span class="bold_p">25 числа</span> — при оформлении заявки с 13 по 22 число<br><br>
    <span class="bold_p">Принять участие могут:</span> дети от 3 лет, студенты, взрослые и творческие
    коллективы. Допускается самостоятельное участие или от образовательного учреждения.
  </p>`,
    1: `<p><span class="bold_p">Вам нужно подать заявку</span><br><br>
    <span class="bold_p">5 февраля</span> — последний день принятия заявок!<br>
  </p>`,
    2: "Текст для третьего заголовка...",
    3: "Текст для четвертого заголовка..."
};

titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        const activeTitle = document.querySelector('.info_title_blocks__active');
        if (activeTitle) {
            activeTitle.classList.remove('info_title_blocks__active');
        }
        title.classList.add('info_title_blocks__active');

        const infoContent = document.querySelector('.info_content_block');
        infoContent.innerHTML = `<p>${content[index]}</p>`;
    });
});
