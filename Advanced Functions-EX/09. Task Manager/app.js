function solve() {
    let addButton=document.getElementById('add');
    const [_,openSection,progessSection, finishedSection]=Array.from(document.querySelectorAll('section')).map(e=>e.children[1]);

    const input={
        name:document.getElementById('task'),
        description: document.getElementById('description'),
        date:document.getElementById('date')
    }
    addButton.addEventListener('click',addTask);
    function addTask(event){
        event.preventDefault();
        const article=document.createElement('article');
        article.appendChild(createElement('h3',input.name.value));
        article.appendChild(createElement('p',`Description: ${input.description.value}`));
        article.appendChild(createElement('p',`Due Date: ${input.date.value}`));
        const div=createElement('div','','flex');
        const startButton=createElement('button','Start','green');
        div.appendChild(startButton);
        const deleteButton=createElement('button','Delete','red');
        div.appendChild(deleteButton);
        const finishButton=createElement('button','Finish','orange');
        article.appendChild(div);
        openSection.appendChild(article);

        Object.values(input).forEach(i => i.value='');

        deleteButton.addEventListener('click',onDelete);
        startButton.addEventListener('click',onStart);
        finishButton.addEventListener('click',onFinish);

        function onDelete(){
            article.remove();
        }
        function onStart(){
            startButton.remove();
            div.appendChild(finishButton);
            progessSection.appendChild(article);
        }
        function onFinish(){
            startButton.remove();
            finishButton.remove();
            deleteButton.parentElement.remove();
            deleteButton.remove();
            finishedSection.appendChild(article);
        }
    }


    function createElement(type,content,className){
        const element=document.createElement(type);
        element.textContent=content;
        if(className){
            element.className=className;
        }
        return element;
    }
}