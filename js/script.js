/*==================== icone sanduiche barra de navegação ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sessoes de link 
--NÃO FUNCIONOU!!! -- 
====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== barra de navegação ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remova o ícone e a barra de navegação ao clicar no link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== Os titulo descem ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contato form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p,  .sobre-content', { origin: 'right'});

/*==================== Movimentação de texto  ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Specialist Java Fullstack', 'DevOps', 'Tech Lead', 'Professor de TI'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== Email  ====================*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    /*==================== Aqui vc ira colocar o codigo de serviço de template do seu EmailJS e depois o nome do seu formulario e a chave da conta o EmailJS ====================*/
    emailjs.sendForm('service_kthommq','template_mwc5j8t','#contact-form','Y1kFAgyohoF9Ku7ua')
    .then(() =>{
        contactMessage.textContent = 'Sua mensagem foi enviada com sucesso! ✅'

        /*==================== Remover mensagem após cinco segundos  ====================*/
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        /*==================== Limpar campos escritos  ====================*/
        contactForm.reset()

    }, () =>{
        /*==================== Mostrando mensagem de erro  ====================*/
        contactMessage.textContent = 'Mensagem não enviada (erro de serviço) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*==================== Dark e Light Mode  ====================*/
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('light-mode')
})