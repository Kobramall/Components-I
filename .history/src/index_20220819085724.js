import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'

  

  function articleMaker(artObj){
    const article = document.createElement("div");
    article.classList.add("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    p1.classList.add("date");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const span = document.createElement("span");
    span.classList.add("expandButton");

    h2.textContent = artObj.title;
    p1.textContent = artObj.date;
    p2.textContent = artObj.firstParagraph;
    p3.textContent = artObj.secondParagraph;
    p4.textContent = artObj.thirdParagraph;
    span.textContent = "+";
    
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(span);

    span.addEventListener("click", () =>{
        article.classList.toggle("article-open");
    })

   return article
}


data.forEach(element => {
    articleMaker(element);
});


