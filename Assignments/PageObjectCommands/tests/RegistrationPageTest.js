module.exports = {




    'Validating Registration Page error message': function (browser) {
        var Register = browser.page.RegisterPage();

        Register.navigate()
            .submit()
            .validateError('User name or password is Invalid')

        browser.end();
    },
    'Validate Registration Page': function (browser) {
        var Register = browser.page.RegisterPage();

        Register.navigate()
            .validateForm()
    browser.end();

    }
}