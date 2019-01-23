module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/prospectAccount/version/4/do/query', params);
    },

    create: function(params) {
      return client.execute('/prospectAccount/version/4/do/create', params);
    },

    describe: function() {
      return client.execute('/prospectAccount/version/4/do/describe');
    },

    read: function(id) {
      return client.execute('/prospectAccount/version/4/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/prospectAccount/version/4/do/update/id/' + id, params);
    }

  };
};
