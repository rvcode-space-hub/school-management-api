import {
  createSchool,
  getSchoolsSortedByDistance,
} from "../services/school.servic.js";

export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!address) missingFields.push("address");
    if (latitude === undefined) missingFields.push("latitude");
    if (longitude === undefined) missingFields.push("longitude");

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `${missingFields.join(", ")} field(s) are missing`,
      });
    }

    if (typeof latitude !== "number" || typeof longitude !== "number") {
      return res.status(400).json({
        message: "Latitude and Longitude must be numbers only (no strings allowed)",
      });
    }

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return res.status(400).json({
        message: "Latitude and Longitude must be valid numbers",
      });
    }

    const result = await createSchool({
      name,
      address,
      latitude,
      longitude,
    });

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const missingFields = [];
    if (!latitude) missingFields.push("latitude");
    if (!longitude) missingFields.push("longitude");

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `${missingFields.join(", ")} query param(s) are required`,
      });
    }

    const schools = await getSchoolsSortedByDistance(
      latitude,
      longitude
    );

    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};