module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitorActivity/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/visitorActivity/version/{{version}}/do/read/id/' + id);
    }

  };
};
