module.exports = function(client) {

  return {

    assignByEmail: function(email, params) {
      return client.execute('/prospect/version/4/do/assign/email/' + email, params);
    },

    assignById: function(id, params) {
      return client.execute('/prospect/version/4/do/assign/id/' + id, params);
    },

    unassignByEmail: function(email) {
      return client.execute('/prospect/version/4/do/unassign/email/' + email);
    },

    unassignById: function(id) {
      return client.execute('/prospect/version3/do/assign/id/' + id);
    },

    query: function(params) {
      return client.execute('/prospect/version/4/do/query', params);
    },

    create: function(email, params) {
      return client.execute('/prospect/version/4/do/create/email/' + email, params);
    },

    readById: function(id) {
      return client.execute('/prospect/version/4/do/read/id/' + id);
    },

    readByEmail: function(email) {
      return client.execute('/prospect/version/4/do/read/email/' + email);
    },

    updateById: function(id, params) {
      return client.execute('/prospect/version/4/do/update/id/' + id, params);
    },

    updateByEmail: function(email, params) {
      return client.execute('/prospect/version/4/do/update/email/' + email, params);
    },

    upsertByEmail: function(email, params) {
      return client.execute('/prospect/version/4/do/upsert/email/' + email, params);
    },

    upsertById: function(id, params) {
      return client.execute('/prospect/version/4/do/upsert/id/' + id, params);
    },

    deleteById: function(id) {
      return client.execute('/prospect/version/4/do/delete/id/' + id);
    },

    deleteByEmail: function(email) {
      return client.execute('/prospect/version/4/do/delete/email/' + email);
    }

  };
};
