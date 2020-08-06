module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitor/version/{{version}}/do/query', params);
    },

    assign: function(id, params) {
      return client.execute('/visitor/version/{{version}}/do/assign/id/' + id, params);
    },

    read: function(id) {
      return client.execute('/visitor/version/{{version}}/do/read/id/' + id);
    }

  };
};
