$('.tab_content').hide();
$('.tab_content:eq(0)').show();
$('.profile_nav_ul li').click(function(event) {
    $('.profile_nav_ul li').removeClass('activeprofile');
    $(this).addClass('activeprofile');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
});