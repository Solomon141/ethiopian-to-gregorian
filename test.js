import {
  getEthiopicDate,
  etchangetolong,
  etchangetofull,
  etchangetomedium,
  etchangetoshort,
} from "./dateconverter.js";
// import { etchangetolong, etchangetofull, etchangetomedium, etchangetoshort } from "./src/et2gre/dateformats.js";

const dd = getEthiopicDate(31, 3, 2023);
console.log(dd);

const ddfull = etchangetofull(31, 3, 2024);
console.log(ddfull);

const ddlong = etchangetolong(31, 3, 2024);
console.log(ddlong);

const ddmedium = etchangetomedium(31, 3, 2024);
console.log(ddmedium);

const ddshort = etchangetoshort(31, 3, 2024);
console.log(ddshort);
