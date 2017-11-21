/*let cookie=document.cookie.split(';');
let token;
for(let i=0;i<cookie.length;i++){
	if(cookie[i].indexOf('1505B-token')>-1){
		token=cookie[i].split('=')[1]
	}
}
export default token*/

export default function getToken (){
	let cookie=document.cookie.split(';');
	let token;
	for(let i=0;i<cookie.length;i++){
		if(cookie[i].indexOf('1505B-tocken')>-1){
			token=cookie[i].split('=')[1]
		}
	}
	return token
}