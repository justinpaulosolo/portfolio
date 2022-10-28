import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN_PROJECTS,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const database = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE_ID!
  })
  
  return res.status(200).json(database);
}