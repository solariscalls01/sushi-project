// pages/api/menu.js
import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const result = await query("SELECT * FROM public.drinks"); // Adjust the table name if needed
    const menuItems = result.rows; // Access the rows from the query result
    res.status(200).json(menuItems); // Send the data as a JSON response
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
