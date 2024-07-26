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
  // const news = [
  //   {
  //     id: "dfedd296-f1f0-47fa-9f71-112264435035",
  //     title:
  //       "'Beverly Hills, 90210' star Jennie Garth never thought Shannen Doherty would die from cancer",
  //     description:
  //       'Jennie Garth is opening up about the loss of Shannen Doherty.Garth, who starred alongside Doherty on the classic TV show "Beverly Hills, 90210," appeared on the "Today" show this morning and spoke briefly about Doherty\'s death."It\'s still really fresh," she admitted, "still processing the grief, and...',
  //     url: "https://www.foxnews.com/entertainment/beverly-hills-90210-star-jennie-garth-never-thought-shannen-doherty-would-die-from-cancer",
  //     author: "Fox News",
  //     image:
  //       "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/07/1024/512/jennie-garth-beverly-hills-90210.jpg?ve=1&tl=1",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:46:51 +0000",
  //   },
  //   {
  //     id: "cbfc6852-960d-4b59-81e1-ba8c540d4790",
  //     title: "Holder takes 'really good catch' to dismiss Crawley",
  //     description:
  //       'West Indies\' Jason Holder takes a "really good catch" to dismiss England opener Zak Crawley on day one of the third Test at Edgbaston.',
  //     url: "https://www.bbc.com/sport/cricket/videos/c1rwy8l2dnzo",
  //     author: "@BBCSport",
  //     image:
  //       "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8d81/live/66806ef0-4b73-11ef-aebc-6de4d31bf5cd.jpg",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:39:02 +0000",
  //   },
  //   {
  //     id: "deaff824-c488-4deb-aa0a-67619483d115",
  //     title:
  //       "Prince William declined to reveal what he's paid in taxes, breaking King Charles' 30-year tradition",
  //     description:
  //       "Prince William has declined to reveal what he paid in taxes for the 2023 to 2024 financial year - a tradition that King Charles has partaken in for 30 years.\u00a0On Wednesday, the Duchy of Cornwall published an Integrated Annual Report showing the Prince of Wales' salary of $30.4 million (\u00a323.6 million)...",
  //     url: "https://www.foxnews.com/entertainment/prince-william-declined-reveal-what-hes-paid-taxes-breaking-king-charles-tradition",
  //     author: "Fox News",
  //     image:
  //       "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/06/1024/512/prince-william-queen-funeral.jpg?ve=1&tl=1",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:33:36 +0000",
  //   },
  //   {
  //     id: "600b8a15-8df2-4f65-afb6-c330bce81ebf",
  //     title:
  //       "'Inside the NBA' host Charles Barkley hints split with league was inevitable: 'Not sure TNT ever had a chance'",
  //     description:
  //       "Despite being one of the league's media partners for the past few decades, TNT's parent company, Warner Bros. Discovery (WBD) has lost its broadcasting rights deal to competitors.\u00a0On Wednesday, the NBA rejected a bid for WBD to exercise its right to match an offer from Amazon for a part of the leagu...",
  //     url: "https://www.foxnews.com/sports/inside-nba-host-charles-barkley-hints-split-league-inevitable-not-sure-tnt-ever-had-chance",
  //     author: "Fox News",
  //     image:
  //       "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/01/1024/512/Charles-Barkley3.jpg?ve=1&tl=1",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:29:00 +0000",
  //   },
  //   {
  //     id: "38416d96-073f-4ab6-9c21-f4326e24cac0",
  //     title:
  //       "Take it from me, Republicans: Kamala Harris is a strong candidate. Don't underestimate her",
  //     description:
  //       "President Joe Biden told the American people Wednesday night that he graciously decided to bow out of the 2024 election because he wanted to unite his party and focus on his job as president. It was baloney.In the most obvious display of pure political muscle, former House Speaker Nancy Pelosi and h...",
  //     url: "https://www.foxnews.com/opinion/take-from-me-republicans-kamala-harris-strong-candidate-dont-underestimate-her",
  //     author: "Fox News",
  //     image:
  //       "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/07/1024/512/Kamala-Harris-Israel.jpg?ve=1&tl=1",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:23:51 +0000",
  //   },
  //   {
  //     id: "d0c1c2cf-8399-4e7b-8128-9138698dd593",
  //     title:
  //       "Massive bull shark weighing nearly 500 pounds caught at Alabama fishing tournament",
  //     description:
  //       'A fishing crew recently set a new state record after reeling in a huge bull shark at the Alabama Deep Sea Fishing Rodeo.The Bon Secour Butchers team on "The Orca" vessel caught the 494.5-pound beast at the tournament on Dauphin Island."A catch like that coming through our weigh station really galvan...',
  //     url: "https://www.foxnews.com/lifestyle/massive-bull-shark-weighing-nearly-500-pounds-caught-alabama-fishing-tournament",
  //     author: "Fox News",
  //     image:
  //       "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/07/1024/512/fish-award.png?ve=1&tl=1",
  //     language: "en",
  //     category: ["general"],
  //     published: "2024-07-26 17:17:20 +0000",
  //   },
  //   {
  //     id: "dd2367c5-9a9e-4d95-bbd5-66dbbc7692d9",
  //     title:
  //       "Court Denies CBI's Plea To Arrest Former Gitanjali Group Executive In PNB Scam",
  //     description:
  //       "Varma, a former international business head of Mehul Choksi's Gitanjali Group, appeared before the court last week, almost seven years after the registration of the PNB fraud case.",
  //     url: "https://www.ndtvprofit.com/business/court-denies-cbis-plea-to-arrest-former-gitanjali-group-executive-in-pnb-scam",
  //     author: "PTI",
  //     image:
  //       "https://media.assettype.com/bloombergquint%2F2024-01%2F1cead2ea-2a2e-4454-8726-19ac1066aac9%2FPNB_FB.jpg?rect=0%2C0%2C1279%2C671&w=1200&auto=format%2Ccompress&ogImage=true",
  //     language: "en",
  //     category: ["general", "business"],
  //     published: "2024-07-26 17:16:43 +0000",
  //   },
  // ];

  const newsCategories = NEWS_CATEGORIES;

  const { data, loading, error } = useFetchData(
    // "https://newsapi.org/v2/top-headlines",
    "https://api.currentsapi.services/v1/latest-news",
    {
      category: "general",
      // pageSize: 7,
      page_size: 7,
    }
  );

  useEffect(() => {
    if (data) {
      setHotTopicData(data?.news?.slice(0, 4));
      setLatestReleaseData(data?.news?.slice(4));
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
