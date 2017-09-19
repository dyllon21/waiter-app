const assert = require('assert');
const Models = require('../models/waiterModel');
describe('Models should be able to', function() {

  var models = Models('mongodb://localhost/waiters-tests');

  beforeEach(function(done) {
  waiterModel.remove({}, function(err) {
      done(err);
    });
  });
  it('store Waiters to mongodb', function(done) {

    var WaiterData = {
      name: 'the test waiter'
    };
    waiterModel.create(WaiterData, function(err) {
      // done(err);

      waiterModel.find({
        name: 'the test waiter'
      }, function(err, waiters) {
        assert.equal(1, waiters.length);
        done(err);
      });


    });
  });

  it('should not allow dupicate Waiters', function(done){
  var WaiterData = {
    name: 'the test waiter'
  };
  waiterModel.create(WaiterData, function(err) {
    var WaiterData = {
      name: 'the test waiter'
    };
      waiterModel.create(WaiterData, function(err) {
        assert.ok(err, 'should give an error for duplicates Waiters')
        done();
  });
});
});
});
