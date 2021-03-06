angular
    .module('APP', [])
    .directive('scrollContainer', scrollContainer)

function scrollContainer($window) {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                $('.fadingin').each( function(i){
                    let bottom_of_object = $(this).offset().top + $(this).outerHeight()*3/4;
                    let bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({'opacity':'1'},1500);
                    }
               });
           });
        }
    }
}
