import { useEffect, useState } from "react";
import { fetchShows } from "../services/tvmaze";
import { getEntertainmentNews } from "../services/news";
import MovieCard from "../components/MovieCard";
import "./Home.css";

export default function Home() {
  const [shows, setShows] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const showsData = await fetchShows();
        const newsData = await getEntertainmentNews();

        setShows(showsData);
        setNews(newsData.slice(0, 6)); // limit news
      } catch (error) {
        console.error("Home page error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="container home-page">Loading...</div>;
  }

  return (
    <div className="container home-page">

      {/* 🎬 Popular Shows Section */}
      <h2 className="section-title">Popular Shows</h2>

      <div className="row">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} />
        ))}
      </div>

      {/* 📰 Entertainment News Section */}
      <h2 className="section-title mt-5">Latest Entertainment News</h2>

      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="news-card">

              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="news-image"
                />
              )}

              <div className="news-content">
                <h6>{article.title}</h6>
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-light"
                >
                  Read More
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}