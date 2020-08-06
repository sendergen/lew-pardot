module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/form/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/form/version/{{version}}/do/read/id/' + id);
    }

  };
};
