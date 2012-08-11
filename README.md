# jQuery Plugin for Auto Expanding Textarea

This is a very small jQuery plugin for auto expanding (auto grow) Textareas. If you've commented on Facebook, this plugin replicates the auto expanding behavior of their textarea implementations. Using `SHIFT` + `ENTER` will enter new lines whether text has been entered or not. If the textarea does not have a value, then hitting just the `ENTER` key will add new lines. Although if it does have text and the `ENTER` key is used we can easily capture that in a handler and submit the form. This replicates the exact behavior on Facebook.

I felt that many scripts similar to this didn't feel smooth. The text and the textarea control would flicker on hitting the `ENTER` key. Most were outdated and all were a lot bulkier than they should be. More importantly I wanted just behavior in the script. Anything regarding presentation would be controlled through CSS.

## Usage Examples

This is all that is needed to enable the plugin.

    <textarea class="js-auto-expand comment-field"></textarea>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script src="jquery.textarea_auto_expand.js"></script>
    <script>
      $('.js-auto-expand').textareaAutoExpand();
    </script>

Any presentation details can and should be controlled through CSS. In the following example the textarea has an initial height of one line of text with a maximum height of 90px that was determined based on the font-size and line-height so it was even and thus no text would be cut off. If you want the textarea to grow infinitely as it does on Facebook just simply remove the maximum height.

    textarea {
      border-radius: 6px;
      box-sizing: border-box;
      min-height: 26px;
      max-height: 90px; /* 26 - 8 (padding) - 2 (border) = 16. Then 16 * 4 rows = 64. Then 64 + 26 (for 5th row) = 90 */
      padding: 6px;
      resize: none;
      width: 100%;
    }

Full presentational control through CSS and only behavior in the JS layer.

## Resources

As I researched for an existing solution I ended creating this plugin based on code from several of these resources where I tried to simplify just to what was needed.

* http://enginaygen.com/index.php/2011/12/30/auto-growing-textarea-with-jquery/
* https://github.com/cburgmer/jquery-shiftenter
* https://github.com/theproductguy/BetterGrow