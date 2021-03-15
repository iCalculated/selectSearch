if (typeof potential_searches == 'undefined') {
  potential_searches = document.querySelectorAll('input[role="search" i]');
  // I (literally) got rejected from MIT right after writing this, probably the ternary :(
  search_box = potential_searches.length != 0 ? potential_searches[0] : document.querySelectorAll('input[title~="search" i], input[aria-label~="search" i], input[title~="search" i]')[0];
}
search_box.focus();
