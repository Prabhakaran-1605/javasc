
setTimeout(() => {
	console.log(4)
},3000)

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
  	resolve(3)
  },3000)
})
promise1.then((res) => console.log(res))

let a = ()=>{console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	console.log(10)
	}
	a();




