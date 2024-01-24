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
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  // cara lama
  // for (let i = data.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [data[i], data[j]] = [data[j], data[i]];
  // }
  // const response = { data: data.slice(0, 4) };

  // console.log(first, last);
  const response = { data: data.slice(first, last) };
  return response;
};
