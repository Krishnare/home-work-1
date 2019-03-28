import instance from "./news.js";
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
// Intial Loading Time
const newsCategory = "bbc-news";
const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
const sourceUrl =
  "https://newsapi.org/v2/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1";

//On change load
const sourceSelectBox = document.getElementById("newsSource");
sourceSelectBox.onchange = function() {
  const newsCategory = this.value;
  const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
  instance.apiFetcher(url);
};
instance.apiFetcher(url);
instance.apiSourceFetcher(sourceUrl);
