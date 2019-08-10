
module.exports = {
    'Login Page Initial Render': function (browser) {
        var login = browser.page.loginPage();

        login.navigate()
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .verify.visible('@username')
            .verify.visible('@password')
            .verify.value('@submit', 'Login')
            .verify.elementNotPresent('@error')

        browser.end();
    },
};
