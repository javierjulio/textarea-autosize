/*!
 * jQuery Textarea Auto Expand plugin
 * Author: Javier Julio
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {

  var pluginName = "textareaAutoExpand";
  var pluginDataName = "plugin_" + pluginName;

  var containsText = function (value) {
    return (value.replace(/\s/g, '').length > 0);
  };

  function Plugin(element, options) {
    this.element = element;
    this.$element = $(element);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var height = this.$element.outerHeight();
      var diff = parseInt(this.$element.css('paddingBottom')) +
                  parseInt(this.$element.css('paddingTop'));

      // Firefox: scrollHeight isn't full height on border-box
      if (this.element.scrollHeight + diff <= height) {
        diff = 0;
      }

      if (containsText(this.element.value)) {
        this.$element.height(this.element.scrollHeight);
      }

      // keyup is required for IE to properly reset height when deleting text
      this.$element.on('input keyup', function(event) {
        $(this)
          .height('auto')
          .height(this.scrollHeight - diff);
      });
    }
  };

  $.fn[pluginName] = function (options) {
    this.each(function() {
      if (!$.data(this, pluginDataName)) {
        $.data(this, pluginDataName, new Plugin(this, options));
      }
    });
    return this;
  };

})(jQuery, window, document);
