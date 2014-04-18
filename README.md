# textarea-auto-expand

This is a jQuery plugin for enabling vertically adjusting textarea's through user input *without* using a clone or ghost element.

So why build this? Many solutions didn't feel smooth. In some the textarea would flicker on entering new lines with a noticeable delay in resizing. Most were outdated and all were a lot bulkier than they had to be. Many had to use a mirror textarea or ghost element with some needing presentation values set in script. I wanted just the behavior in the script. Anything regarding presentation should be in CSS.

## Usage

Load the plugin and use jQuery to find the desired `textarea` elements on which to call the plugin method.

  ```html
  <textarea class="js-auto-expand" rows="1"></textarea>

  <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
  <script src="jquery.textarea_auto_expand.min.js"></script>
  <script>
    $('textarea.js-auto-expand').textareaAutoExpand();
  </script>
  ```

Use a desired default number of text rows in conjunction with the required CSS below.

### CSS Requirements

Set the `textarea` to `box-sizing: border-box` and give it a `min-height`. In the example below, the minimum height is one line of text which is determined from the base font-size and line-height. Use a larger minimum height to have more initial rows and once enough text lines are entered the textarea will auto expand from that point on as expected.

  ```css
  textarea {
    box-sizing: border-box;
    max-height: 94px;
    min-height: 31px;
  }
  ```

The `max-height` style is only necessary if you don't want the textarea to grow past a certain point.

## Browsers Tested

Unless specified, all browsers listed were the latest versions.

* Mac
  * Chrome
  * Safari
  * Firefox
  * IE9-10 (using VirtualBox and [ievms](https://github.com/xdissent/ievms))
* Windows
  * TODO

## Resources

* https://github.com/theproductguy/BetterGrow
* https://github.com/cburgmer/jquery-shiftenter

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
