# textarea-autosize

This is a jQuery plugin for enabling vertically adjusting textarea's through user input *without* using a clone or ghost element.

So why build this? Many solutions didn't feel smooth. In some the textarea would flicker on entering new lines with a noticeable delay in resizing. Most were outdated and all were a lot bulkier than they had to be. Many had to use a mirror textarea or ghost element with some needing presentation values set in script. I wanted just the behavior in the script. Anything regarding presentation should be in CSS.

## Installation

### NPM

```
npm install textarea-autosize
```

### [Bower](http://bower.io)

```
bower install textarea-autosize
```

Or add `textarea-autosize` to your application's `bower.json`.

```json
  "dependencies": {
    "textarea-autosize": "latest"
  }
```

### Standalone

```
curl -O https://raw.github.com/javierjulio/textarea-autosize/master/dist/jquery.textarea_autosize.js
```

## Usage

Load the plugin and use jQuery to find the desired `textarea` elements on which to call the plugin method.

```html
<textarea class="js-auto-size" rows="1"></textarea>

<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="jquery.textarea_autosize.min.js"></script>
<script>
  $('textarea.js-auto-size').textareaAutoExpand();
</script>
```

### Minimum CSS Requirements

The only requirement is to set `box-sizing: border-box` and a `min-height` on the textarea. In the example below, the minimum height is one line of text which is determined from the base font size, line height, and vertical padding and border.

```css
textarea {
  box-sizing: border-box;
  max-height: 94px; /* optional */
  min-height: 31px;
}
```

Increase the `min-height` to have more initial rows. Once input exceeds that minimum height the textarea will expand.

### Updating Textarea Content

If you pre-fill the textarea before page load the textarea will adjust to fit automatically but if given a value after page load (e.g. single page app) then you will need to trigger an input event on the textarea after setting its value for it to size correctly.

```js
textarea.val('A test comment.').trigger('input');
```

## Browser Support

* Google Chrome (latest)
* Apple Safari 6+
* Mozilla Firefox (latest)
* Internet Explorer 9+ (using [ievms](https://github.com/xdissent/ievms))

## Contributions

Project setup: `npm install`

Run tests: `npm test`

Deploy new release: `gulp release --bump [major,minor,patch]`

### Update GitHub Project Page

      git push origin master
      git push -f origin origin/master:gh-pages

## Version History

**0.1.1** (June 3, 2014)

 * Minor README changes
 * Updated gulp related dev dependencies

**0.1.0** (April 19, 2014)

 * Initial release

## Resources

* https://github.com/theproductguy/BetterGrow
* https://github.com/cburgmer/jquery-shiftenter
