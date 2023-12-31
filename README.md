# ethiopian-to-gregorian

Contains some util methods for converting gregorian calander to ethiopian calander

### Install

`npm i ethiopian-to-gregorian`

[![Publish](https://github.com/npm/documentation/actions/workflows/publish.yml/badge.svg)](https://github.com/npm/documentation/actions/workflows/publish.yml)

### Quick start

1. `npm i ethiopian-to-gregorian` to install the package
2. `import {
  getEthiopicDate,
  etchangetolong,
  etchangetofull,
  etchangetomedium,
  etchangetoshort,
} from "./index.js"
`: to import.
3. `const ddArray = getEthiopicDate(31, 3, 2024);`: Display any where inside your component. The response is an Array[Year, Month, Day] after manipulating the array you can append " ዓ.ም"

4. `const ddfull = etchangetofull(31, 3, 2024);`
    **code inside conponent:**  {ddfull}
    **Output:** እሁድ, ሚያዝያ 22, 2016
5. `const ddlong = etchangetolong(31, 3, 2024);`: ሚያዝያ 22, 2016
6. `const ddmedium = etchangetomedium(31, 3, 2024);`: ሚያ 22, 2016
7. `const ddshort = etchangetoshort(31, 3, 2024);`: 22/7/2016

## Technologies Used

**Language:** Javascript

<!-- ![Example Image](https://github.com/Solomon141/ethiopian-to-gregorian/blob/main/ettogc.PNG) -->
