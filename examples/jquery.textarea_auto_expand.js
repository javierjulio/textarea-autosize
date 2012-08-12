(function($){
  $.fn.textareaAutoExpand = function(){
    return this.each(function(){
      var textarea = $(this);
      var height = textarea.height();
      
      if (textarea.css('box-sizing') === 'border-box' || 
          textarea.css('-moz-box-sizing') === 'border-box' || 
          textarea.css('-webkit-box-sizing') === 'border-box') 
      {
        height = textarea.outerHeight();
      }
      
      var diff = this.scrollHeight - height;
      
      if (textarea.val() != '') 
      {
        console.log('textarea has initial value', diff, height, this.scrollHeight);
        
        // FIXME: diff becomes a larger negative value with starting textarea value
        /*
        if (textarea.css('box-sizing') != 'border-box') 
          console.log(diff = parseInt(textarea.css('padding-top')) + parseInt(textarea.css('padding-bottom')));
        else
          diff = 0
        */
        diff = 0;
        textarea.height(this.scrollHeight); // when textarea has content height works differently
      }
      console.log('initial', diff, height, this.scrollHeight);
      
      textarea.on('scroll input keydown keyup', function(event){
        if (event.keyCode == 13 && !event.shiftKey) {
          console.log('length', this.value.replace(/\s/g, '').length)
          
          // just allow default behavior to enter new line
          if (this.value.replace(/\s/g, '').length == 0) {
            event.stopImmediatePropagation();
            event.stopPropagation();
          }
        }
        
        textarea.height(0);
        //console.log(event.type, diff, height, this.scrollHeight, Math.max(height, this.scrollHeight + (diff * -1)));
        console.log(event.type, diff, height, this.scrollHeight);
        textarea.height(Math.max(height, this.scrollHeight + (diff * -1)));
      });
      
    });
  }
})(jQuery);
