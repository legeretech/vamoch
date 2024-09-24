function changeTab(event, tabName) {
    var tabLinks = document.getElementsByClassName("tabs-image-tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");

    var sliders = document.getElementsByClassName("tabs-image-slider-container");
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove("active");
    }

    var selectedSlider = document.getElementById(tabName);
    selectedSlider.classList.add("active");
}

function enableDrag(slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; 
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
}

document.querySelectorAll('.tabs-image-slider').forEach(enableDrag);
