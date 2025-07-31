function registerSw(){
	console.log('hello world');
	if('serviceWorker' in navigator){
	console.log('sw available');
		navigator.serviceWorker.register('/sw.js')
		.then(registration =>{console.log('sw registered', registration.scope);})
		.catch(e=>{console.log('registration failed',e);});
	}
}