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

    find = action =>
        axios.get(`https://api2.wfirma.pl/${action}/find?companyId=${this.companyId}&inputFormat=${this.inputFormat}&outputFormat=${this.outputFormat}`, this.authorization);

    get = (action, id) =>
        axios.get(`https://api2.wfirma.pl/${action}/get/${id}?companyId=${this.companyId}&inputFormat=${this.inputFormat}&outputFormat=${this.outputFormat}`, this.authorization);

}

