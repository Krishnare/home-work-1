"use strict";
class fetchdata {
  apiFetcher(url) {
    let globalData = {};
    fetch(url)
      .then(response => response.json())
      .then(myJson => newsSource.articlesProvider(myJson))
      .catch(error => console.log("Something went wrong on server"));
  }
}

class newsSourceProvider extends fetchdata {
  constructor(data) {
    super(data);
  }
  articlesProvider(data) {
    const elementId = document.getElementById("newsDetails");
    let returnHtml = "",
      uniqueVal = [];
    data.articles.map((article, index) => {
      uniqueVal = index === 0 ? `<h1>${article.author}</h1>` : "";
      returnHtml += `${uniqueVal}<div class="newsTitle">${
        article.title
      }</div><div class="newsDescription">${
        article.description
      }</div><div class="publishDate">${
        article.publishedAt
      }</div><div class="imageContainer"><a href="${
        article.url
      }" target="_blank"><img src=${article.urlToImage} /></a></div>`;
    });
    elementId.insertAdjacentHTML("afterbegin", returnHtml);
  }
}
const newsSource = new newsSourceProvider();
const instance = new fetchdata();
export default instance;
