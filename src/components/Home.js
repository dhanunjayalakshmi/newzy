import HotTopic from "./HotTopic";
import LatestRelease from "./LatestRelease";
import NewsCategory from "./NewsCategory";
import mockData from "../utils/mockData.json";
import Subscribe from "./Subscribe";

const Home = () => {
  const newsCategories = mockData?.data;

  return (
    <div className="w-full flex-1 flex-col items-center mt-4">
      <HotTopic />
      <LatestRelease />
      {newsCategories?.map((category, index) => (
        <NewsCategory key={index} categoryInfo={category} />
      ))}
      <Subscribe />
    </div>
  );
};

export default Home;
