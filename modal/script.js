const achieveType = document.querySelector('#achieve');
const sectionAcademic = document.querySelector('.generated-elements');
const sectionStartup = document.querySelector('.startup-fields');


// if (achieveType.value === 'nothing') {
//     sectionAcademic.style.display = "none"
//     sectionStartup.style.display = "none"
// }
//
// achieveType.addEventListener('change', () => {
//      if (achieveType.value === 'academic-mobility') {
//         sectionAcademic.style.display = ""
//         sectionStartup.style.display = "none"
//     } else if (achieveType.value === 'startup') {
//         sectionAcademic.style.display = "none"
//         sectionStartup.style.display = ""
//     }
// })
//


// const modal = document.querySelector('.modal');
// const modalHeader = document.querySelector('.modal-header');
// const modalBody = document.querySelector('.modal-body');

const btns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});