import HotTopic from "./HotTopic";
import LatestRelease from "./LatestRelease";
import NewsCategory from "./NewsCategory";
import Subscribe from "./Subscribe";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";

const Home = () => {
  const newsCategories = [
    { category: "Business", newsColor: "3d0ef9" },
    { category: "Health", newsColor: "ad1bb0" },
    { category: "Science", newsColor: "f9630e" },
    { category: "Sports", newsColor: "1eb01b" },
    { category: "Entertainment", newsColor: "3d0ef9" },
    { category: "Technology", newsColor: "b01b40" },
  ];
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
      {newsCategories?.map((categoryInfo, index) => (
        <NewsCategory key={index} categoryInfo={categoryInfo} />
      ))}
      <Subscribe />
    </div>
  );
};

export default Home;
