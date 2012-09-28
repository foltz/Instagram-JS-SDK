// Generated by CoffeeScript 1.3.3
var Instagram, k, test;

k = function(o) {
  if (o) {
    return console.log(o);
  } else {
    return console.log('testing');
  }
};

Instagram = (function() {

  function Instagram() {
    this.clientId = 'a6a557833e75443ab06c9250e47b5524';
    this.redirectUri = 'http://localhost/xampp/projects/Instagram-JS-SDK/';
    this.tokenUri = 'https://instagram.com/oauth/authorize/?client_id=' + this.clientId + '&redirect_uri=' + this.redirectUri + '&response_type=token';
    this.endPoint = 'https://api.instagram.com/v1/';
    this.auth();
  }

  Instagram.prototype.auth = function() {
    if (window.location.hash) {
      this.hash = window.location.hash.replace('#access_token=', '');
      store.set('instagram-token', this.hash);
    }
    if (store.get('instagram-token') === void 0) {
      return location.href = this.tokenUri;
    }
  };

  Instagram.prototype.fetch = function(url, params) {
    params['access_token'] = store.get('instagram-token');
    return $.ajax({
      type: "GET",
      url: this.endPoint + url,
      dataType: 'jsonp',
      data: params,
      success: function(data) {
        return k(data);
      }
    });
  };

  return Instagram;

})();

test = new Instagram;

$('button').click(function() {
  return test.fetch('/users/self/feed', {
    count: 20
  });
});
