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

    var image = 'Resources/shapes1.png';

    $('#shapes img').attr({
        src: image
    });
}


function slideLeave(anchorLink, index, slideIndex, direction) {

}