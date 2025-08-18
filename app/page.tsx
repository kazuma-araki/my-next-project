import style from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={style.top}>
        <div>
          <h1 className={style.title}>テクノロジーの力で世界を変える</h1>
          <p className={style.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>

        <Image
          className={style.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      <section className={style.news}>
        <h2 className={style.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={style.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
