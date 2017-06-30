// This is a seed data factory service to be used with angular resource. Currently unused.

angular.module('app').factory('SeedDataFactory', function ($resource) {

    return $resource('core/data/:filename.json', {
      filename: '@filename'
    });

  });
