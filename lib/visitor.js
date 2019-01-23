module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitor/version/4/do/query', params);
    },

    assign: function(id, params) {
      return client.execute('/visitor/version/4/do/assign/id/' + id, params);
    },

    read: function(id) {
      return client.execute('/visitor/version/4/do/read/id/' + id);
    }

  };
};
