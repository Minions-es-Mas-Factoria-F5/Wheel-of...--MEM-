let list:any[] = [];
const inputParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));
          
function addParticipants(){

    if (inputParticipants.value !== '' && list.includes(inputParticipants.value) == false) {
       list.push(inputParticipants.value);
       console.log(list); 
    }else{
        inputParticipants.value = '';
        inputParticipants.placeholder = 'Insert a valid name';
        console.log('connected 2');
    }
}

console.log('connected 1');

btnAddParticipants.addEventListener('click', addParticipants);

export default addParticipants;