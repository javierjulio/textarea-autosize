(function($){
  $.fn.textareaAutoExpand = function(){
    return this.each(function(){
      var textarea = $(this);
      var height = textarea.outerHeight();
      var diff = //parseInt(textarea.css('borderBottomWidth')) + parseInt(textarea.css('borderTopWidth')) + 
                 parseInt(textarea.css('paddingBottom')) + parseInt(textarea.css('paddingTop'));
      
      function containsText(value) {
        return (value.replace(/\s/g, '').length > 0);
      }
      
      //var hasInitialValue = (this.value.replace(/\s/g, '').length > 0);
      
      //if (textarea.css('box-sizing') === 'border-box' || 
      //    textarea.css('-moz-box-sizing') === 'border-box') {
        //height = textarea.outerHeight();
        //console.log(this.scrollHeight, height, diff);
        if (this.scrollHeight + diff <= height) // special case for Firefox where scrollHeight isn't full height on border-box
          diff = 0;
      //}
      
      if (containsText(this.value)) {
        textarea.height(this.scrollHeight);
      }
      
      textarea.on('scroll input keyup', function(event){ // keyup is required for IE to reset height properly when deleting text
        if (event.keyCode == 13 && !event.shiftKey) {
          // just allow default behavior to enter new line
          if (!containsText(this.value)) {
            event.stopImmediatePropagation();
            event.stopPropagation();
          }
        }
        //console.log(this.scrollHeight - diff, diff);
        textarea.height('auto');
        //textarea.height(Math.max(height - diff, this.scrollHeight - diff));
        textarea.height(this.scrollHeight - diff);
        //console.log(this.scrollHeight - diff, diff);
      });
    });
  }
})(jQuery);
