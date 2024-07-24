import HotTopic from "./HotTopic";
import LatestRelease from "./LatestRelease";
import NewsCategory from "./NewsCategory";
import Subscribe from "./Subscribe";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";
import { NEWS_CATEGORIES } from "../utils/constants";

const Home = () => {
  const [hotTopicData, setHotTopicData] = useState(null);
  const [latestReleaseData, setLatestReleaseData] = useState(null);

  const newsCategories = NEWS_CATEGORIES;

  const { data, loading, error } = useFetchData(
    "https://newsapi.org/v2/top-headlines",
    {
      category: "general",
      pageSize: 7,
    }
  );

  useEffect(() => {
    if (data) {
      setHotTopicData(data?.articles?.slice(0, 4));
      setLatestReleaseData(data?.articles?.slice(4));
    }
  }, [data]);

  return (
    <div className="w-full flex-1 flex-col items-center mt-4">
      <HotTopic newsArticles={hotTopicData} loading={loading} error={error} />
      <LatestRelease
        newsArticles={latestReleaseData}
        loading={loading}
        error={error}
      />
      {newsCategories?.map((category, index) => (
        <NewsCategory key={index} category={category} />
      ))}
      <Subscribe />
    </div>
  );
};

export default Home;
