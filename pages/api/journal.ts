import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!
  })
  
  const pages = await notion.pages.retrieve({
    page_id: '15fb014f0b3e4804b62ef315c8db341d'
  });

  const blocks = await notion.blocks.children.list({
    block_id: '15fb014f0b3e4804b62ef315c8db341d'
  });

  return res.status(200).json(blocks);
}