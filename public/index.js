import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
import {
  format,
  compareAsc,
  subDays,
  formatDistance,
  nextSaturday,
  previousFriday,
} from "date-fns";

window.getNextSaturday = function (json) {
  const data = JSON.parse(json);

  const fmDate = data.fmDate;
  const fmDateDate = new Date(fmDate);

  const nextSat = format(nextSaturday(fmDateDate), "MM/dd/yyyy");
  console.log(nextSat);

  const obj = { nextSat };
  console.log(obj);
  FileMaker.PerformScript("Get Result", JSON.stringify(obj));
};

window.getPreviousFriday = function (json) {
  const data = JSON.parse(json);

  const fmDate = data.fmDate;
  const fmDateDate = new Date(fmDate);

  const prevFriday = format(previousFriday(fmDateDate), "MM/dd/yyyy");

  const obj = { prevFriday };
  console.log(obj);
  FileMaker.PerformScript("Get Result", JSON.stringify(obj));
};
