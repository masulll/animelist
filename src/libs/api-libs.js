export const getAnimeResponse = async (resource, query) => {
  //   resource
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );

  const anime = await response.json();
  return anime;
};
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  //   resource
  const response = await getAnimeResponse(resource);

  return response.data.flatMap((item) => item.entry);
};
