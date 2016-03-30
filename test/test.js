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

describe("TextArea", function () {
  var textarea;

  beforeEach(function(){
    textarea = $("#js-single-line-textarea")
      .val('')
      .css('maxHeight', '')
      .textareaAutoSize();
  });

  it('has a rendered height of one line with no text', function() {
    expect(textarea.val()).to.equal('');
    expect(textarea.outerHeight()).to.equal(36);
  });

  it('has a rendered height of 2 lines when large enough text entered', function() {
    textarea.val('this is a test with a really long entry').trigger('input');

    expect(textarea.outerHeight()).to.equal(56);
  });

  it('resizes to one line when deleting all text', function() {
    textarea.val('').trigger('input');

    expect(textarea.outerHeight()).to.equal(34);
    expect(textarea.val()).to.equal('');
  });

  it('stops resizing when given max height is reached', function() {
    var maxHeight = 100;
    textarea.css('maxHeight', maxHeight + 'px');
    textarea.val('this is a test with a really long entry this is a test with a really long entry this is a test with a really long entry this is a test with a really long entry').trigger('input');

    expect(textarea.outerHeight()).to.equal(maxHeight);

    // double check that text has exceeded height and textarea is scrollable
    expect(textarea.get(0).scrollHeight).to.be.above(maxHeight);
  });

  it('maintains scroll position after textarea updates', function() {
    textarea.val('').trigger('input');

    expect(textarea.outerHeight()).to.equal(34);

    var currentScrollPosition = $(window).scrollTop();

    textarea.val('this is a test with a really long entry').trigger('input');
    expect(textarea.outerHeight()).to.equal(56);

    expect($(window).scrollTop()).to.equal(currentScrollPosition);
  });
});
