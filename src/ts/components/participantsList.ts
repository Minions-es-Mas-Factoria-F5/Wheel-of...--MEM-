import {fillRoulette} from "./roulette";

let list:any[] = [];
const inputParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));

export function addParticipants(){

    let participantsValue= inputParticipants.value;

    if (participantsValue !== '' && list.includes(participantsValue) == false) {
       list.push(participantsValue);
       console.log(list);
       fillRoulette(participantsValue);
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