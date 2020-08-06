module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/email/version/{{version}}/do/read/id/' + id);
    },

    send: function(params) {
      return client.execute('/email/version/{{version}}/do/send', params);
    }

  };
};
