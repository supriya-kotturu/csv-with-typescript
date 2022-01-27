"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // 28/10/2015 - DD/MM/YYYY
    const dateInfo = dateString
        .trim()
        .split('/')
        .map((value) => parseInt(value)), day = dateInfo[0], month = dateInfo[1] - 1, year = dateInfo[2];
    return new Date(day, month, year);
};
exports.dateStringToDate = dateStringToDate;
