var Story = (function($) {
  'use strict';

  function Story(page) {
    this.page = page;
  }

  Story.prototype.addContent = function(text) {
    var previousContent = this.page.children().last();
    previousContent.fadeTo('slow', 0.3);

    this.page.append($('<p>' + text + '</p>'));

    var veryLargeNumber = 10000;
    this.page.scrollTop(veryLargeNumber);
  };

  Story.prototype.endChapter = function() {
    this.page.children().remove();
  };

  return Story;
})(jQuery);
