module.exports = {

    beforeEach: function () {

        console.log('Starting Test');
    },

    'Test': function (browser) {
        var login = browser.page.Login_WithSection();
        login.navigate();
        login.expect.section('@logininput').to.be.visible;

        var logininputsection = login.section.logininput;
        logininputsection.expect.element('@username').to.be.visible;
        logininputsection.expect.element('@password').to.be.visible;

        browser.end()

    },
    after: function () {

        console.log('Ending Test');

    }

}