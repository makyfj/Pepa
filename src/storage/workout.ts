import data from "../data/data.json";
import { containsKey, getData, storeData } from ".";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts: Workout[] = await getData("workout-data");
  return workouts;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workout-data");
  if (!hasWorkouts) {
    console.log("Storing data");
    await storeData("workout-data", data);
    return true;
  }
  return false;
};
