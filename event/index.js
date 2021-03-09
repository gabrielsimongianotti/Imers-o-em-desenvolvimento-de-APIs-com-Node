const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter;
const nameEmmitter = 'usuario:click';

myEmitter.on(nameEmmitter, (click) =>{
  console.log('a user click',click )
})

// myEmitter.emit(nameEmmitter,'scroll bar')

// let count =0;
// setInterval(() =>{
//   myEmitter.emit(nameEmmitter,'scroll bar'+(count++))
// }, 1000)
const stdin = process.openStdin()

const main = () => {
  return new Promise((resolve, reject) =>{
    stdin.addListener('data',(value) =>{
      return resolve(value)
    })
  })
}

main()
.then((result) => {
  console.log(result.toString())
})