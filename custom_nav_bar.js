function on_nav_click(button) {
    var other_nav_buttons = document.getElementsByClassName('sub-nav')[0].children;
    for (var i=0; i<other_nav_buttons.length; i++) {
        other_nav_buttons[i].className = '';
    }
    button.className = 'active';
}

function toggle_navs(active_nav_id, prev_nav_ids) {
    var active_nav = document.getElementById(active_nav_id);
    for(var i=0; i<prev_nav_ids.length; i++) {
        var prev_nav = document.getElementById(prev_nav_ids[i]);
        if(!prev_nav.style.display == 'none') {
            prev_nav.style.display = 'none';
        }
    }

    active_nav.style.display = 'block';
}
