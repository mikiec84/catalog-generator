// Generated by CoffeeScript 1.4.0
(function() {
  var Router,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "": "index",
      "upload": "upload",
      "import": "import",
      "export": "export"
    };

    Router.prototype.index = function() {
      var view;
      view = new Application.Views.IndexView({
        collection: Application.datasets
      });
      return view.render();
    };

    Router.prototype.upload = function() {
      var view;
      view = new Application.Views.UploadView();
      return view.render();
    };

    Router.prototype["import"] = function() {
      return this.navigate('upload', true);
    };

    Router.prototype["export"] = function() {
      var view;
      view = new Application.Views.ExportView({
        collection: Application.datasets
      });
      return view.render();
    };

    return Router;

  })(Backbone.Router);

  Application.Router = new Router();

}).call(this);
