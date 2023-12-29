
  exports.getEthiopicDate = (intGCDay, intGCMonth, intGCYear) => {
    let intDayDiff = 0;
    let intPagumen = 0;
    let intECDay = 0;
    let intECMonth = 0;
    let intECYear = 0;

    // Get The Starting Month
    if (intGCMonth > 8) {
        intECMonth = intGCMonth - 8;
    } else {
        intECMonth = intGCMonth + 4;
    }

    // Get no of days for Pagumen
    if (isLeapYear(intGCYear + 1)) {
        intPagumen = 6;
    } else {
        intPagumen = 5;
    }

    // Get Date Difference
    intDayDiff = getDateDifference(intGCMonth, intGCYear);

    if ((intGCMonth >= 10 && intGCMonth <= 12) || (intGCMonth >= 1 && intGCMonth <= 2)) {
        if (isLeapYear(intGCYear + 1)) {
            intDayDiff += 1;
        }
        intECDay = intGCDay - intDayDiff;
        if (intECDay <= 0) {
            intECDay += 30;
            intECMonth -= 1;
        }
    } else if (intGCMonth === 9) {
        if (isLeapYear(intGCYear + 1)) {
            intDayDiff = 11;
            intPagumen = 6;
        } else {
            intDayDiff = 10;
            intPagumen = 5;
        }
        intECDay = intGCDay - intDayDiff;
        if (intECDay <= 0) {
            intECDay = intECDay + intPagumen;
            if (intECDay <= 0) {
                intECDay += 30;
                intECMonth = 12;
            } else {
                intECMonth = 13;
            }
        }
    } else if (intGCMonth >= 3 && intGCMonth <= 8) {
        intECDay = intGCDay - intDayDiff;
        if (intECDay <= 0) {
            intECDay += 30;
            intECMonth -= 1;
        }
    }

    // Ethiopian Year
    intECYear = getETYear(intGCMonth, intGCYear, intECMonth);

    const Year = intECYear;
    const Month = intECMonth;
    const Day = intECDay;

    const collect = `${Year}-${Month}-${Day}`;
    return collect;
}

function isLeapYear(intEthYear) {
    return Math.abs(1999 - intEthYear) % 4 === 0;
}

function getDateDifference(intGCMonth, intGCYear) {
    let intDayDiff = 0;
    switch (intGCMonth) {
        case 8:
            intDayDiff = 6;
            break;
        case 2:
        case 6:
        case 7:
            intDayDiff = 7;
            break;
        case 1:
        case 4:
        case 5:
            intDayDiff = 8;
            break;
        case 3:
        case 11:
        case 12:
            intDayDiff = 9;
            break;
        case 10:
            intDayDiff = 10;
            break;
        case 9:
            intDayDiff = isLeapYear(intGCYear) ? 11 : 10;
            break;
    }
    return intDayDiff;
}

function getETYear(intGCMonth, intGCYear, intECMonth) {
    let intYearTemp;
    switch (intGCMonth) {
        case 9:
        case 10:
        case 11:
        case 12:
            intYearTemp = intGCYear - 7;
            if ((intGCMonth === 9) && (intECMonth === 12 || intECMonth === 13)) {
                intYearTemp = intYearTemp - 1;
            }
            break;
        default:
            intYearTemp = intGCYear - 8;
            break;
    }
    return intYearTemp;
}


