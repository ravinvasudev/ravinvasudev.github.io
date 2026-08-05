import { getProjects } from "../../lib/content";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = "https://ravinvasudev.com";
  const projects = await getProjects();

  const items = projects
    .map(
      (project) => `
      <item>
        <title><![CDATA[${project.name}]]></title>
        <link>${siteUrl}/projects</link>
        <guid>${siteUrl}/projects#${project.id}</guid>
        <description><![CDATA[${project.solution}]]></description>
      </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Ravin Vasudev - Architecture and Engineering Updates</title>
    <link>${siteUrl}</link>
    <description>Project and architecture updates from Ravin Vasudev</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
