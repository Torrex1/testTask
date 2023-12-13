const achieveType = document.querySelector('#achieve');
const sectionAcademic = document.querySelector('.generated-elements');
const sectionStartup = document.querySelector('.startup-fields');


if (achieveType.value === 'nothing') {
    sectionAcademic.style.display = "none"
    sectionStartup.style.display = "none"
}

achieveType.addEventListener('change', () => {
     if (achieveType.value === 'academic-mobility') {
        sectionAcademic.style.display = ""
        sectionStartup.style.display = "none"
    } else if (achieveType.value === 'startup') {
        sectionAcademic.style.display = "none"
        sectionStartup.style.display = ""
    }
})


// код для работы модального окна
const btn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
});

modalOverlay.addEventListener('click', (e) => {

    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});


document.querySelector('.modal-btn').firstChild.addEventListener('click', () => {
    modalOverlay.classList.remove('modal-overlay--visible');
})