// var panels =$('.board section');
// var tabs = $('.tab a')

// tabs.click(function(e){
//     e.preventDefault();
//     panels.removeClass('board-act');
//     $(this).parent().parent().addClass('board-act'); /* $(this) 이벤트가 발생한 나 자신 찾기 */
// });


var tabs = $('.tab-list [role="tab"]');

tabs.on('click', function(e){
    e.preventDefault();
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
    var selectedId = "#"+$(this).attr('aria-controls');
	$(selectedId).addClass('section-act').siblings().removeClass('section-act');
});