let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    setTimeout(()=> {
        mask.remove();
    }, 600)
})

let select__active = document.querySelectorAll('.select__active');
let select__no_active = document.querySelectorAll('.select__no-active');

let actions__exchange = document.querySelectorAll('.exchange__item');

actions__exchange.forEach((e) => {
    let select__active = e.querySelector('.select__active');
    let select__no_active = e.querySelector('.select__no-active');
    let icon = select__active.querySelector('svg');
    select__active.addEventListener('click', () => {
        select__no_active.classList.toggle('dn');
        icon.classList.toggle('active-icon')
    })
})

/*Road map*/;
let road_map = document.querySelector('.roadmap__box');
let box__items = road_map.querySelectorAll('.box__item');
let box__active_description = document.querySelector('.box__active-description');
let actives = road_map.querySelectorAll('.active');
let active__array = actives;
let box_description = document.querySelectorAll('.box__active-description');
let box__active_array = [];
let box__active = null;
let currentActive = null;   
box__items.forEach((e) => {
    let item = document.querySelectorAll(`.${e.classList[1]}`);
    e.addEventListener('click', () => {
        setTimeout(() => {
            this_active = road_map.querySelectorAll('.active');
            if(this_active.length > 2) {
               this_active[0].classList.remove('active');
               this_active[2].classList.remove('active');
            }
        }, 10)
        actives.forEach((e) => {
            e.classList.remove('active');
        })
        if(currentActive != null) {
            currentActive.classList.toggle('active');
        }
        if(box__active != null){
            box__active.classList.toggle('active');
        }
        let box = item[1];
        
        box.classList.toggle('active');
        box.classList.toggle('dn');
        e.classList.toggle('active');
        box__active = box;
        currentActive = e;
    })
})

/*Roadmap mobile*/
let road_map_mobile_select = document.querySelectorAll('.roadmap-mobile__select');

road_map_mobile_select.forEach((e) => {
    let select = e.querySelector('.select__active');
    let select_description = e.querySelector('.select__info');
    let select_icon = select.querySelector('svg');
    select.addEventListener('click', () => {
        select_description.classList.toggle('dn');
        select_icon.classList.toggle('active-icon');
    })
})  
