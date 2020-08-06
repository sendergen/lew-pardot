module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visit/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/visit/version/{{version}}/do/read/id/' + id);
    }

  };
};
