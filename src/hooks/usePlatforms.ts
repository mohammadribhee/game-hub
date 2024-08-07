import UseData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => UseData<Platform>("/platforms/lists/parents");
export default usePlatforms;
