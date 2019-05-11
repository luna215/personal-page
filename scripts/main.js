$(document).ready(function(){
    var hasActive = 'about';

    $('.about-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'about';
        $(this).addClass('active');
        $('.page').html('<h2><span class="hash">#</span>About</h2>');
        $('.about-content').css('display', 'block');
    });

    $('.projects-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'projects';
        $(this).addClass('active');
        $('.page').html('<h2><span class="hash">#</span>Projects</h2>');
        $('.projects-content').css('display', 'block');
    });

    $('.contact-page').click(function() {
        $(`.${hasActive}-page`).removeClass('active');
        $(`.${hasActive}-content`).css('display', 'none');
        hasActive = 'contact';
        $(this).addClass('active');
        $('.page').html('<h2><span class="hash">#</span>Contact</h2>');
        $('.contact-content').css('display', 'block');
    });
});