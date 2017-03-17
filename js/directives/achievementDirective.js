app.directive('achievementView', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      achievement: '=' 
    }, 
    templateUrl: 'js/views/achievementDirectiveView.html' 
  }; 
});