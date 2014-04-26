describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      array = [1, 2, 3];
      expect(array.indexOf(5)).to.equal(-1);
      expect(array.indexOf(0)).to.equal(-1);
    });
  });
});

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
