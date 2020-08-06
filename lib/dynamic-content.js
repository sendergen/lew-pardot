module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/dynamicContent/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/dynamicContent/version/{{version}}/do/read/id/' + id);
    }

  };
};
