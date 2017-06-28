angular.module('app').factory('SeedDataFactory', function ($resource) {

    return $resource('core/data/:filename.json', {
      filename: '@filename'
    });

  });
