let list:any[] = [];
const inputParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));
          
export function addParticipants(){

    if (inputParticipants.value !== '' && list.includes(inputParticipants.value) == false) {
       list.push(inputParticipants.value);
       console.log(list); 
    }else{
        inputParticipants.value = '';
        inputParticipants.placeholder = 'Insert a valid name';
        console.log('connected 2');
    }
}

export function btnCall(){
    btnAddParticipants.addEventListener('click', addParticipants);
}

console.log('connected 1');