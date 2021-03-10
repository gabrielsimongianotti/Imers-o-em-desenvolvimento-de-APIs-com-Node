const { searchPeople } = require("./service");

Array.prototype.myFilter = function (callback) {
  const newArrayFilter = [];

  for (let item in this) {
    const result = callback(this[item], item, this);
    if (!result) continue;
    newArrayFilter.push(this[item]);
  }
  return newArrayFilter;
};

async function main() {
  try {
    const { results } = await searchPeople("a");
    const datas = { filter: [], myFilter: [] };

    console.time("filter");
    const familyLars = results.filter(
      ({ name }) => name.toLowerCase().indexOf("lars") !== -1
    );
    console.timeEnd("filter");

    datas.filter = familyLars.map(({ name }) => name);

    console.time("myFilter");
    const familyLarsWithMyFilter = results.myFilter((item, index, lista) => {
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });
    datas.myFilter = familyLarsWithMyFilter.map(({ name }) => name);
    console.timeEnd("myFilter");

    // console.time("myMap");
    // datas.myMap = result.results.myMap((item) => item.name);
    // console.timeEnd("myMap");
    console.log(datas);
  } catch (error) {
    console.log(error);
  }
}

main();
