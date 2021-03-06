var navtag = document.getElementsByTagName("nav")[0];
var nav_height = navtag.offsetHeight;
console.log(nav_height);

function change_display(elements, dot) {
    var ele_length = elements.length;
    for (var i = 0; i <= ele_length; i++) {
        let next = (i + 1) % ele_length;
        if (elements[i].classList.contains("display_block")) {
            elements[i].classList.remove("display_block");
            elements[i].classList.add("display_none");
            elements[next].classList.add("display_block");
            dot[i].classList.remove("active");
            dot[next].classList.add("active");
            break;
        }

    }
}

function navbartransition() {
    var x = document.getElementsByClassName("nav-slider-item");
    var y = document.getElementsByClassName("owl-dots")[0];
    var owldot_template = '<button class="owl-dot"><span></span></button>'
    for (var i = 0; i < x.length; i++) {
        y.innerHTML += owldot_template;
    }
    var dot = document.getElementsByClassName("owl-dot");
    setInterval(function () {
        change_display(x, dot);
    }, 3000);
}

window.onscroll = function () {
    var scroll = window.scrollY;
    if (parseInt(scroll) > parseInt(nav_height)) {
        navtag.classList.add("scrolled");
        navtag.classList.add("awake");
    } else {
        try {
            navtag.classList.remove("scrolled");
        }
        catch (err) { }
    }
}

navbartransition();