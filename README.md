# WebScarper

This is a console application to do a webscraping the website content and formatting the table with the required field information about the package they are offering.

## Getting Started

**Node Version**  
Make sure use following node version for development

`node v19.7.0`  
`npm 9.5.0`  

<br/>  

**Install Project Dependencies**

`npm install`

**Run Project Locally**

`npm run start` 

This will run a project in console running mode and print the package information in a table format as below

┌─────────┬──────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────┬───────────────┬─────────────────────┐
│ (index) │              title               │                                  package_description                                  │ package_price │ discountPriceAmount │
├─────────┼──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────┼───────────────┼─────────────────────┤
│    0    │  'Optimum: 24GB Data - 1 Year'   │ 'Up to 12GB of data per year including 480 SMS(5p / MB data and 4p / SMS thereafter)' │   '£174.00'   │      '£17.90'       │
│    1    │  'Standard: 12GB Data - 1 Year'  │ 'Up to 12GB of data per year including 420 SMS(5p / MB data and 4p / SMS thereafter)' │   '£108.00'   │      '£11.90'       │
│    2    │    'Basic: 6GB Data - 1 Year'    │  'Up to 6GB of data per yearincluding 240 SMS(5p / MB data and 4p / SMS thereafter)'  │   '£66.00'    │       '£5.86'       │
│    3    │ 'Optimum: 2 GB Data - 12 Months' │       '2GB data per monthincluding 40 SMS(5p / minute and 4p / SMS thereafter)'       │   '£15.99'    │        null         │
│    4    │ 'Standard: 1GB Data - 12 Months' │   'Up to 1 GB data per monthincluding 35 SMS(5p / MB data and 4p / SMS thereafter)'   │    '£9.99'    │        null         │
│    5    │ 'Basic: 500MB Data - 12 Months'  │ 'Up to 500MB of data per monthincluding 20 SMS(5p / MB data and 4p / SMS thereafter)' │    '£5.99'    │        null         │
└─────────┴──────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────┴───────────────┴─────────────────────


**Run Test**

`npm run test` 

This will run all the test in `tests` folders the project. 

Dependancies
> `jest` for testing 

<br/>  

**Linting**

`npm run lint` 

<br/>


