"use client";

import ArticlesCard from "@/components/Cards/ArticlesCard";
import useGetArticles from "@/libs/articles/queries/useGetArticles";
import { FC } from "react";

const Articles: FC = () => {
  const { data } = useGetArticles();

  const articles = data?.data;

  if (!articles) return null;

  return (
    <section
      id="articles"
      className="flex flex-col gap-6 scroll-m-24 lg:scroll-m-36"
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-unbounded text-xl lg:text-4xl font-bold text-[#0B7373]">
          Articles
        </h1>
        <p className="text-base lg:text-2xl text-[#0B7373]">
          Our curated writings, offering something for every reader.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <ArticlesCard
            key={index}
            image={article.featured_image}
            title={article.title}
            href={`https://pandooin.com/blog/article/${article.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
