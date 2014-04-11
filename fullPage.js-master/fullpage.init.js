function fullpage_init() {
    $.fn.fullpage({
        slidesColor: ['#000', '#000'],
        anchors: ['about', 'protfolio'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true,
        animateAnchor: true,

        onLeave: leave,
        onSlideLeave: slideLeave
    });
}


function leave(index, direction) {
    var delay = setInterval(function() {
        $('#shapes img').attr({
            src: 'Resources/shapes1.png'
        });
        clearInterval(delay);
    }, 350);
}


function slideLeave(anchorLink, index, slideIndex, direction) {

}