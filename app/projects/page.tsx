import { Client } from "@notionhq/client";
import Image from "next/image";

const notion = new Client({
  auth: process.env.NOTION_TOKEN_PROJECTS,
});

async function getProjectList() {
  const projects = notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE_ID!,
  });
  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjectList();

  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <h1 className="font-bold text-4xl">Projects</h1>
      <div>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
        {projects.results.map((item: any) => {
          return (
            <div key={item.id}>
              <h1>{item.properties.Name.title[0].plain_text}</h1>
              <figure>
                <img src={item.cover.external.url} alt="cover" />
                <Image
                  src={item.cover.external.url}
                  width={500}
                  height={500}
                  alt="cover"
                />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
