const service = require('./service')

async function main (){
  try{
    const result = await service.searchPeople('r');
    const datas = {for:[], forIn:[], forOf:[]};

    console.time('for')
    for(let i =0; i<= result.results.length-1; i++){
      const people = result.results[i];

      datas.for.push(people.name);
    }
    console.timeEnd('for')
   
    console.time('for in')
    for(let i in result.results){
      const people = result.results[i];

      datas.forIn.push(people.name);
    }
    console.timeEnd('for in')

    console.time('for of')
    for(people of result.results){
      datas.forOf.push(people.name);
    }
    console.timeEnd('for of')

    console.log(datas);
  }catch(error){
    console.log(error);
  }
}

main()