const year = document.getElementById("year") as HTMLSpanElement;;

const this_year: string = new Date().getFullYear().toString();

year.setAttribute("datetime", this_year);
year.textContent = this_year;

// type guard
/* if (year) {
  year.setAttribute("datetime", this_year);
  year.textContent = this_year;
} */

