
'use strict';
class fetchdata {
  fetchResults(url) {
    let globalData = {};
    fetch(url)
      .then(response => response.json())
      .then(myJson => instance.printResults(myJson))
      .catch(error => { console.log("Something went wrong on server") });
  }
  printResults(data) {
    const elementId = document.getElementById('newsDetails');
    let returnHtml = "",
      uniqueVal = [];
    data.articles.map((article, index) => {
      uniqueVal = index === 0 ? `<h1>${article.author}</h1>` : "";
      returnHtml += `${uniqueVal}<div class="newsTitle">${article.title}</div><div class="newsDescription">${article.description}</div><div class="publishDate">${article.publishedAt}</div><div class="imageContainer"><a href="${article.url}" target="_blank"><img src=${article.urlToImage} /></a></div>`;
    });
    elementId.insertAdjacentHTML('afterbegin', returnHtml);
  }
}
const instance = new fetchdata();
export default instance;