var menu = $('.menu');
var items = $('.menu-item');
var icons = $('.submenu a');
icons.attr('class', 'icon-dot-circled')


icons.on('mouseover focusin', function(e){
	$(this).removeClass('icon-dot-circled');
	$(this).addClass('icon-ok');
});

icons.on('mouseout focusout', function(e){
	$(this).removeClass('icon-ok');
	$(this).addClass('icon-dot-circled');
});

items.on('click keyup focus', function(e){
    if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13 || e.type ==='focus')){
        items.removeClass('menu-act');
        $(this).addClass('menu-act')
    }
});

