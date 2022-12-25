class TextareaAutoSize {
  constructor(element) {
    this.element = element;

    this.verticalBorderSize = (this._styleProp("borderTopWidth") + this._styleProp("borderBottomWidth")) || 0;

    this._inputHandler = this._inputHandler.bind(this);
    element.addEventListener("input", this._inputHandler)

    this.update()
  }

  _inputHandler(event) {
    this.update()
  }

  destroy() {
    this.removeEventListener("input", this._inputHandler)
    this.element = null
  }

  update() {
    const smallestHeight = this._styleProp("fontSize")
    this.element.style.height = `${smallestHeight}px`

    // Firefox still triggers a vertical scrollbar but as long as we add the
    // top/bottom padding to the scroll height, it's not shown. Other browsers
    // do the same regardless of whether this value is added or not.
    const newHeight = this.element.scrollHeight + this.verticalBorderSize
    this.element.style.height = `${newHeight}px`
  }

  _styleProp(name) {
    const computedStyle = getComputedStyle(this.element, null)
    return parseInt(computedStyle[name])
  }
}

export { TextareaAutoSize }
