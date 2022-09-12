import { useQuery } from "react-query";

export const useRequestAllData = (contentType, page) =>
  useQueryHandler(
    [contentType, page],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/${contentType}/?page=${page}`
      ).then((res) => res.json()),
    { keepPreviousData: true }
  );

export const useQueryHandler = (queryKey, queryFn, keepPreviousData) => {
  try {
    const data = useQuery(queryKey, queryFn, { keepPreviousData });
    return data;
  } catch (error) {
    console.error(error);
  }
};
