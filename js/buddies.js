const loadBuddies=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddies(data));
}
loadBuddies();
const displayBuddies=data=>{
    const buddies=data.results;
    console.log(buddies)
    const buddiesDiv=document.getElementById('buddies');
    for(const buddy of buddies){
       const p=document.createElement('p');
       p.innerText=`email:${buddy.email} name: ${buddy.name.first}`;
       buddiesDiv.appendChild(p);
    }
}