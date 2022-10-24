function getArticleGenerator(articles) {
const divEl=document.getElementById('content');
   return function(){
    const article=articles.shift();
    if(article!==undefined){
        const element=document.createElement('article');
        element.textContent=article;
        divEl.appendChild(element);
    }
    
   }
}
