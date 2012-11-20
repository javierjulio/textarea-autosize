# A jQuery Plugin for Auto Expanding Textarea

This is a very small jQuery plugin for auto expanding (auto grow) Textareas. If you've commented on Facebook, this plugin replicates the auto expanding behavior of their textarea implementations. Using `SHIFT` + `ENTER` will enter new lines whether text has been entered or not. If the textarea does not have a value, then hitting just the `ENTER` key will add new lines. Although if it does have text and the `ENTER` key is used that can easily be captured in an event handler where you can submit the form (not part of the plugin, but an example is provided).

I found that many similar scripts didn't feel smooth. The text and the textarea control would flicker on entering new lines with a noticable delay in resizing. Most were outdated and all were a lot bulkier than they should be. Most having to use a mirror/ghost textarea that would be rendered offscreen and constantly written to. More importantly I wanted just the behavior in the script. Anything regarding presentation would be controlled through CSS.

## Installation and Usage Example

To enable the plugin simply load the script file and use jQuery to find the desired `textarea` elements and call the plugin method on the collection.

    <textarea class="js-auto-expand"></textarea>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="jquery.textarea_auto_expand.js"></script>
    <script>
      $('textarea.js-auto-expand').textareaAutoExpand();
    </script>

Any presentation details can and should be controlled through CSS. In the following example the textarea has an initial height of one line of text with a maximum height of 90px that was determined based on the font-size and line-height so it was even and thus no text would be cut off. If you want the textarea to grow infinitely as it does on Facebook just simply remove the maximum height. You can use a larger minimum height and once you enter enough lines of text it will auto expand as expected.

    textarea {
      border-radius: 3px;
      box-sizing: border-box; /* don't forget to add vendor prefixes */
      height: 28px;
      max-height: 90px;
      min-height: 28px;
      padding: 4px;
      resize: none;
      width: 100%;
    }

While the example uses `box-sizing: border-box;` [(which is safe to use with vendor prefixes for greater coverage)](http://caniuse.com/#search=box-sizing) the plugin still behaves and renders as expected when using the browser default `box-sizing: content-box;`. Just remember to adjust the height to not include the vertical padding and border total.

## Resources

As I researched for an existing solution I ended up creating this plugin based on code from several of these resources below where I tried to simplify just to what was needed.

* http://enginaygen.com/index.php/2011/12/30/auto-growing-textarea-with-jquery/
* https://github.com/cburgmer/jquery-shiftenter
* https://github.com/theproductguy/BetterGrow

## License

(The MIT license)

Copyright (c) 2012 Javier Julio

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.