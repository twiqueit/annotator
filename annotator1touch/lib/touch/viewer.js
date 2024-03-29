// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Annotator.Plugin.Touch.Viewer = (function(_super) {
    var jQuery;

    __extends(Viewer, _super);

    jQuery = Annotator.$;

    Viewer.prototype.events = {
      ".annotator-item tap": "_onTap",
      ".annotator-edit tap": "_onEdit",
      ".annotator-delete tap": "_onDelete"
    };

    function Viewer(viewer, options) {
      this.viewer = viewer;
      this._onLoad = __bind(this._onLoad, this);
      Viewer.__super__.constructor.call(this, this.viewer.element[0], options);
      this.element.unbind("click");
      this.element.addClass("annotator-touch-widget annotator-touch-viewer");
      this.on("load", this._onLoad);
    }

    Viewer.prototype.hideAllControls = function() {
      this.element.find(".annotator-listing").removeClass(this.viewer.classes.showControls);
      return this;
    };

    Viewer.prototype._onLoad = function() {
      var controls;
      controls = this.element.find(".annotator-controls");
      controls.toggleClass("annotator-controls annotator-touch-controls");
      return controls.find("button").addClass("annotator-button");
    };

    Viewer.prototype._onTap = function(event) {
      var isVisible, target;
      target = jQuery(event.currentTarget);
      isVisible = target.hasClass(this.viewer.classes.showControls);
      this.hideAllControls();
      if (!isVisible) {
        return target.addClass(this.viewer.classes.showControls);
      }
    };

    Viewer.prototype._onEdit = function(event) {
      event.preventDefault();
      return this.viewer.onEditClick(event);
    };

    Viewer.prototype._onDelete = function(event) {
      event.preventDefault();
      return this.viewer.onDeleteClick(event);
    };

    return Viewer;

  })(Annotator.Delegator);

}).call(this);
