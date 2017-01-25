/**
 * Documentation for jasmine matchers can be found at:
 *   https://jasmine.github.io/1.3/introduction.html
 */

describe("component: childhood-is-fun-component", function() {
  var $componentController;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it ('should not have an info property after construction but before initialization', function() {
    var ctrl = $componentController('childhoodIsFun', null, null);
    expect(ctrl.info).toBeUndefined();
  });

  it ('should totally have an info property after bindings are applied', function() {
    var bindings = {
      info: { age: 19, disposition: 'angsty' }
    };
    var ctrl = $componentController('childhoodIsFun', null, bindings);
    expect(ctrl.info).toBeDefined();
    expect(ctrl.info.age).toBe(19);
    expect(ctrl.info.disposition).toBe('angsty');
  });

  it ('should call the output binding, when an action occurs', function() {
    var onEventSpy = jasmine.createSpy('onProvoked');
    var bindings = {
      info: {
        age: 307
      },
      onProvoked: onEventSpy
    };
    var ctrl = $componentController('childhoodIsFun', null, bindings);

    ctrl.whine();
    expect(onEventSpy).toHaveBeenCalled();
    expect(onEventSpy.calls.count()).toBe(1);
  });

  /**
   * Templated test for checking if a controller binds
   * to a string or one-way binding correctly.
   */
  // it ('should have a binding', function() {
  //   // Here we are passing actual bindings to the component
  //   var bindings = {
  //     «binding»: {
  //       «key»: «value»
  //     }
  //   };
  //   var ctrl = $componentController('«component-name»', null, bindings);

  //   expect(ctrl.«binding»).toBeDefined();
  //   expect(ctrl.«binding».«key»).toBe(«value»);
  // });

  /**
   * Templated test for checking if a controller binds
   * to an output correctly.
   */
  // it ('should call the output binding, when an action occurs', function() {
  //   var onEventSpy = jasmine.createSpy('«output-name»');
  //   var bindings = {
  //     «binding»: {
  //       «key»: «value»
  //     },
  //     «output-name»: onEventSpy
  //   };
  //   var ctrl = $componentController('«component-name»', null, bindings);

  //   ctrl.«action-that-invokes-an-event»();
  //   expect(onEventSpy).toHaveBeenCalled();
  //   expect(onEventSpy).toHaveBeenCalledWith(«whatever value»);
  // });
});
