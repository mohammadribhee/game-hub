import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchRespnese } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchRespnese<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          page: pageParam,
          search: gameQuery.searchText,
        },
      }),

    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
    initialPageParam: 1,
  });
};

export default useGames;
