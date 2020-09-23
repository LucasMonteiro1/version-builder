import { query } from './database';

const getVersion = async (ctx) => {
  const { app } = ctx.params;

  const rows = await query(`
    SELECT version 
    FROM apps 
    WHERE app = $1
  `, [app]);
  const result = rows[0] || { version: 1 };
  return String(result.version);
};

const nextVersion = async (ctx) => {
  const { app } = ctx.params;

  const rows = await query(`
    INSERT INTO apps(app, version)
    VALUES($1, 1)
    ON CONFLICT (app)
    DO UPDATE SET version = apps.version + 1
    RETURNING *
  `, [app]);
  return rows[0];
};

export default {
  getVersion,
  nextVersion,
};
