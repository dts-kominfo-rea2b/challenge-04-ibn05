// ! JANGAN DIMODIFIKASI
const dates = [
    "2019-01-02", // 1546387200 (epoch time, dalam detik)
    "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
    "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
    "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
    "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// const convertDate = (dates) => {
//     //convert to local;
//     let localDate = [];
//     dates.forEach((data, i) => {
//         let date = new Date(data).toLocaleString();
//         localDate.push(date);
//     });

//     //convert local to epoch
//     localEpoch = [];
//     localDate
//         .sort()
//         .reverse()
//         .forEach((data, i) => {
//             let date = new Date(data).getTime() / 1000;
//             localEpoch.push(date);
//         });

//     return localEpoch;
// };

// const createDate = (dates, index) => {
//     let localDate = convertDate(dates);

//     if (index) return localDate[index - 1];
//     return localDate.join("-");
// };
// TODO: Buatlah fungsi createDate

const createDate = (dates, index) => {
    let arrDates = [];

    dates.forEach((data) => {
        let date = (new Date(data).getTime() / 1000).toString();
        arrDates.push(date);
    });

    arrDates.sort();

    if (index) return arrDates.join("-");
    return arrDates.reverse()[index - 1];
};

// ! JANGAN DIMODIFIKASI
(() => {
    // IIFE

    // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
    console.log(createDate?.(dates));

    // '1614841200' (dalam string)
    console.log(createDate?.(dates, 2));
})();

module.exports = {
    dates,
    createDate,
};
