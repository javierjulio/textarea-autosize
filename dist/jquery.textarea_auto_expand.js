(function($){
  $.fn.textareaAutoExpand = function(){
    return this.each(function(){
      var textarea = $(this);
      var height = textarea.outerHeight();
      var diff = parseInt(textarea.css('paddingBottom')) + parseInt(textarea.css('paddingTop'));
      
      function containsText(value) {
        return (value.replace(/\s/g, '').length > 0);
      }
      
      // special case for Firefox where scrollHeight isn't full height on border-box
      if (this.scrollHeight + diff <= height) {
        diff = 0;
      }
      
      if (containsText(this.value)) {
        textarea.height(this.scrollHeight);
      }
      
      textarea.on('input keyup', function(event) { // keyup is required for IE to properly reset height when deleting text
        $(this)
          .height('auto')
          .height(this.scrollHeight - diff);
      });
    });
  };
})(jQuery);
