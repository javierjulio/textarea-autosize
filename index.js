import { TextareaAutoSize } from './src/textarea-autosize.js'

const textareaWrapper = new TextareaAutoSize(document.querySelector('textarea.js-auto-size'))

document.addEventListener("click", (event) => {
  if (event.target.closest(".js-textarea-demo-options a")) {
    const link = event.target
    const linkIndex = [...link.parentNode.children].indexOf(link)
    let textarea = document.querySelector('textarea.js-auto-size');

    textarea.classList.remove('single-line', 'multiple-lines');

    if (linkIndex == 0) {
      textarea.classList.add('single-line')
      textarea.setAttribute('rows', 1);
    }
    else if (linkIndex == 1 || linkIndex == 2) {
      textarea.classList.add('multiple-lines')
      textarea.setAttribute('rows', 3);
    }

    if (linkIndex == 2) {
      textarea.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus diam vel diam aliquam ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor imperdiet urna, id tristique neque cursus non. Nam eu magna cursus, fermentum justo nec, gravida odio. Etiam nec convallis massa, sit amet dictum diam. Praesent malesuada tortor vitae leo placerat luctus. Pellentesque sed quam sagittis, venenatis felis tempus, mollis eros. Aenean viverra, neque a tristique sollicitudin, urna metus venenatis felis, ac fringilla risus nibh nec enim. Morbi pellentesque justo at bibendum pulvinar. Integer nulla felis, volutpat pharetra purus eget, accumsan elementum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dignissim volutpat est vitae pretium. Vestibulum interdum sapien sit amet dui convallis sodales. Nam consequat libero sit amet semper viverra. Vestibulum consequat faucibus dui vitae consequat.'
    }
    else {
      textarea.value = ''
    }

    textarea.dispatchEvent(new Event("input", { bubbles: true }))
    // Or call `update` on the element wrapper
    // textareaWrapper.update()

    textarea.focus()
  }
  return false
});
