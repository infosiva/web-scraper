const utils = require("../utils");
const config = require("../config");
const packageInfo = [];

async function performScraping() {
  // downloading the web page content
  // parsing the HTML source of the target web page with Cheerio
  const $ = await utils.cheerioInit(config.webScrapURL);

  // scraping the "pricing content/table" section
  $(".pricing-table").each((index, element) => {
    $(element)
      .find(".row-subscriptions")
      .find(".package")
      .each((_, element) => {
        const title = $(element).find(".header > h3").text();
        const package_features = $(element).find(".package-features");
        const package_description = $(package_features)
          .find(".package-description")
          .text();
        const package_price = $(package_features)
          .find(".package-price > .price-big")
          .text();

        const discount_price_withtext = $(package_features)
          .find(".package-price")
          .find('[style*="color: red"]')
          .text();

        let discountPriceAmount = null;
        if (discount_price_withtext) {
          discountPriceAmount = discount_price_withtext.match(
            /(\£[0-9]+(\.[0-9]{2})?)/
          )[0];
        }
        packageInfo.push({
          title,
          package_description,
          package_price,
          discountPriceAmount,
        });
      });
  });
  // converting the scraped data object to JSON
  const scrapedDataJSON = JSON.stringify(packageInfo);
  utils.sortBy(packageInfo, "package_price");
  console.log(scrapedDataJSON);
  console.table(packageInfo);
}

performScraping();
