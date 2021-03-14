console.log("Searching for search boxes, deliciously ironic (search.js)");

let potential_searches = document.querySelectorAll('[role="search" i]');

if (potential_searches.length != 0) { 
  potential_searches[0].focus();
} else {
  document.querySelectorAll('[title="search" i]')[0].focus();
}
