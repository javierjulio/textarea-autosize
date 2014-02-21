# textarea-auto-expand

This is a jQuery plugin for vertically adjusting a textarea based on user input *without* using a clone or ghost element.

I found that many solutions didn't feel smooth. The textarea would flicker on entering new lines with a noticeable delay in resizing. Most were outdated and all were a lot bulkier than they had to be. Most had to use a mirror textarea or ghost element that would be rendered offscreen and constantly written to. More importantly I wanted just the behavior in the script. Anything regarding presentation would be controlled through CSS.

## Installation and Usage Example

To enable the plugin simply load the script file and use jQuery to find the desired `textarea` elements and call the plugin method on the collection.

    <textarea class="js-auto-expand" rows="1"></textarea>
    
    <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script src="jquery.textarea_auto_expand.min.js"></script>
    <script>
      $('textarea.js-auto-expand').textareaAutoExpand();
    </script>

## CSS

Any presentation details can and should be controlled through CSS. In the following example the textarea has an initial height of one line of text (determined based on the font-size and line-height) by setting the minimum height desired. If you want the textarea to grow infinitely just remove the maximum height. You can use a larger minimum height to show more rows and once you enter enough lines of text it will auto expand from that point on as expected.

    textarea {
      box-sizing: border-box;
      max-height: 94px;
      min-height: 31px;
    }

The only required styles are setting `min-height` and `box-sizing: border-box` as the `max-height` is only necessary if you don't want the textarea to grow past a certain point.

## Browsers Tested

Unless specified, all browsers listed were the latest versions.

* Mac
** Chrome
** Safari
** Firefox
** IE 9 and 10 (using VirtualBox and [ievms](https://github.com/xdissent/ievms))
* Windows
** TODO

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