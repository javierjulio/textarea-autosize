(function($){
  $.fn.textareaAutoExpand = function(){
    return this.each(function(){
      var textarea = $(this);
      var height = textarea.height();
      var diff = parseInt(textarea.css('borderBottomWidth')) + parseInt(textarea.css('borderTopWidth')) + 
                 parseInt(textarea.css('paddingBottom')) + parseInt(textarea.css('paddingTop'));
      var hasInitialValue = (this.value.replace(/\s/g, '').length > 0);
      
      if (textarea.css('box-sizing') === 'border-box' || 
          textarea.css('-moz-box-sizing') === 'border-box' || 
          textarea.css('-webkit-box-sizing') === 'border-box') {
        height = textarea.outerHeight();
        
        if (this.scrollHeight + diff == height) // special case for Firefox where scrollHeight isn't full height on border-box
          diff = 0;
      } else {
        diff = 0;
      }
      
      if (hasInitialValue) {
        textarea.height(this.scrollHeight);
      }
      
      textarea.on('scroll input keyup', function(event){ // keyup isn't necessary but when deleting text IE needs it to reset height properly
        if (event.keyCode == 13 && !event.shiftKey) {
          // just allow default behavior to enter new line
          if (this.value.replace(/\s/g, '').length == 0) {
            event.stopImmediatePropagation();
            event.stopPropagation();
          }
        }
        
        textarea.height(0);
        //textarea.height(Math.max(height - diff, this.scrollHeight - diff));
        textarea.height(this.scrollHeight - diff);
      });
    });
  }
})(jQuery);
