(function () {
    $.fn.isInViewport = function() {
        const elementTop = $(this).offset().top + $(this).outerHeight() / 3;
        const elementBottom = elementTop + $(this).outerHeight();

        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $( document ).ready(function() {
        $('.loader-background').fadeOut(500);
    });

    $(window).on('resize scroll load', function() {
        $('.animate').each(function () {
            const target = $(this);
            if (target.isInViewport()) {
                const animationName = target.attr("data-aname");
                const animationDelay = target.attr("data-adelay");
                setTimeout(() => {
                    target.addClass(animationName);
                }, animationDelay ? animationDelay : 0)
                setTimeout(() => {
                    target.removeClass('animate');
                }, 1000 + animationDelay ? animationDelay : 0);
            }
        })
    });


})();