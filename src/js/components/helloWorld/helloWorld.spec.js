//sample test
describe("helloWorld", function() {

  it("should return Hello World!", function() {
    expect(APP.helloWorld()).toEqual('Hello World!');
  });

  it("should return Hello Planet!", function() {
    expect(APP.helloWorld(true)).toEqual('Hello Planet!');
  });

});
