const fetch = require("node-fetch");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  async function getCat() {
    let resp = await fetch("https://cataas.com/cat/cute/says/Serverless", {
      method: "GET",
    });

    let data = await resp.arrayBuffer();
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

    var base64data = Buffer.from(data).toString("base64");
    // put what you want to turn into base64 inside "originaldata"
    //"originaldata" will be encoded in base64.

    return base64data;
  }

  let catpic1 = await getCat();
  let catpic2 = await getCat();

  function getNames() {
    var names = [
      "Shreya",
      "Emily",
      "Fifi",
      "Beau",
      "Evelyn",
      "Julia",
      "Daniel",
      "Fardeen",
    ];
    var random_value = Math.floor(names.length * Math.random());
    var resultname = names[random_value];

    return resultname;
  }

  let nameOne = getNames();
  let nameTwo = getNames();

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      cat1: catpic1,
      cat2: catpic2,
      names: [nameOne, nameTwo],
    },
  };
};
