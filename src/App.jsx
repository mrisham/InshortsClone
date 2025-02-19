import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsContent from "./components/NewsContent";
import { API_KEY } from "./data/config";
import axios from "axios";
import Footer from "./components/Footer";
const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState(0);
  const getNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}`;
      const res = await axios.get(url);
      console.log(res);
      setNewsArray(res.data.articles);
      setNewsResults(res.data.totalResults);
      console.log(newsArray);
      console.log(newsResults);
    } catch (e) {
      console.log("Error", e);
    }
  };
  useEffect(() => {
    getNews();
  }, [category, newsResults]);
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsContent />
      <Footer />
    </div>
  );
};

export default App;
