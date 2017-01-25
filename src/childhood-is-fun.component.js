(function () {
  class ParentingIsHardController {
    $onInit() {
      this.child = { age: 4, disposition: 'sunny' };
    }

    whine() {
      this.onProvoked({$event: 'WAAAAAAAH!'});
    }
  }

  function factory() { return new ParentingIsHardController(); }

  angular
    .module('app')
    .component('childhoodIsFun', {
      templateUrl: 'childhood-is-fun.template.html',
      controller: factory,
      controllerAs: 'child',
      bindings: {
        info: '<',
        onProvoked: '&'
      }
    });
}());
