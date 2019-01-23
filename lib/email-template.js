module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/emailTemplate/version/4/do/read/id/' + id);
    },

    listOneToOne: function() {
      return client.execute('/emailTemplate/version/4/do/listOneToOne');
    }

  };
};
