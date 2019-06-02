$(document).ready(function(){
    var hasActive = 'about';

    $('.about-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'about';
        $(this).addClass('active');
        $('.about-content').css('display', 'block');
    });

    $('.projects-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'projects';
        $(this).addClass('active');
        $('.projects-content').css('display', 'block');
    });

    $('.animations-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'animations';
        $(this).addClass('active');
        $('.animations-content').css('display', 'block');
    });

    $('.socials-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'socials';
        $(this).addClass('active');
        $('.socials-content').css('display', 'block');
    });

    $('.learn-more-button').click(function() {
        if($('.description').hasClass('slide-intro-right')) {
            $('.description').removeClass('slide-intro-right');
        }
        if($('.learn-more-button').hasClass('slide-intro-right')) {
            $('.learn-more-button').removeClass('slide-intro-right');
        }
        if($('.learn-more-content').hasClass('slide-more-content-right')) {
            $('.learn-more-content').removeClass('slide-more-content-right');
        }

        $('.description').addClass('slide-intro-left ');
        $('.learn-more-button').addClass('slide-intro-left ');
        $('.learn-more-content').addClass('slide-more-content-left');
    });

    $('.fa-arrow-left').click(function() {
        $('.description').removeClass('slide-intro-left');
        $('.learn-more-button').removeClass('slide-intro-left');
        $('.learn-more-content').removeClass('slide-more-content-left');

        $('.description').addClass('slide-intro-right');
        $('.learn-more-button').addClass('slide-intro-right');
        $('.learn-more-content').addClass('slide-more-content-right');
    });
});



// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt.toUpperCase()+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };