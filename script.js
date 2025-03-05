//your JS code here. If required.
async function msg() {
	let promise = new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(1);
		},2000)
	})
	let res = await promise;
	console.log("")
}