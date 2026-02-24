
function view(){

 if(currentStatus ==='all-btn'){
  cardContainer.classList.remove('hidden');
  noJobSection.classList.add('hidden');
  filterSection.classList.add('hidden');
 }
 
 else if(currentStatus ==='reject-top-btn'){
  
  if(rejectedList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
      noJobSection.classList.add('hidden');
  }
  renderReject()

 }
 else if(currentStatus ==='interview-top-btn'){
  if(interviewList.length == 0){
    cardContainer.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
  else{
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
     noJobSection.classList.add('hidden');
  }
  renderInterview()
  

 }

}