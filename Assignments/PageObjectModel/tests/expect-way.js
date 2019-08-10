module.exports = {
    'BDD EXPECT': function (client) {
        client
            .url('http://localhost:8888/login');
        client.pause(1000);
        client.expect.element('body').to.be.present.before(1000);
        client.expect.element('body').to.have.css('display');
        client.expect.element("input[name=user_name]").to.be.an('input')
        client.expect.element("input[name=user_name]").to.be.visible;
        client.end();
    }

}