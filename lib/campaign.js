module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/campaign/version/4/do/query', params);
    },

    read: function(id, params) {
      return client.execute('/campaign/version/4/do/read/id/' + id, params);
    },

    update: function(id, params) {
      return client.execute('/campaign/version/4/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/prospect/version/4/do/create', params);
    }

  };
};
