(function($){
  $.fn.textareaAutoExpand = function(){
    this.each(function(){
      var textarea = $(this);
      var height = (textarea.css('box-sizing') === 'border-box') ? textarea.outerHeight() : textarea.height();
      var diff = height - this.scrollHeight;
      
      if (textarea.val() != '') 
      {
        console.log('textarea has initial value', diff, height, this.scrollHeight);
        
        // FIXME: diff becomes a larger negative value with starting textarea value
        /*
        if (textarea.css('box-sizing') != 'border-box') 
          console.log(diff = parseInt(textarea.css('padding-top')) + parseInt(textarea.css('padding-bottom')));
        else
          diff = 0
        
        if ((diff * -1) > height) 
        {
          textarea.height(this.scrollHeight);
        }
        else 
        {*/
          textarea.height(this.scrollHeight + diff);
        //}
      }
      
      /* the 2 input event handlers helps avoid a flicker when increasing height */
      textarea
        //.on('focus keyup keydown change input scroll', function(event) {
        .on('focus keyup keydown change input', function(event) {
          textarea.height('auto');
          console.log(event.type, diff, this.scrollHeight, this.offsetHeight, textarea.outerHeight());
          textarea.height(this.scrollHeight + diff);
        })
        .on('input', function(event) { // was keydown with return false at the end
          console.log(event.type, this.scrollHeight)
          if (event.keyCode == 13) {
            console.log('len', this.value.replace(/\s/g, '').length)
            
            if (this.value.replace(/\s/g, '').length == 0) {
              textarea.height(this.scrollHeight + diff);
            }
          }
          
          if (event.keyCode == 13 && event.shiftKey) {
            var val = this.value;
            if (typeof this.selectionStart == "number") {
              var start = this.selectionStart;
              this.value = val.slice(0, start) + "\n" + val.slice(this.selectionEnd);
              this.selectionStart = this.selectionEnd = start + 1;
            } else if (document.selection && document.selection.createRange) {
              this.focus();
              var range = document.selection.createRange();
              range.text = "\r\n";
              range.collapse(false);
              range.select();
            }
            textarea.height(this.scrollHeight + diff);
            //return false;
          }
        });
    });
  }
})(jQuery);
