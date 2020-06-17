const axios = require('axios');

module.exports = class wfirma {
    constructor(username, password, companyId, inputFormat, outputFormat) {
        this.username = username;
        this.password = password;
        this.authorization = {
            auth: {
                username: this.username,
                password: this.password
            }
        }
        this.companyId = companyId;
        this.inputFormat = inputFormat;
        this.outputFormat = outputFormat;
    }

    clone = (obj) => Object.assign({}, obj);

    renameKey = (object, key, newKey) => {
        const clonedObj = this.clone(object),
            targetKey = clonedObj[key];

        delete clonedObj[key];

        clonedObj[newKey] = targetKey;

        return clonedObj;

    };

    fields = [];

    find = (action, pageValue, limitValue) => {
        this.body = this.renameKey(this.body, 'invoices', action);

        if (pageValue && limitValue) {
            this.body[action]['parameters'] = {
                page: pageValue,
                limit: limitValue
            }
        }

        if (this.fields) {
            let temp = [];

            this.fields.forEach(field => {
                temp.push({field: field});

                this.body[action]['parameters']['fields'] = temp;
            })
        }

        let request =
            axios.post(`https://api2.wfirma.pl/${action}/find?companyId=${this.companyId}&inputFormat=${this.inputFormat}&outputFormat=${this.outputFormat}`, this.body, this.authorization);

        return request;
    }

    get = (action, id) => {
        let request =
            axios.get(`https://api2.wfirma.pl/${action}/get/${id}?companyId=${this.companyId}&inputFormat=${this.inputFormat}&outputFormat=${this.outputFormat}`, this.authorization);

        return request;
    }

    body = {
        invoices: {
            parameters: {
            }
        }
    }
}

