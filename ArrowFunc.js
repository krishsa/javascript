//Simple function
const square = function (number) {
  return number * number;
};

//Arrow function
const square1 = (number) => number * number;

console.log(square(5));
console.log(square1(2));

//ArrowFunc with Objects
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
  return job.isActive;
}); //simple function
activeJobs.forEach((element) => {
  console.log("Active Jobs: ", element);
});
console.log(activeJobs);

const activeJobs1 = jobs.filter((job) => job.isActive);
console.log(activeJobs1);
