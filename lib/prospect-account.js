module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/prospectAccount/version/{{version}}/do/query', params);
    },

    create: function(params) {
      return client.execute('/prospectAccount/version/{{version}}/do/create', params);
    },

    describe: function() {
      return client.execute('/prospectAccount/version/{{version}}/do/describe');
    },

    read: function(id) {
      return client.execute('/prospectAccount/version/{{version}}/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/prospectAccount/version/{{version}}/do/update/id/' + id, params);
    }

  };
};
