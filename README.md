# API wFirma wrapper

Wrapper for wFirma API.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install.
```bash
npm install wfirma-api-wrapper
```
Full wFirma documentation [here](https://doc.wfirma.pl).

## Methods
* .find(action, page, limit)
* .get(action, id)

## Usage

```javascript
const wfirma = require('wfirma-api-wrapper');

let username = 'example@mail.com',
    password = 'YOUR-PASSWORD',
    companyId = '1111111',
    inputFormat = 'xml',
    outputFormat = 'json'

const wfirmaApi = new wfirma(username, password, companyId, inputFormat, outputFormat);

wfirmaApi.fields = ['Invoice.Id', 'Invoice.type', 'Invoice.fullnumber', 'Invoice.date'];

wfirmaApi.find('invoices', '1', '10')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

wfirmaApi.get('invoices', '111111')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
```
