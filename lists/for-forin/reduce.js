const { searchPeople } = require("./service");

Array.prototype.myReduce = function (callback, initValue) {
  let endValue = typeof initValue !== undefined ? initValue : this[0];
  for (let int = 0; int <= this.length - 1; int++) {
    endValue = callback(endValue, this[int], this);
  }
  return endValue;
};

async function main() {
  try {
    const { results } = await searchPeople("a");
    const datas = { reduce: [], myReduce: [] };

    const height = results.map((item) => parseInt(item.height));

    datas.reduce = height.reduce((last, next) => {
      return last + next;
    });

    const myList = [
      ["blabla", "blablablabla"],
      ["blablablablavblavkavka", "blablablablablablabla"],
    ];
    datas.myReduce = myList
      .myReduce((last, next) => {
        return last.concat(next);
      }, [])
      .join(", ");

    console.log(datas);
  } catch (error) {
    console.log(error);
  }
}

main();
