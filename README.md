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

### CSS Requirements

Set the `textarea` to `box-sizing: border-box` and give it a `min-height`. In the example below, the minimum height is one line of text which is determined from the base font size and line height. Increase it to have more initial rows. Once input exceeds in minimum the textarea will expand.

```css
textarea {
  box-sizing: border-box;
  max-height: 94px; /* optional */
  min-height: 31px;
}
```

## Browser Support

* Google Chrome (latest)
* Apple Safari 6+
* Mozilla Firefox (latest)
* Internet Explorer 9+ (using [ievms](https://github.com/xdissent/ievms))

## Update GitHub Project Page

      git push origin master
      git push -f origin origin/master:gh-pages

## Resources

* https://github.com/theproductguy/BetterGrow
* https://github.com/cburgmer/jquery-shiftenter
