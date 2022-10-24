window.addEventListener("load", solve);

function solve() {
  let firstNameEl=document.getElementById('first-name');
  let lastNameEl=document.getElementById('last-name');
  let ageEl=document.getElementById('age');
  let storyTitleEl=document.getElementById('story-title');
  let ganreEl=document.getElementById('genre');
  let storyEl=document.getElementById('story');

  let publishBtn=document.getElementById('form-btn');
  publishBtn.addEventListener('click',publish);

  let priviewUl=document.getElementById('preview-list');

  function publish(event){
   event.preventDefault();
   if(firstNameEl.value!==''&&lastNameEl.value!==''&&ageEl.value!==''&&storyTitleEl.value!==''&&storyEl.value!==''){
      let firstName=firstNameEl.value;
      let lastName=lastNameEl.value;
      let age=ageEl.value;
      let storyTitle=storyTitleEl.value;
      let ganre=ganreEl.value;
      let story=storyEl.value;
      
      let liEl=document.createElement('li');
      liEl.classList='story-info';
      priviewUl.appendChild(liEl);

      let articleEl=document.createElement('article');
      liEl.appendChild(articleEl);

      let h4El=document.createElement('h4');
      h4El.textContent=`Name: ${firstName} ${lastName}`;
      articleEl.appendChild(h4El);

      let ageP=document.createElement('p');
      ageP.textContent=`Age: ${age}`;
      articleEl.appendChild(ageP);

      let titleP=document.createElement('p');
      titleP.textContent=`Title: ${storyTitle}`;
      articleEl.appendChild(titleP);

      let genreP=document.createElement('p');
      genreP.textContent=`Genre: ${ganre}`;
      articleEl.appendChild(genreP);

      let storyP=document.createElement('p');
      storyP.textContent=story;
      articleEl.appendChild(storyP);

      let saveBtn=document.createElement('button');
      saveBtn.classList='save-btn';
      saveBtn.textContent='Save Story';
      liEl.appendChild(saveBtn);

      let editBtn=document.createElement('button');
      editBtn.classList='edit-btn';
      editBtn.textContent='Edit Story';
      liEl.appendChild(editBtn);

      let deleteBtn=document.createElement('button');
      deleteBtn.classList='delete-btn';
      deleteBtn.textContent='Delete Story';
      liEl.appendChild(deleteBtn);

      firstNameEl.value='';
      lastNameEl.value='';
      ageEl.value='';
      storyTitleEl.value='';
      ganreEl.value='';
      storyEl.value='';

      publishBtn.disabled=true;

      let editButton=document.querySelector('.edit-btn');
      editButton.addEventListener('click',edit);

      let saveButton=document.querySelector('.save-btn');
      let deleteButton=document.querySelector('.delete-btn');

      deleteButton.addEventListener('click',deleteStory);
      saveButton.addEventListener('click',saveStory);

      function edit(){
        firstNameEl.value=firstName;
        lastNameEl.value=lastName;
        ageEl.value=age;
        storyTitleEl.value=storyTitle;
        ganreEl.value=ganre;
        storyEl.value=story;

        publishBtn.disabled=false;
        editButton.disabled=true;
        saveButton.disabled=true;
        deleteButton.disabled=true;

        liEl.parentNode.removeChild(liEl);
   }

   function deleteStory(){
      liEl.parentNode.removeChild(liEl);
      publishBtn.disabled=false;
   }

   function saveStory(){
     let mainDiv=document.getElementById('main');
     mainDiv.parentNode.removeChild(mainDiv);
     let body=document.querySelector('.body');

     let h1El=document.createElement('h1');
     h1El.textContent='Your scary story is saved!';
     body.appendChild(h1El);
   }
  }
}
}
