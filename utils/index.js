const cheerio = require("cheerio");
const axios = require("axios");

function sortBy(arr, prop) {
  return arr.sort(
    (a, b) => b[prop].replace(/(^\£|,)/g, "") - a[prop].replace(/(^\£|,)/g, "")
  );
}

const getPageHtml = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const cheerioInit = async (url) => cheerio.load(await getPageHtml(url));

module.exports = {
  sortBy,
  cheerioInit,
  getPageHtml,
};
