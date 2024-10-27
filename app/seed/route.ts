import { db } from '@vercel/postgres';
import { alcohol, appetizers, bento, chirashi, drinks, handrolls, nigiri, noodles, rolls, signatureCombo, signatureDishes, veggieRoll } from '../lib/placeholder-data';

const client = await db.connect();


async function seedAlcohol() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS alcohol (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price_small INT,
      price_large INT,
      description VARCHAR(255),
      image_url VARCHAR(255)
    );
  `;

  // const insertedInvoices = await Promise.all(
  //   test.map(
  //     (invoice) => client.sql`
  //       INSERT INTO test (customer_id, amount, status, date)
  //       VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
  //       ON CONFLICT (id) DO NOTHING;
  //     `,
  //   ),
  // );

  return seedAlcohol;
}

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS apps (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     apps.map(
//       (customer) => client.sql`
//         INSERT INTO apps (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }

// async function dropTableApp() {
//   await client.sql`
//   DROP TABLE test`

//   return dropTableApp;
// }

export async function GET() {

  try {
    await client.sql`BEGIN`;
    // await seedCustomers();
    // await seedInvoices();
    // await seedRevenue();
    await seedAlcohol();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database added successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
