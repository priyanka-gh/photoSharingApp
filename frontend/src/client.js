import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "1hmyqhxw",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: true,
  token:
    "sk6oGUzIRrKbHvEKCcxdjFCrE8avkBeRVBBgQ94MyQtrAuLRetyaOR0lPhHL9w1xKcwdUZY8I3BqRnAIjbkgjWVsXMs7wwrYyaFQiFLQMlRCtkt4XDIn3mBNsuhEVUG3VoILjge2JlIN7H2f8ph78JutRKlD5xeMiOwO1wolrqTuyy8nRejU",
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
