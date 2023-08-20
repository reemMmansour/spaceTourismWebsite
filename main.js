let nav_links = document.querySelectorAll(`ul li a`);

nav_links.forEach((element) => {
    element.onclick = () => {
        nav_links.forEach((element) => {
            element.classList.remove('active');
        });
        element.classList.add('active');
        
    }
});

let _nav = document.querySelector(`.link-nav`);
let _icon_hamburger = document.querySelector(`.icon-hamburger`);
console.log(_icon_hamburger)
_icon_hamburger.onclick = () => {
    _nav.classList.add(`active-hamburger`);

};



