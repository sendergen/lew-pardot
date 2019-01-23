module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/email/version/4/do/read/id/' + id);
    },

    send: function(params) {
      return client.execute('/email/version/4/do/send', params);
    }

  };
};
