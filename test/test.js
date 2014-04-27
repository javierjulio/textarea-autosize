describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      array = [1, 2, 3];
      expect(array.indexOf(5)).to.equal(-1);
      expect(array.indexOf(0)).to.equal(-1);
    });
  });
});

// font size * line height + top/bottom padding + top/bottom border
// (16 * 1.4) + (6 * 2) + 2

function getLineHeight(textarea) {
  return parseInt(textarea.css('line-height'));
}

function spacingHeight(textarea) {
  return parseInt(textarea.css('paddingBottom')) +
    parseInt(textarea.css('paddingTop')) + 
    parseInt(textarea.css('borderBottomWidth')) + 
    parseInt(textarea.css('borderTopWidth'));
}

describe("DOM Tests", function () {
  var el, myEl;
  
  before(function(){
    el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);
    
    myEl = document.getElementById('myDiv');
  });

  it('has a rendered height of one line with no text', function() {
    var textarea = $("#js-single-line-textarea").textareaAutoSize();
    
    expect(textarea.val()).to.equal('');
    expect(textarea.outerHeight()).to.equal(36);
  });

  it('has a rendered height of 2 lines when large enough text entered', function() {
    var textarea = $("#js-single-line-textarea").textareaAutoSize();
    textarea.val('this is a test with a really long entry').trigger('input');
    
    expect(textarea.outerHeight()).to.equal(58);
  });

  it('resizes to one line when deleting all text', function() {
    var textarea = $("#js-single-line-textarea").textareaAutoSize();
    textarea.val('').trigger('input');
    
    expect(textarea.outerHeight()).to.equal(36);
    expect(textarea.val()).to.equal('');
  });

  it("is in the DOM", function () {
    expect(myEl).to.not.equal(null);
  });

  it("is a child of the body", function () {
    expect(myEl.parentElement).to.equal(document.body);
  });

  it("has the right text", function () {
    expect(myEl.innerHTML).to.equal("Hi there!");
  });

  it("has the right background", function () {
    expect(myEl.style.background).to.equal("rgb(204, 204, 204)");
  });
});
