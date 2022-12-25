# textarea-autosize

This is an ES6 script for vertically adjusting a textarea based on user input and controlling any presentation in CSS. <strong>No clone or ghost elements</strong> used. &#x1f609;

## Installation

### NPM

```
npm install textarea-autosize
```

## Usage

Import the script and find the desired `textarea` elements on which to initialize the component with.

```html
<textarea class="js-auto-size" rows="1"></textarea>

<script type="module">
  import { TextareaAutoSize } from './src/textarea-autosize.js'
  const wrapper = new TextareaAutoSize(document.querySelector('textarea.js-auto-size'))
</script>
```

### Minimum CSS Requirements

The only requirement is to set `box-sizing: border-box` and a `min-height` on the textarea. In the following example, the minimum height is one line of text which is determined from the inherited font size, line height, and vertical padding.

```css
textarea {
  box-sizing: border-box;
  max-height: 160px; /* optional but recommended */
  min-height: 38px;
}
```

Increase the `min-height` to have more initial rows. Once text exceeds that minimum height the textarea will expand naturally. So if your font-size is 16px, line-height is 1.5, top/bottom padding is 6px each, then the minimum height would be 36px since 16 * 1.5 + 12 = 36.

### Updating Textarea Content

If you pre-fill the textarea before page load the textarea will adjust to fit automatically but if given a value after page load (e.g. single page app) then you will need to trigger an update on the textarea after setting its value for it to size correctly.

```js
wrapper.update()
```

### Clean Up

Calling the `destroy` method will remove the event handler and element reference.

```js
wrapper.destroy()
```

## Development

1. Install [Node.js v18+](https://nodejs.org/)
2. `npm install`
3. `npx playwright install`
4. `npm test`
5. `npm run start`

### Deploy New Release

Replace {type} with any of the following: patch, minor or major

```
npm version {type} --no-git-tag-version
git push origin --tags
npm run deploy && npm publish
```

### Update GitHub Project Page

Run `npm run deploy` to [release on GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages) using [gh-pages](https://github.com/tschaub/gh-pages) package.

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
