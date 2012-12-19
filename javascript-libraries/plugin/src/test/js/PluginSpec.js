expect = chai.expect;

describe('Plugin', function() {

    var plugin;

    beforeEach(function(done) {

        if(plugin) {
            done();
        }
        else {

            require(['plugin'], function (pluginImpl) {
                plugin = pluginImpl;
                done();
            });

        }

    });

    it('should be an object.', function () {
        expect(plugin).to.be.an('object');
    });

    it('should have install method.', function () {
        expect(plugin).to.have.a.property('install').that.is.a('function');
    });

    it('should have uninstall method.', function () {
        expect(plugin).to.have.a.property('uninstall').that.is.a('function');
    });

    it('should have require method.', function () {
        expect(plugin).to.have.a.property('require').that.is.a('function');
    });

    it('should have undef method.', function () {
        expect(plugin).to.have.a.property('undef').that.is.a('function');
    });

    it('should have getPlugins method.', function () {
        expect(plugin).to.have.a.property('getPlugins').that.is.a('function');
    });

    it('\'s install and require methods should be same.', function () {
        expect(plugin.install).to.equal(plugin.require);
    });

    it('\'s uninstall and undef methods should be same.', function () {
        expect(plugin.uninstall).to.equal(plugin.undef);
    });

    it('should install module.', function(done) {
        var spy = sinon.spy();
        define('webmodule', function() {
            return spy;
        });

        plugin.install(['webmodule']).then(function(webmodule) {
            expect(webmodule).to.equal(spy);
            done();
        });
    });

    it('should uninstall module.', function(done) {
        var spy = sinon.spy();
        define('webmodule', function() {
            return spy;
        });

        plugin.install(['webmodule']).then(function(webmodule) {

            plugin.uninstall('webmodule')
                .then(spy)
                .then(_.delay(function() {
                    expect(spy.calledOnce).to.be.ok;
                    done();
                }, 100));

            
        }, function() {
            done(new Error('plugin is not installed'));
        });
    });

    it('should execute failure callback if a module is not installed', function(done) {
        plugin.install(['webmodule']).then(function(webmodule) {
            done(new Error('plugin is installed'));
        }, function (err) {
            done();
        });
    });

    it('should execute failure callback if a module is not installed. If the module is retrieved later, it should not execute previous success callback.', function(done) {
        var spy = sinon.spy();

        plugin.install(['webmodule'])
            .then(spy)
            .fail(function() {

                define('webmodule', function() {
                    return spy;
                });

                plugin.install(['webmodule'])
                    .then(spy)
                    .then(function() {
                        expect(spy.calledOnce).to.be.ok;
                        done();
                    });
            });
    });

    it('should execute getState and unload methods when uninstalling.', function(done) {

        var spy = sinon.spy();
        define('webmodule', function() {
            return {
                getState: spy,
                setState: spy,
                unload: spy
            };
        });

        plugin.install(['webmodule']).then(function(webmodule) {

            plugin.uninstall('webmodule').then(function() {
                expect(spy.calledTwice).to.be.ok;
                done();
            });

        }, function() {
            done(new Error('plugin is not installed'));
        });

    });

    it('should execute setState method when installing, if a state is found.', function(done) {

        var webmodule = {
                getState: function () {
                    return 0;
                },
                setState: function (state) {
                }
            },
            getStateSpy = sinon.spy(webmodule, 'getState'),
            setStateSpy = sinon.spy(webmodule, 'setState');

        define('webmodule', function() {
            return webmodule;
        });

        // plugin.install(['webmodule']).then(function(webmodule) {
            
        //     plugin.uninstall('webmodule').then(function() {
        //         expect(getStateSpy.calledOnce).to.be.ok;

        //         define('webmodule', function() {
        //             return webmodule;
        //         });

        //         plugin.install(['webmodule']).then(function(webmodule) {
        //             expect(setStateSpy.calledOnce).to.be.ok;
        //             expect(setStateSpy.withArgs(0).calledOnce).to.be.ok;
        //             done();
        //         });
        //     });

        // }, function() {
        //     done(new Error('plugin is not installed'));
        // });

        plugin.install(['webmodule'])
            .then(function(webmodule) {
                return plugin.uninstall('webmodule');
            }, function () {
                done(new Error('plugin is not installed'));
            })
            .pipe(function() {
                expect(getStateSpy.calledOnce).to.be.ok;

                define('webmodule', function() {
                    return webmodule;
                });

                return plugin.install(['webmodule']);
            })
            .pipe(function () {
                expect(setStateSpy.calledOnce).to.be.ok;
                expect(setStateSpy.withArgs(0).calledOnce).to.be.ok;
                done();
            });

    });

});