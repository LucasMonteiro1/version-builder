import { getCollection } from './database';

const collection = getCollection('apps');

const getVersion = (ctx) => {
  const { app } = ctx.params;

  return new Promise((resolve, reject) => {
    collection.findOne({ app }, (err, doc) => {
      if (err) return reject(err);

      resolve((doc) && (doc.version) ? String(doc.version) : '1');
    });
  });
};

const nextVersion = (ctx) => {
  const { app } = ctx.params;

  return new Promise((resolve, reject) => {
    collection.update({ app }, { $inc: { version: 1 } }, { upsert: true }, (err, result) => {
      if (err) return reject(err);
      
      resolve(true);
    });
  });
};

export default {
  getVersion,
  nextVersion,
};
