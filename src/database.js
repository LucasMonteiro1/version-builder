import mongojs from 'mongojs';

const { MONGODB_URI } = process.env;

export const getCollection = (colection) => {
  return getDB().collection(colection);
};

const getDB = () => {
  const db = mongojs(MONGODB_URI);
  db.on('error', (err) => null);
  return db;
};
