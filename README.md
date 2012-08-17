# A jQuery Plugin for Auto Expanding Textarea

This is a very small jQuery plugin for auto expanding (auto grow) Textareas. If you've commented on Facebook, this plugin replicates the auto expanding behavior of their textarea implementations. Using `SHIFT` + `ENTER` will enter new lines whether text has been entered or not. If the textarea does not have a value, then hitting just the `ENTER` key will add new lines. Although if it does have text and the `ENTER` key is used we can easily capture that in a handler and submit the form (not part of the plugin, but an example is provided).

I found that many similar scripts didn't feel smooth. The text and the textarea control would flicker on hitting the `ENTER` key with a noticable delay in resizing. Most were outdated and all were a lot bulkier than they should be. Most having to use a mirror textarea that would be rendered offscreen. Unacceptable. More importantly I wanted just behavior in the script. Anything regarding presentation would be controlled through CSS.

## Installation and Usage Example

To enable the plugin simply load the script file and use jQuery to find the desired `textarea` elements and call the plugin method on each.

    <textarea class="js-auto-expand"></textarea>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script src="jquery.textarea_auto_expand.js"></script>
    <script>
      $('.js-auto-expand').textareaAutoExpand();
    </script>

Any presentation details can and should be controlled through CSS. In the following example the textarea has an initial height of one line of text with a maximum height of 90px that was determined based on the font-size and line-height so it was even and thus no text would be cut off. If you want the textarea to grow infinitely as it does on Facebook just simply remove the maximum height. You can use a larger minimum height and once you enter enough lines of text it auto expand as expected.

    textarea {
      border-radius: 3px;
      box-sizing: border-box;
      min-height: 28px;
      max-height: 90px;
      padding: 4px;
      resize: none;
      width: 100%;
    }

While the example uses `box-sizing: border-box;` [(without a doubt safe to use nowadays)](http://caniuse.com/#search=box-sizing), the plugin still behaves and renders as expected when using the default box-sizing value content-box.

### Initial Values

If your textarea needs to be rendered with an initial value you might run into some cross browser rendering issues. For the best results (if possible) use `box-sizing: border-box;` and remove padding and border from textarea and use a div wrapper that can have those syles applied instead.

## Resources

As I researched for an existing solution I ended up creating this plugin based on code from several of these resources below where I tried to simplify just to what was needed.

* http://enginaygen.com/index.php/2011/12/30/auto-growing-textarea-with-jquery/
* https://github.com/cburgmer/jquery-shiftenter
* https://github.com/theproductguy/BetterGrow