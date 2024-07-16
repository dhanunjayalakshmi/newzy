import HotTopic from "./HotTopic";
import LatestRelease from "./LatestRelease";
import NewsCategory from "./NewsCategory";
import mockData from "../utils/mockData.json";
import Subscribe from "./Subscribe";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";

const Home = () => {
  const newsCategories = mockData?.data;
  const [newsData, setNewsData] = useState(null);
  const { data, loading, error } = useFetchData(
    "https://newsapi.org/v2/top-headlines",
    {
      country: "in",
      category: "general",
      pageSize: 30,
    }
  );

  useEffect(() => {
    if (data) setNewsData(data?.articles);
  }, [data]);

  return (
    <div className="w-full flex-1 flex-col items-center mt-4">
      <HotTopic newsArticles={newsData} loading={loading} error={error} />
      <LatestRelease newsArticles={newsData} loading={loading} error={error} />
      {newsCategories?.map((category, index) => (
        <NewsCategory key={index} categoryInfo={category} />
      ))}
      <Subscribe />
    </div>
  );
};

export default Home;
