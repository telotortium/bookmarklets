/* https://github.com/telotortium/bookmarklets/blob/main/hn_collapse_level_2_comments.js */
(function() {
  function toggleCollapseDelay(id, timeout) {
    setTimeout(() => toggleCollapse(id), timeout);
  }

  function toggleCollapse(id) {
    var tr = $(id),
      coll = !hasClass(tr, 'coll');
    collstate(tr, coll);
    (coll ? hidekids : showkids)(tr);
    if ($('logout')) {
      new Image().src = 'collapse?id=' + id + (coll ? '' : '&un=true');
    }
  }
  let comments = document.querySelectorAll('tr.athing td.ind[indent="2"]');
  for (let i = 0; i < comments.length; i++) toggleCollapseDelay(comments[i].parentElement.querySelector("a.togg.clicky").id, 1e2 * i)
})();
