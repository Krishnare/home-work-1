import instance from './news.js';
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1"
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;
instance.fetchResults(url);