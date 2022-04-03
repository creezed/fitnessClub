const header = document.querySelector('header');
const crossModal = document.querySelector('.modal-widget__cross');
const modal = document.querySelector('.modal');
const trainerCard = document.querySelectorAll('.trainer-card');
const getAllyakor = document.querySelectorAll('.yakor');
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        window.pageYOffset > 150 ? header.classList.add('header--active') : header.classList.remove('header--active')
    })
    crossModal.addEventListener('click', () => {
        if (modal.classList.contains('modal--anim')) {
            modal.classList.remove('modal--anim')
        }
        setTimeout(() => {
            modal.classList.remove('modal--open')
        },100)
    })

    trainerCard.forEach( (item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal--open')
            setTimeout(() => {
                modal.classList.add('modal--anim')
            },100)
        })
    })

    getAllyakor.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const topOffset = header.offsetHeight + 10;
            const href = this.getAttribute('href').substring(1)
            const scrollTarget = document.getElementById(href);
            const elemetPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elemetPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            })
        })
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navbar.classList.toggle('navbar--active');
    })
})