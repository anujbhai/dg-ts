"use strict";
const year = document.getElementById("year");
;
const this_year = new Date().getFullYear().toString();
year.setAttribute("datetime", this_year);
year.textContent = this_year;
// type guard
/* if (year) {
  year.setAttribute("datetime", this_year);
  year.textContent = this_year;
} */
