module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/campaign/version/{{version}}/do/query', params);
    },

    read: function(id, params) {
      return client.execute('/campaign/version/{{version}}/do/read/id/' + id, params);
    },

    update: function(id, params) {
      return client.execute('/campaign/version/{{version}}/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/prospect/version/{{version}}/do/create', params);
    }

  };
};
