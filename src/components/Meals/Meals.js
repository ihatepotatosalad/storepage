import React from "react";
import AvailbleMeals from "./AvailbleMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailbleMeals />
    </React.Fragment>
  );
};

export default Meals;
