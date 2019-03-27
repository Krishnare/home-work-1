
'use strict';
class fetchdata {
  // constructor(data) {
  // }
  fetchResults(url) {
    let globalData = {};
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        globalData = myJson;
        instance.printResults(globalData);
      })
      .catch(error => { console.log("Something went wrong on server") });
  }
  printResults(data) {
    let elementId = document.getElementById('newsDetails');
    let returnHtml = "",
      uniqueVal = [];
    data.articles.map((value, index) => {
      uniqueVal = `<h1>${value.author}</h1>`
      if (index > 0) {
        uniqueVal = "";
      }
      returnHtml += `${uniqueVal}<div class="newsTitle">${value.title}</div><div class="newsDescription">${value.description}</div><div class="publishDate">${value.publishedAt}</div><div class="imageContainer"><a href="${value.url}" target="_blank"><img src=${value.urlToImage} /></a></div>`;
    });
    elementId.insertAdjacentHTML('afterbegin', returnHtml);
  }
}
const instance = new fetchdata();
export default instance;