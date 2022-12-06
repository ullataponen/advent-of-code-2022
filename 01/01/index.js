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

const findHighestCalories = () => {
  const calorieArray = parseCalorieInput(CALORIE_INPUT);
  const summedArrays = calorieArray.map((subArray) =>
    subArray.reduce((acc, cur) => acc + cur, 0)
  );
  return Math.max(...summedArrays);
};

console.log(findHighestCalories());
