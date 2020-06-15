# API wFirma wrapper

Wrapper for wFirma API.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install.

```bash
npm install wfirmaApiWrapper
```

## Usage

```javascript
const wfirma = require('wfirmaAPIWrapper');

let username = 'example@mail.com',
    password = 'YOUR-PASSWORD',
    companyId = '1111111',
    inputFormat = 'xml',
    outputFormat = 'json'

const wfirmaApi = new wfirma(username, password, companyId, inputFormat, outputFormat);

wfirmaApi.find('invoices')
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
