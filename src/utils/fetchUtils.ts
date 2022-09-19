export const arrayOffset = (array: string[], offset: number) => {
  let obj = [];
  // loop through array with offset
  for (let i = offset; i < offset + 5; i++) {
    if (array[i] === undefined) {
      console.log("No more URL's to fetch.");
      break;
    }
    // Add link to array;
    obj.push(array[i]);
  }
  return obj;
};

export const fetchMultiple = async <
  T extends People | Film | Vehicle | Planet | Specie,
>(
  array: string[],
  offset: number,
) => {
  let prepareArray = arrayOffset(array, offset);

  if (prepareArray.length < 1) return null;

  console.info('Fetching data from offset: ' + offset);

  //Create promises to fetch at the same time
  let promises = prepareArray.map(async item =>
    fetch(item).then(response => response.json()),
  );

  //Retrive data from promises
  let data: T[] = await Promise.all(promises);

  console.info(`Data fetched at offset: ${offset}, max: ${array.length}`);

  return data;
};
