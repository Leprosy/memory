/*
 * Fetches images from the API endpoint
 */
export const fetchData = async () => {
  const res = await fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20");
  const images = await res.json();
  const list = images.entries.map(item => item.fields.image.url);
  return list;
};