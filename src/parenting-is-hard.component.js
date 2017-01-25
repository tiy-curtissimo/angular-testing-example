(function () {
  class ParentingIsHardController {
    $onInit() {
      this.child = { age: 4, disposition: 'sunny' };
    }

    worry($event) {
      console.log('$event', $event);
    }
  }

  function factory() { return new ParentingIsHardController(); }

  angular
    .module('app')
    .component('parentingIsHard', {
      templateUrl: 'parenting-is-hard.template.html',
      controller: factory,
      controllerAs: 'parent'
    });
}());
