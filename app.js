const chevronBtn = document.querySelectorAll('.chevron-btn');

chevronBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault()
        btn.parentElement.parentElement.children[1].classList.toggle('active')
        btn.classList.toggle('active')
 
    });
})
const navLink = document.querySelectorAll('.nav-link')
const navbar = document.querySelector('.navbar')


navLink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        var id = link.children[0].href.split('#')[1]
        var expandItem = document.querySelector(`#${id}`)

        window.scrollBy(0, expandItem.getBoundingClientRect().top - navbar.getBoundingClientRect().height)




        setTimeout(function(){
            expandItem.children[1].classList.add('active')
            expandItem.children[0].children[1].classList.add('active')
        }, 400)
        
    })
})



const logoBtn = document.querySelector('.logo')

logoBtn.addEventListener('click', function(e){
    e.preventDefault()

    document.body.classList.toggle('white')

})

const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click', function(e){
    e.preventDefault()

    hamburgerMenu.classList.toggle('active')
    document.body.children[1].classList.toggle('active')
    if(document.body.children[1].classList.contains('active')){
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})

    var tl = gsap.timeline()
    .to('.layer-logo', {opacity: 1}, "+=0.5")
      .to('.layer-1', {y: '-100vh', duration: 0.7, ease: 'expo.in'}, "+=0.3")
      .to('.layer', {borderRight: "1px solid rgba(255, 255, 255, 0.05)"}, "-=0.7")
      .to('.layer-3', {y: '-100vh', duration: 0.7, ease: 'expo.in'}, "-=0.6")
      .to('.layer-2', {y: '-100vh', duration: 0.7, ease: 'expo.in'}, "-=0.6")
      .to('.layer-4', {y: '-100vh', duration: 0.7, ease: 'expo.in'}, "-=0.6")
      .to('.layer-logo', {y: '-100vh', duration: 0.7, ease: 'expo.in'}, '-=1')
      .from('.title-1 p', {y: '100%', duration: 0.5})
      .from('.title-2 p', {y: '100%', duration: 0.5}, "-=0.4")
      .from('.homePage-img .first', {y: '110%', duration: 1, ease: 'power3.out'}, '-=0.4')
      .from('.homePage-img .second', {y: '110%', duration: 1, ease: 'power3.out'}, "-=1")
      .from('.circle-link', {x: '-50%', opacity: '0', duration: 1, ease: 'power3.out'}, '-=1')
      .from('.arrow', {x: '-20%', opacity: '0'}, '-=0.8')

    tl.eventCallback("onComplete", function(){
        document.body.classList.remove('overflow-hidden')
        document.body.children[2].style.display = 'none'

    })

    tl.eventCallback("onStart", function(){
        window.scroll(0, 0)
    })

    gsap.registerPlugin(ScrollTrigger)

    gsap.from('#architecture', 
    {   scrollTrigger: {
            trigger: '#architecture',
            start: 'top bottom',
            toggleActions: 'restart none none reset' ,
        },
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('#interiors', 
    {   scrollTrigger: {
            trigger: '#interiors',
            start: 'top bottom',
            toggleActions: 'restart none none reset' ,
        },
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('#furniture', 
    {   scrollTrigger: {
            trigger: '#furniture',
            start: 'top bottom',
            toggleActions: 'restart none none reset',
        },
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('.section-title', 
    {   scrollTrigger: {
            trigger: '.section-title',
            toggleActions: 'restart none none reset',
        },
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from('.getInTouch-page .references', 
    {   scrollTrigger: {
            trigger: '.section-title',
            start: 'bottom bottom',
            toggleActions: 'restart none none reset',
        },
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })





    

