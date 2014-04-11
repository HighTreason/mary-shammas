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

}


function slideLeave(anchorLink, index, slideIndex, direction) {

}