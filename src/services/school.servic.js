import { db } from "../config/db.js";
import { calculateDistance } from "../utils/school.distance.js";
import { schoolQuery } from '../utils/db.query.js'

// add school
export const createSchool = async (data) => {
  const { name, address, latitude, longitude } = data;

  const [result] = await db.execute(
    schoolQuery.CREATE_SCHOOL,
    [name, address, latitude, longitude]
  );
  

  return {
    message: "School added successfully",
    id: result.insertId,
  };
};

// get school
export const getSchoolsSortedByDistance = async (userLat, userLon) => {
  const [rows] = await db.execute("SELECT * FROM schools");

  const schoolsWithDistance = rows.map((school) => {
    const distance = calculateDistance(
      parseFloat(userLat),
      parseFloat(userLon),
      school.latitude,
      school.longitude
    );
    return { ...school, distance };
  });

  schoolsWithDistance.sort((a, b) => a.distance - b.distance);

  return schoolsWithDistance;
};