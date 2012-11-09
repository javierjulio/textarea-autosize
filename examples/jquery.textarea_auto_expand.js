(function($){
  $.fn.textareaAutoExpand = function(){
    return this.each(function(){
      var textarea = $(this);
      var height = textarea.height();
      
      // bind event for textareas with class .submit-on-enter
      // Uses ENTER to submit, SHIFT+ENTER to enter new line. 
      // If no value in textarea then ENTER key enters a new line instead.
      if(textarea.hasClass("submit-on-enter")) {
        textarea.on('keydown', function(event) {
          if (event.keyCode == 13 && !event.shiftKey && this.value.replace(/\s/g, '').length > 0) 
          {
            console.log("aber hallo");
            $(this.form).submit();
            return false;
          }
        });
      }

      if (textarea.css('box-sizing') === 'border-box' || 
          textarea.css('-moz-box-sizing') === 'border-box' || 
          textarea.css('-webkit-box-sizing') === 'border-box') 
      {
        height = textarea.outerHeight();
      }
      
      var diff = this.scrollHeight - height;
      
      // console.log('initial', diff, height, this.scrollHeight);
      
      if (textarea.val() != '') 
      {
        diff = 0;
        textarea.height(this.scrollHeight);
      }
      
      textarea.on('scroll input keydown keyup', function(event){
        if (event.type == 'keydown' && event.keyCode == 13 && !event.shiftKey) {
          // console.log('length', this.value.replace(/\s/g, '').length, event.type)
          
          // just allow default behavior to enter new line
          if (this.value.replace(/\s/g, '').length == 0) {
            event.stopImmediatePropagation();
            event.stopPropagation();
          }
        }
        
        textarea.height(0);
        //console.log(event.type, diff, height, this.scrollHeight, Math.max(height, this.scrollHeight + (diff * -1)));
        // console.log(event.type, diff, height, this.scrollHeight);
        textarea.height(Math.max(height, this.scrollHeight + (diff * -1)));
      });
      
    });
  }
})(jQuery);
