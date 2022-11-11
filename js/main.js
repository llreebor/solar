// Menu Burger
function toggleMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            slideToggle(menu, 300)
            burger.classList.add('active')
        } else {
            menu.classList.remove('active')
            slideToggle(menu, 300)
            burger.classList.remove('active')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
// toggleMenu()

// Slider
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
})
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.style.border = 'none'

    window.setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.style.removeProperty('border')
    }, duration)
}

/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display
    if (display === 'none') display = 'flex'
    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.border = 'none'

    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('border')

    window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.style.removeProperty('border')
    }, duration)
}

/* TOOGLE */
const slideToggle = (target, duration = 300) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration)
    } else {
        return slideUp(target, duration)
    }
}

// Tabs
function tabs(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = 'flex',
) {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = 'none'
        })
        tab.forEach((item) => {
            item.classList.remove(activeClass)
        })
    }
    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', (e) => {
        const target = e.target
        if (
            target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')

// Fullpage
new fullpage('.fullpage', {
    navigation: true,
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'],
    parallax: true,
    scrollBar: true,
    menu: '#menu',
})

// Animations
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl.fromTo(
    '.hero__title',
    {
        y: 50,
        opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 },
    0.4,
)
    .fromTo(
        '.hero__text',
        {
            y: 50,
            opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 },
        0.7,
    )
    .fromTo(
        '.hero__btn',
        {
            y: -10,
            opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 },
        2,
    )
    .fromTo(
        'header',
        {
            yPercent: -100,
        },
        { yPercent: 0, duration: 1 },
        1.4,
    )
    .fromTo(
        '.circle__small',
        {
            opacity: 0,
        },
        { opacity: 1, duration: 3 },
        1.4,
    )
