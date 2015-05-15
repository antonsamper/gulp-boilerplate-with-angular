(function (app) {

  app.helloWorld = function (planet) {
    var hello = 'Hello ';
    var thing = 'World!';

    if(planet) {
      thing = 'Planet!'
    }

    return hello + thing;
  };

})(APP);
