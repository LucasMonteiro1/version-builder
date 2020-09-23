import { Client } from 'pg';

const { DATABASE_URL } = process.env;

const getClient = () => {
  return new Client({ 
    connectionString: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    }
  });
};

export const query = async (text, values) => {
  const client = getClient();

  try {
    await client.connect();
    const res = await client.query(text, values);
    return res.rows;
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};