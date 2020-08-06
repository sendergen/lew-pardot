module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/tag/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/tag/version/{{version}}/do/read/id/' + id);
    }

  };
};
