# textarea-autosize

This is a jQuery plugin for vertically adjusting a textarea based on user input and controlling any presentation in CSS. <strong>No clone or ghost elements</strong> used. &#x1f609;

So why build this? Many solutions didn't feel smooth. In some the textarea would flicker on entering new lines with a noticeable delay in resizing. Most were outdated and all were a lot bulkier than they had to be. Many had to use a mirror textarea or ghost element with some needing presentation values set in script. I wanted just the behavior in the script and anything regarding presentation should be controlled through CSS.

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
  $('textarea.js-auto-size').textareaAutoSize();
</script>
```

### Minimum CSS Requirements

The only requirement is to set `box-sizing: border-box` and a `min-height` on the textarea. In the example below, the minimum height is one line of text which is determined from the base font size, line height, and vertical padding and border.

```css
textarea {
  box-sizing: border-box;
  max-height: 94px; /* optional, but recommended */
  min-height: 31px;
  overflow-x: hidden; /* for Firefox (issue #5) */
}
```

Increase the `min-height` to have more initial rows. Once text exceeds that minimum height the textarea will expand naturally. The [overflow-x setting is for Firefox](https://github.com/javierjulio/textarea-autosize/issues/5) to prevent an initial additional line from appearing.

### Updating Textarea Content

If you pre-fill the textarea before page load the textarea will adjust to fit automatically but if given a value after page load (e.g. single page app) then you will need to trigger an input event on the textarea after setting its value for it to size correctly.

```js
textarea.val('A test comment.').trigger('input');
```

## Browser Support

These are the browsers I've tested against. These are not requirements.

* Google Chrome (latest)
* Apple Safari 6+
* Mozilla Firefox (latest)
* Internet Explorer 9+ (using [ievms](https://github.com/xdissent/ievms))

## Contributions

Project setup: `npm install`

Run tests: `npm test`

### Deploy New Release

Replace {type} with any of the following: patch, minor or major

```
bower version {type} -m "Prep %s release for Bower"
npm version {type} -m --no-git-tag-version "Prep %s release for NPM"
git push origin --tags
```

### Update GitHub Project Page

      git push origin master
      git push -f origin origin/master:gh-pages

## Version History

**0.4.2** (March 30, 2016)

 * Account for vertical border width (#18 - thanks @kulbakin)
 * Remove unused variable (#16 - thanks @nomosyn)

**0.4.1** (May 7, 2015)

 * Default to 0 if no vertical padding set (#11 - thanks @pedroha)

**0.4.0** (December 18, 2014)

 * Preserving window scroll position whenever textarea height changes ([Issue #6](https://github.com/javierjulio/textarea-autosize/issues/6))
 * Updated suggested CSS to include overflow-x hidden ([Issue #5](https://github.com/javierjulio/textarea-autosize/issues/5))
 * Removed code that accounted for Firefox height issue
 * Updated demo sample code to reflect values used for single line textarea

**0.3.0** (September 15, 2014)

 * Updated demo to use SASS

**0.2.0** (June 3, 2014)

 * Minor README changes
 * Updated gulp related dev dependencies

**0.1.0** (April 19, 2014)

 * Initial release

## Resources

* https://github.com/theproductguy/BetterGrow
* https://github.com/cburgmer/jquery-shiftenter
