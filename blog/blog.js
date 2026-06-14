// Blog category filter
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const posts = document.querySelectorAll('#posts-grid .post-card');
  const emptyState = document.getElementById('blog-empty');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      // Show/hide posts
      let visibleCount = 0;
      posts.forEach(post => {
        const cat = post.dataset.category;
        const show = filter === 'all' || cat === filter;
        if (show) {
          post.hidden = false;
          visibleCount++;
        } else {
          post.hidden = true;
        }
      });

      // Empty state
      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    });
  });
})();
