module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/user/version/{{version}}/do/query', params);
    },

    readByEmail: function(email) {
      return client.execute('/user/version/{{version}}/do/read/email/' + email);
    },

    readById: function(id) {
      return client.execute('/user/version/{{version}}/do/read/id/' + id);
    }

  };
};
