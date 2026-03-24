export const schoolQuery = {
  CREATE_SCHOOL: `
    INSERT INTO schools (name, address, latitude, longitude) 
    VALUES (?, ?, ?, ?)
  `,

  GET_ALL_SCHOOLS: `
    SELECT * FROM schools
  `,

  GET_SCHOOL_BY_ID: `
    SELECT * FROM schools WHERE id = ?
  `,
};