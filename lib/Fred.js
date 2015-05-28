var Fred = (function() {
  'use strict';

  function Fred(story) {
    this.story = story;

    this.name = 'Fred';
    this.image = 'awake.png';
    this.initialActions = ['eatCake',
      'eatCookie',
    ];
  }

  Fred.prototype.performAction = function(action) {
    var nextActions;

    if (action === 'eatCake') {
      this.story.addContent('Fred isst einen Kuchen. Davon wird er müde...');
      nextActions = ['sleep'];
    } else if (action === 'eatCookie') {
      this.story.addContent('Fred isst einen Keks. Der ist lecker!');
      nextActions = ['eatCake',
        'eatCookie',
      ];
    } else if (action === 'sleep') {
      this.story.addContent('Fred schläft...');
      nextActions = [];
    }

    return nextActions;
  };

  return Fred;
})();
