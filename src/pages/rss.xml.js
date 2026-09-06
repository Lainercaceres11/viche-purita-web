import rss from "@astrojs/rss";
export async function GET(context) {
  return rss({
    // `<title>` campo en el xml generado
    title: "Viche Purita",
    // `<description>` campo en el xml generado
    description: "Productos 100% ancestrales a base de viche",
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: [
      {
        title: "Viche Purita",
        description: "Productos 100% ancestrales a base de viche",
      },
    ],
  });
}
