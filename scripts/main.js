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
});