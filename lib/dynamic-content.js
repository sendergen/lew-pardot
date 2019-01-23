module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/dynamicContent/version/4/do/query', params);
    },

    read: function(id) {
      return client.execute('/dynamicContent/version/4/do/read/id/' + id);
    }

  };
};
