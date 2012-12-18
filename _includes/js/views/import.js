// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Application.Views.ImportView = (function(_super) {

    __extends(ImportView, _super);

    function ImportView() {
      return ImportView.__super__.constructor.apply(this, arguments);
    }

    ImportView.prototype.el = '#main';

    ImportView.prototype.template = $('#import_template').html();

    ImportView.prototype.events = {
      "click #import": "import"
    };

    ImportView.prototype.render = function() {
      var compiled, schema;
      schema = Application.Schema.basic.toJSON();
      compiled = _.template(this.template);
      return this.$el.html(compiled({
        schema: schema,
        fields: this.getFields()
      }));
    };

    ImportView.prototype.getFields = function() {
      var fields;
      fields = [];
      $.each(this.collection, function(k, row) {
        return $.each(row, function(field, value) {
          if ($.inArray(field, fields === -1)) {
            return fields.push(field);
          }
        });
      });
      return fields;
    };

    ImportView.prototype["import"] = function() {
      var _this = this;
      $.each(this.collection, function(k, row) {
        var dataset;
        dataset = new Application.Models.Dataset();
        $.each(row, function(field, value) {
          var map;
          map = _this.map(field);
          if (!map) {
            return;
          }
          return dataset.set(map, value);
        });
        return Application.datasets.add(dataset);
      });
      return Application.Router.navigate('', true);
    };

    ImportView.prototype.map = function(field) {
      return $("#map\\[" + field + "\\]").val();
    };

    return ImportView;

  })(Backbone.View);

}).call(this);
