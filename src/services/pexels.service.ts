import { createClient } from "pexels";

const client = createClient(process.env.REACT_APP_PEXELS_WALLPAPERS);
const query = "gradient background";

async function getWallpapers(): Promise<any> {
  const mobile = window.innerWidth > 500;
  const orientation = mobile ? "landscape" : "portrait";
  const size = mobile ? "large" : "";
  const result = (await client.photos.search({
    query,
    per_page: 10,
    orientation,
    size,
  })) as { photos: any[] };
  return result.photos;
}

export { getWallpapers };
