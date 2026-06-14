// Publications topic filter
(function () {
  'use strict';

  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.pub-card');
  var yearGroups = document.querySelectorAll('.pub-year-group');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.dataset.filter;

      filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
      btn.classList.add('filter-btn--active');

      // Show/hide individual cards
      cards.forEach(function (card) {
        var topic = card.dataset.topic;
        card.hidden = !(filter === 'all' || topic === filter);
      });

      // Hide year groups that have no visible cards
      yearGroups.forEach(function (group) {
        var visibleCards = group.querySelectorAll('.pub-card:not([hidden])');
        group.hidden = visibleCards.length === 0;
      });
    });
  });
})();
