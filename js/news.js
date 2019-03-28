"use strict";
class fetchdata {
  apiFetcher(url) {
    fetch(url)
      .then(response => response.json())
      .then(myJson => newsSource.articlesProvider(myJson))
      .catch(error => newsSource.articlesProvider(myJson));
  }
  apiSourceFetcher(url) {
    fetch(url)
      .then(response => response.json())
      .then(myJson => newsSource.newsSourceChannel(myJson.sources))
      .catch(error =>
        console.log("News Source Channel || Something went wrong on server")
      );
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
    if (data.status === "error") {
      returnHtml = `<div id="error">${data.message}</div>`;
    } else {
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
    }
    elementId.innerHTML = returnHtml;
  }
  newsSourceChannel(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
  selectOnchange(currentVal) {
    console.log("currentVal", this);
  }
}
const newsSource = new newsSourceProvider();
const instance = new fetchdata();
export default instance;
