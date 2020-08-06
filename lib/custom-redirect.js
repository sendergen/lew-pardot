module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/customRedirect/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/customRedirect/{{version}}/do/read/id/' + id);
    }

  };
};
