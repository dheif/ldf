app.directive('playerCard', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      player: '=' 
    }, 
    templateUrl: 'js/views/playerCard.html' 
  }; 
});