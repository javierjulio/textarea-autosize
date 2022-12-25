# textarea-autosize

This package contains a `TextareaAutoSize` ES6 class for vertically adjusting a textarea based on user input and controlling any presentation in CSS. <strong>No clone or ghost elements</strong> are used. No jQuery dependency either, just plain vanilla JS. &#x1f609;

This was a fun project I started in Aug 2012 as a jQuery plugin. Nowadays, the same hack can be implemented using vanilla JS with such little code that I don't recommend using this package. Instead just implement the component code in your project so it can be modified to your requirements.

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
  import { TextareaAutoSize } from './textarea-autosize'
  const wrapper = new TextareaAutoSize(document.querySelector('textarea.js-auto-size'))
</script>
```

### Minimum CSS Requirements

In the following example, the minimum height is one line of text which is determined from the inherited font size, line height, and vertical padding. So if your font-size is 16px, line-height is 1.5, top/bottom padding is 6px each, then the minimum height would be 36px since `16 * 1.5 + 12 = 36`.

```css
textarea {
  box-sizing: border-box;
  max-height: 160px; /* optional but recommended */
  min-height: 38px;
}
```

Increase the `min-height` to have more initial rows. Once text exceeds that minimum height the textarea will expand naturally until it reaches the maximum height if declared.

### Updating Textarea Content

If you pre-fill the textarea before page load the textarea will adjust to fit automatically but if given a value after page load (e.g. single page app) then you will need to trigger an update on the textarea after setting its value for it to size correctly.

```js
wrapper.update()
```

### Cleaning Up

Calling the `destroy` method will remove the event handler and release the element reference.

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
npm version {type}
git push origin --tags
npm run predeploy && npm publish
```

### Update GitHub Project Page

Run `npm run deploy` to [release on GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages) using [gh-pages](https://github.com/tschaub/gh-pages) package.

## Resources

* https://github.com/theproductguy/BetterGrow
* https://github.com/cburgmer/jquery-shiftenter
