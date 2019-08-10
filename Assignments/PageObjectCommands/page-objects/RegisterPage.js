var registerCommands = {
    validateForm: function () {
        return this.waitForElementVisible('#registerfrm', 1000)
            .verify.visible('@username')
            .verify.visible('@password')
            .verify.value('@Registersubmit', 'Register')
            .verify.elementPresent('@RegisterPagemessage')
    },

    fillInRegistrationForm: function (username, password, email) {
        return this.waitForElementVisible('#registerfrm', 1000)
            .setValue('@username', 'ArunKumarc')
            .setValue('@password', password)
            .setValue('@email', 'ArunKumarC@hexaware.com')
    },
    submit: function () {
        return this.verify.value('@Registersubmit', 'Register')
            .click('@Registersubmit')
    },
    validateError: function (errorMessage) {
        return this.verify.visible('@error')
            .verify.containsText('@error', errorMessage)
           
    }
};

module.exports = {
    commands: [registerCommands],
    url: function () {
        return this.api.launchUrl+'/register';
    },
    elements: {
        username: {
            selector: 'input[name=user_name]'
        },
        password: {
            selector: 'input[name=password]'
        },
        email: {
            selector: 'input[name=email]'
        },
        Registersubmit: {
            selector: 'input[type=submit]'
        },

        RegisterPagemessage: {
            selector: 'h3'

        },
        error: {
            selector: '#error'
        }



    }
}