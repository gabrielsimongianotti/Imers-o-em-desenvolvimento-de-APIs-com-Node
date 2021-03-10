const service = require('./service')

Array.prototype.myMap = function(callback) {
  const newArrayMap = [];

  for (let int = 0; int <= this.length - 1; int++) {
    const result = callback(this[int], int);
    newArrayMap.push(result)
  }
  return newArrayMap;
}

async function main (){
  try{
    const result = await service.searchPeople('a');
    const datas = {forEach:[], map:[], myMap:[]};

    console.time('forEach')
    result.results.forEach(item=>{
      datas.forEach.push(item.name);
    })
    console.timeEnd('forEach')
   
    console.time('map')
    datas.map = result.results.map(item=>item.name)
    console.timeEnd('map')

    console.time('myMap')
    datas.myMap = result.results.myMap(item => item.name)
    console.timeEnd('myMap')
    console.log(datas);
  }catch(error){
    console.log(error);
  }
}

main()