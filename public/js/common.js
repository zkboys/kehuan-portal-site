if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
var HEADER_NAV_BG_COLOR = '0, 0, 0';
function setHeaderNav(activeId, bgColor) {
    $('.header-nav .nav-menu li').siblings().removeClass('active');
    $('.header-nav .nav-menu li#' + activeId).addClass('active');
    if (bgColor) {
        HEADER_NAV_BG_COLOR = bgColor;
        scrollFunc();
    }
}

//导航栏滑动一定距离改变头部导航颜色
function scrollFunc(e) {
    e = e || window.event;
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 250) {
        // background-color: rgba(0, 0, 0, .5);
        // $(".nav").addClass('nav-change-color');
        $('.nav').css('background-color', 'rgba(' + HEADER_NAV_BG_COLOR + ', 0.5)');
    } else {

        // $(".nav").removeClass('nav-change-color');
        var n = scrollTop / 500;
        if (n < 0.1) {
            n = 0.1
        }
        $('.nav').css('background-color', 'rgba(' + HEADER_NAV_BG_COLOR + ', ' + n + ')');
    }
};
$(function () {
    //小屏幕小展开收起菜单
    $('.show-menu-icon').on('click', function () {
        $('.nav-menu').toggleClass('show-menu');
    });

    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel;
    document.onmousewheel = scrollFunc;
    scrollFunc();
});
