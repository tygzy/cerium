# cerium
JavaScript custom menu toggle navigation bar

Create `<div>` elements that you want to swap between, give them an `id`, then make links to toggle the menus/`<div>` elements.

Example:

```
  <div class='sub-nav'>
      <a onclick='on_nav_click(this); toggle_navs("menu-1", ["menu-2", "menu-3"]);' class='active'> Menu 1</a>
      <a onclick='on_nav_click(this); toggle_navs("menu-2", ["menu-1", "menu-3"]);'> Menu 2</a>
      <a onclick='on_nav_click(this); toggle_navs("menu-3", ["menu-2", "menu-1"]);'> Menu 3</a>
  </div>
  
  <div id='menu-1'>
      Menu 1
  </div>
  
  <div id='menu-2' style='display: none;'>
      Menu 2
  </div>
  
  <div id='menu-2' style='display: none;'>
      Menu 3
  </div>

```
