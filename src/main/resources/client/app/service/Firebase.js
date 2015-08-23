'use strict';

/**
 * Firebase service.
 */
angular.module('mytube').factory('Firebase', function($firebaseArray) {
  var firebaseUrl = 'https://FIREBASE_ID.firebaseio.com/mytube';

  return {
    getPlaylist: function(playlistId) {
      var ref = new Firebase(firebaseUrl + '/playlist/' + playlistId);
      return $firebaseArray(ref);
    },

    getViewedVideos: function() {
      var ref = new Firebase(firebaseUrl + '/viewed_videos');
      return $firebaseArray(ref);
    }
  }
});