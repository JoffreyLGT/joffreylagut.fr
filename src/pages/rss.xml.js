import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";
import createSlug from "src/lib/createSlug";

export async function GET(context) {
  const blog = (await getCollection("blog")) ?? [];
  const projects = (await getCollection("projects")) ?? [];
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...blog, ...projects].map((content) => ({
      title: content.data.title,
      pubDate: content.data.pubDate,
      description: content.data.description,
      link: `/${content.collection}/${createSlug(content.data.title, content.slug)}/`,
    })),
  });
}
