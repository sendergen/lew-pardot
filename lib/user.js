module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/user/version/4/do/query', params);
    },

    readByEmail: function(email) {
      return client.execute('/user/version/4/do/read/email/' + email);
    },

    readById: function(id) {
      return client.execute('/user/version/4/do/read/id/' + id);
    }

  };
};
