import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsContent from "./components/NewsContent";
import "./App.css";
import { API_KEY } from "./data/config";
import axios from "axios";
import Footer from "./components/Footer";
const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState(0);
  const [loadMore, setLoadMore] = useState(10);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    try {
      setLoading(true);
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = "https://newsapi.org/v2/top-headlines";
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${category}&pageSize=${loadMore}`;
      const res = await axios.get(url);
      // console.log(res);
      setNewsArray(res.data.articles);
      setNewsResults(res.data.totalResults);
      // console.log(newsArray);
      // console.log(newsResults);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNews();
  }, [category, newsResults, loadMore]);
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsContent
        newsResults={newsResults}
        newsArray={newsArray}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default App;
