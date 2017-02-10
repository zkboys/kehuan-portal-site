if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}

$(function () {
    //小屏幕小展开收起菜单
    $(".show-menu-icon").on("click", function () {
        if ($(".nav-menu").hasClass("show-menu")) {
            $(".nav-menu").removeClass("show-menu");
        } else {
            $(".nav-menu").addClass("show-menu");
        }
    });


    //导航栏滑动一定距离添加白底
    var scrollFunc = function (e) {
        e = e || window.event;
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 250) {
            // background-color: rgba(0, 0, 0, .5);
            // $(".nav").addClass('nav-change-color');
            $('.nav').css('background-color', 'rgba(0, 0, 0, 0.5)');
        } else {

            // $(".nav").removeClass('nav-change-color');
            var n = scrollTop / 500;
            if (n < 0.1) {
                n = 0.1
            }
            $('.nav').css('background-color', 'rgba(0, 0, 0, ' + n + ')');
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel;
    document.onmousewheel = scrollFunc;
    scrollFunc();
});
