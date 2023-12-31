import getEthiopicDate from "../gregoriantoethiopian.js";

const daynames = ["እሁድ", "ሰኞ", "ማክሰኞ", "ሮብ", "ሀሙስ", "ዓርብ", "ቅዳሜ"];
const monthnames = [
  "መስከረም ",
  "ጥቅምት ",
  "ህዳር ",
  "ታህሳስ ",
  "ጥር ",
  "የካቲት ",
  "መጋቢት ",
  "ሚያዝያ ",
  "ግንቦት ",
  "ሰነ ",
  "ሓምሌ ",
  "ነሃሴ ",
];

const etchangetofull = (dt, mn, yr) => {
  const thedate = new Date(yr, mn - 1, dt);
  const etConverted = getEthiopicDate(dt, mn, yr);
  return (
    daynames[thedate.getDay()] +
    ", " +
    monthnames[etConverted[1]] +
    "" +
    etConverted[2] +
    ", " +
    etConverted[0]
  );
};

const etchangetolong = (dt, mn, yr) => {
  const etConverted = getEthiopicDate(dt, mn, yr);
  return (
    monthnames[etConverted[1]] + "" + etConverted[2] + ", " + etConverted[0]
  );
};

const etchangetomedium = (dt, mn, yr) => {
  const etConverted = getEthiopicDate(dt, mn, yr);
  return (
    monthnames[etConverted[1]].substring(0,2) + " " + etConverted[2] + ", " + etConverted[0]
  );
};

const etchangetoshort = (dt, mn, yr) => {
  const etConverted = getEthiopicDate(dt, mn, yr);
  return etConverted[2] + "/" + etConverted[1] + "/" + etConverted[0];
};

export { etchangetofull, etchangetolong, etchangetomedium, etchangetoshort };
