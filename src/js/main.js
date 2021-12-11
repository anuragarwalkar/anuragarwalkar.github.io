// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

function calculate_age(dob) {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function monthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

// const workExperiance = [
//   {
//     company: "Data Care Corportation",
//     designation: "Trainee Engineer",
//     from: new Date(2013, 11, 18),
//     to: new Date(2014, 08, 21),
//   },
//   {
//     company: "CMS It Services PVT LTD",
//     designation: "Consultant",
//     from: new Date(2016, 08, 04),
//     to: new Date(2017, 05, 15),
//   },
//   {
//     company: "IMSI India PVT. LTD.",
//     designation: "Desktop Support L2",
//     from: new Date(2017, 05, 18),
//     to: new Date(2019, 04, 11),
//   },
//   {
//     company: "Zensar Technologies",
//     designation: "Software Engineer",
//     from: new Date(2019, 04, 12),
//     to: new Date(2020, 12, 07),
//   },
//   {
//     company: "Excellarate",
//     designation: "Senior Software Engineer",
//     from: new Date(2020, 12, 07),
//     to: new Date(),
//   },
// ];

// const experianceInMonths = workExperiance.reduce(
//   (a, b) => a + moment(b.to).diff(moment(b.from), "months"),
//   0
// );

// const inYears = (experianceInMonths / 12).toFixed(1);

// const anuragDOB = new Date(1995, 05, 16);

// document.getElementById("age").textContent = calculate_age(anuragDOB);

// document.getElementById("experiance").textContent = `${inYears}+`;
