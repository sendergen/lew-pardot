var request       = require('request');
var util          = require('util');
var Q             = require('q');
var errors        = require('./errors');
var Hoek          = require('hoek');


var ROOT_API_URL  = "https://pi.pardot.com/api";


function Client(options) {
  options.format = 'json';
  this.options = options;
  if(this.options.version != 3 && this.options.version != 4) this.options.version = 4;
}

Client.prototype.execute = function(path, params) {
  var self = this;

  params = params || {};

  // Set the authentication credentials for every request
  params.api_key  = self.apiKey;
  params.user_key = self.options.userKey;
  params.format   = 'json';
  params.version = self.options.version;
  

  return Q.promise(function(resolve, reject) {

    // Check that we have an api_key set if this is not a login attempt.
    Hoek.assert(params.api_key || (params.email && params.password), 'Client must be authenticated');

    var apiPath = util.format('%s%s', ROOT_API_URL, path);
    apiPath.replace('{{version}}', params.version);

    self.log('Sending request to ' + apiPath);
    self.log(params);

    request.post(
      apiPath,
      {form: params},
      function(err, response, body) {
        self.log([err, response, body]);
        if(err) {
          return reject(body);
        }

        var payload = body ? JSON.parse(body) : null;

        // Delete methods don't return any content
        if(payload)
        {
          self.log("Received Response");
          self.log(payload);

          if(payload['@attributes'].stat !== 'ok') {
            return reject(errors.byCode[payload['@attributes'].err_code]);
          }
          return resolve(payload);
        }

        return resolve(true);
      }
    );
  });
};


Client.prototype.log = function(message) {
  if(this.options.debug) {
    console.log(message);
  }
};

module.exports = Client;
