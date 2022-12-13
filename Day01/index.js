import { CALORIE_INPUT } from "./calorieInput.js";

const parseCalorieInput = (calorieInput) => {
  const calorieArray = calorieInput.split("\n\n").map((subArray) => {
    subArray = subArray.split("\n");
    return subArray.map((item) => convertToNumber(item));
  });
  return calorieArray;
};

const convertToNumber = (string) => {
  const maybeNumber = parseInt(string);
  return maybeNumber ? maybeNumber : 0;
};

const getArraySums = (calorieArray) =>
  calorieArray.reduce((acc, cur) => acc + cur, 0);

const getSumOfTopNValuesInArray = (array, numberOfItems) => {
  const orderedArray = array
    .map((subArray) => getArraySums(subArray))
    .sort((a, b) => b - a);
  const arrayToSum = orderedArray.slice(0, numberOfItems);
  return getArraySums(arrayToSum);
};

const calorieArrayWithNumbers = parseCalorieInput(CALORIE_INPUT);

console.log(getSumOfTopNValuesInArray(calorieArrayWithNumbers, 1));
console.log(getSumOfTopNValuesInArray(calorieArrayWithNumbers, 3));