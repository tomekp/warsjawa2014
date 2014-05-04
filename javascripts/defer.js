(function loadDefferdJs() {
    function getScript(url, success) {
        var script = document.createElement('script');
        script.src = url;
        var head = document.getElementsByTagName('head')[0],
            done = false;
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                success();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            }
        };
        head.appendChild(script);
    }

    getScript('javascripts/vendor/require.js', function () {
        require(['javascripts/vendor/jquery'], function () {
            $('section#header .place').click(function (event) {
                event.preventDefault();

                var mapIframe = $('section#map iframe')[0];
                if (mapIframe !== undefined) {
                    return;
                }

                var mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.740577996301!2d20.982062799999987!3d52.21176169999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccba6c9e2719%3A0xa614e74a0b76eff1!2sStefana+Banacha+2!5e0!3m2!1spl!2spl!4v1398360409911';
                $('section#map').append('<iframe src="' + mapUrl + '"></iframe>');
                $('section#map iframe').animate({'top': '0'}, 600);
                $('section#map').animate({'height': $('section#map iframe').css('height')}, 600);
            });
        });

        require(['javascripts/vendor/jquery', 'javascripts/foundation/foundation', 'javascripts/foundation/foundation.tooltip'], function () {
            console.log('OHAI');
            $(document).foundation();

        });


    });

//    getScript('javascripts/vendor/jquery.js', function () {
//        $('section#header .place').click(function (event) {
//            event.preventDefault();
//
//            var mapIframe = $('section#map iframe')[0];
//            if (mapIframe !== undefined) {
//                return;
//            }
//
//            var mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.740577996301!2d20.982062799999987!3d52.21176169999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccba6c9e2719%3A0xa614e74a0b76eff1!2sStefana+Banacha+2!5e0!3m2!1spl!2spl!4v1398360409911';
//            $('section#map').append('<iframe src="' + mapUrl + '"></iframe>');
//            $('section#map iframe').animate({'top': '0'}, 600);
//            $('section#map').animate({'height': $('section#map iframe').css('height')}, 600);
//        });
//
//
//
//
////        $('section#speakers .speaker').click(function (event) {
////            event.preventDefault();
////
////            var liOfSelectedSpeaker = $(this).closest('li');
////            if (liOfSelectedSpeaker.hasClass('selected')) {
////                liOfSelectedSpeaker.removeClass('selected');
////                liOfSelectedSpeaker.css('padding-bottom', 0);
////                var floatingSpeakerDetails = $('section#speakers .floating-speaker-details');
////                floatingSpeakerDetails.removeClass('visible');
////                floatingSpeakerDetails.bind("transitionend", function () {
////                    $(this).remove();
////                });
////                return;
////            } else {
////                console.log($(this).closest('ul').find('li'));
////            }
////
////
////            $('section#speakers').append('<div class="floating-speaker-details"><div>');
////            var newFloatingSpeakerDetails = $('section#speakers .floating-speaker-details');
////            newFloatingSpeakerDetails.html($(this).data('speaker-description'));
//////            console.log('OOO ' + $('section#speakers').css('padding-top').replace("px", "") + liOfSelectedSpeaker.position().top + liOfSelectedSpeaker.height());
////            newFloatingSpeakerDetails.css('top', parseInt($('section#speakers').css('padding-top')) + liOfSelectedSpeaker.position().top + liOfSelectedSpeaker.height());
//////            $('section#speakers .floating-speaker-details').fadeIn();
////            liOfSelectedSpeaker.addClass('selected');
////            newFloatingSpeakerDetails.addClass('visible');
////
//////            liOfSelectedSpeaker.css('padding-bottom', newFloatingSpeakerDetails.height() + parseInt(newFloatingSpeakerDetails.css('padding-top')) + parseInt(newFloatingSpeakerDetails.css('padding-bottom')));
//
//
////            console.log($(this));
////            console.log($(this).data('speaker-description'));
////            console.log($(this).find('span').fadeOut());
////            console.log($(this).parent().parent().attr('class'));
////
////            var currentScreenSize = $('#media-query-breakpoints div:visible').first().data('size');
////            console.log(currentScreenSize);
////            console.log($(this).parent('li').index());
////
////            var numberOfElementsInRow = 0;
////            switch (currentScreenSize) {
////                case 'small':
////                    numberOfElementsInRow = 2;
////                    break;
////                case 'medium':
////                    numberOfElementsInRow = 3;
////                    break;
////                case 'large':
////                    numberOfElementsInRow = 4;
////                    break;
////            }
////            var selectedElementIndex = $(this).parent('li').index();
////            var rowIndex = Math.floor(selectedElementIndex / numberOfElementsInRow);
////            console.log('row index: ' + rowIndex);
////
////            var ul = $(this).parent().parent();
////            var lis = ul.find('li');
////
////            var cellsInSelectedRow = [];
////            for (var i = 0, length = lis.length; i < length; ++i) {
////                if (Math.floor(i / numberOfElementsInRow) === rowIndex) {
////                    cellsInSelectedRow.push(lis[i]);
////                    $(lis[i]).animate({'padding-bottom': '400px'}, 600);
////                }
////            }
////
////            console.log(cellsInSelectedRow);
//
////            ul.find('li').each(function () {
////                console.log($(this));
////
////
////            });
//
////        });
//    });
})();


