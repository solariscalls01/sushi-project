import { db } from "@vercel/postgres";
import {
  alcohol,
  appetizers,
  bento,
  chirashi,
  drinks,
  handrolls,
  nigiri,
  noodles,
  rolls,
  signatureCombo,
  signatureDishes,
  veggieRoll,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedAlcohol() {
  await client.sql`DROP TABLE IF EXISTS alcohol;`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS alcohol (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price_small NUMERIC(5,2),
      price_large NUMERIC(5,2),
      description VARCHAR(255),
      image_url VARCHAR(255)
    );
  `;

  const insertedAlcohol = await Promise.all(
    alcohol.map(
      (alcohol) => client.sql`
        INSERT INTO alcohol (name, price_small, price_large, description, image_url)
        VALUES (${alcohol.name}, ${alcohol.price_small}, ${alcohol.price_large}, ${alcohol.description}, ${alcohol.image_url})
        ON CONFLICT DO NOTHING;
      `,
    ),
  );

  return insertedAlcohol;
}

async function seedDrinks() {
  await client.sql`DROP TABLE IF EXISTS DRINKS`;
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS drinks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price NUMERIC(5,2) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedDrinks = await Promise.all(
    drinks.map(
      (drink) => client.sql`
        INSERT INTO drinks (name, price, image_url)
        VALUES (${drink.name}, ${drink.price}, ${drink.image_url})
        ON CONFLICT DO NOTHING;
      `,
    ),
  );

  return insertedDrinks;
}

async function seedAppetizers() {
  await client.sql`DROP TABLE IF EXISTS appetizers`;

  await client.sql`
  CREATE TABLE IF NOT EXISTS appetizers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price numeric(5,2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image_url VARCHAR(255)
  );
  `;

  const insertAppetizers = await Promise.all(
    appetizers.map(
      (a) => client.sql`
    INSERT INTO appetizers (name, price, description, image_url)
    VALUES (${a.name}, ${a.price}, ${a.description}, ${a.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertAppetizers;
}

async function seedBento() {
  await client.sql`DROP TABLE IF EXISTS bento`;

  await client.sql`
  CREATE TABLE IF NOT EXISTS bento (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price numeric(5,2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image_url VARCHAR(255)
  );
  `;

  const insertBento = await Promise.all(
    bento.map(
      (b) => client.sql`
    INSERT INTO bento (name, price, description, image_url)
    VALUES (${b.name}, ${b.price}, ${b.description}, ${b.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertBento;
}

async function seedChirashi() {
  await client.sql`DROP TABLE IF EXISTS chirashi`;

  await client.sql`CREATE TABLE IF NOT EXISTS chirashi(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(5,2) NOT NULL,
  image_url VARCHAR(255)
  )`;

  const insertChirashi = await Promise.all(
    chirashi.map(
      (c) => client.sql`
    INSERT INTO chirashi (name, price, image_url)
    VALUES (${c.name}, ${c.price}, ${c.image_url})
    ON CONFLICT DO NOTHING;`,
    ),
  );
  return insertChirashi;
}

async function seedHandRolls() {
  await client.sql`DROP TABLE IF EXISTS handrolls`;

  await client.sql`CREATE TABLE IF NOT EXISTS handrolls(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2), 
  description VARCHAR(255),
  image_url VARCHAR(255)
  );`;

  const insertHandRolls = await Promise.all(
    handrolls.map(
      (h) => client.sql`
  INSERT INTO handrolls(name, price, description, image_url)
  VALUES(${h.name}, ${h.price}, ${h.description}, ${h.image_url})
  ON CONFLICT DO NOTHING`,
    ),
  );

  return insertHandRolls;
}

async function seedNigiri() {
  await client.sql`DROP TABLE IF EXISTS nigiri`;

  await client.sql`CREATE TABLE IF NOT EXISTS nigiri(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price_nigiri NUMERIC(5,2), 
  price_sashimi NUMERIC(5,2),
  image_url VARCHAR(255),
  market_price VARCHAR(50)
  );`;

  const insertNigiri = await Promise.all(
    nigiri.map(
      (n) => client.sql`
  INSERT INTO nigiri(name, price_nigiri, price_sashimi, image_url, market_price)
  VALUES(${n.name}, ${n.price_nigiri}, ${n.price_sashimi}, ${n.image_url}, ${n.market_price})
  ON CONFLICT DO NOTHING`,
    ),
  );

  return insertNigiri;
}

async function seedNoodles() {
  await client.sql`DROP TABLE IF EXISTS noodles`;

  await client.sql`CREATE TABLE IF NOT EXISTS noodles(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2),
  description VARCHAR(255),
  image_url VARCHAR(255))`;

  const insertNoodles = await Promise.all(
    noodles.map(
      (n) => client.sql`
    INSERT INTO noodles(name, price, description, image_url)
    VALUES(${n.name}, ${n.price}, ${n.description}, ${n.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertNoodles;
}

async function seedRolls() {
  await client.sql`DROP TABLE IF EXISTS rolls`;

  await client.sql`CREATE TABLE IF NOT EXISTS rolls(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2),
  description VARCHAR(255),
  image_url VARCHAR(255))`;

  const insertRolls = await Promise.all(
    rolls.map(
      (r) => client.sql`
    INSERT INTO rolls(name, price, description, image_url)
    VALUES(${r.name}, ${r.price}, ${r.description}, ${r.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertRolls;
}

async function seedSignatureCombo() {
  await client.sql`DROP TABLE IF EXISTS signatureCombo`;

  await client.sql`CREATE TABLE IF NOT EXISTS signatureCombo(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2),
  description VARCHAR(255),
  image_url VARCHAR(255))`;

  const insertSignatureCombo = await Promise.all(
    signatureCombo.map(
      (s) => client.sql`
    INSERT INTO signatureCombo(name, price, description, image_url)
    VALUES(${s.name}, ${s.price}, ${s.description}, ${s.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertSignatureCombo;
}

async function seedSignatureDishes() {
  await client.sql`DROP TABLE IF EXISTS signatureDishes`;

  await client.sql`CREATE TABLE IF NOT EXISTS signatureDishes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2),
  description VARCHAR(255),
  image_url VARCHAR(255))`;

  const insertSignatureDishes = await Promise.all(
    signatureDishes.map(
      (s) => client.sql`
    INSERT INTO signatureDishes(name, price, description, image_url)
    VALUES(${s.name}, ${s.price}, ${s.description}, ${s.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertSignatureDishes;
}

async function seedVeggieRolls() {
  await client.sql`DROP TABLE IF EXISTS veggieRoll`;

  await client.sql`CREATE TABLE IF NOT EXISTS veggieRoll(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC(5,2),
  description VARCHAR(255),
  image_url VARCHAR(255))`;

  const insertVeggieRoll = await Promise.all(
    veggieRoll.map(
      (v) => client.sql`
    INSERT INTO veggieRoll(name, price, description, image_url)
    VALUES(${v.name}, ${v.price}, ${v.description}, ${v.image_url})
    ON CONFLICT DO NOTHING`,
    ),
  );

  return insertVeggieRoll;
}

export async function GET() {
  try {
    await client.sql`DROP TABLE if exists revenue`;
    await client.sql`BEGIN`;
    await seedAppetizers();
    await seedAlcohol();
    await seedBento();
    await seedChirashi();
    await seedDrinks();
    await seedHandRolls();
    await seedNigiri();
    await seedNoodles();
    await seedRolls();
    await seedSignatureCombo();
    await seedSignatureDishes();
    await seedVeggieRolls();

    await client.sql`COMMIT`;

    return Response.json({ message: "Database added successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
