module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/customField/version/{{version}}/do/query', params);
    },

    read: function(id) {
      return client.execute('/customField/version/{{version}}/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/customField/version/{{version}}/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/customField/version/{{version}}/do/create', params);
    },

    delete: function(id) {
      return client.execute('/customField/version/{{version}}/do/delete/id/' + id);
    },

  };
};
