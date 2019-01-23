module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/tagObject/version/4/do/query', params);
    },

    read: function(id) {
      return client.execute('/tagObject/version/4/do/read/id/' + id);
    },

    removed: function(id) {
      return client.execute('/tagObject/version/4/do/delete/id/' + id);
    }

  };
};
