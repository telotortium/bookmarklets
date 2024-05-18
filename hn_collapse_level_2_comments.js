/* https://github.com/telotortium/bookmarklets/blob/main/hn_collapse_level_2_comments.js */
(function() {
  function toggleCollapseDelay(id, timeout) {
    var tr = $(id),
      coll = !hasClass(tr, 'coll');
    collstate(tr, coll);
    (coll ? hidekids : showkids)(tr);
    if ($('logout')) {
      setTimeout(() => {
        new Image().src = 'collapse?id=' + id + (coll ? '' : '&un=true');
      }, timeout);
    }
  }
  let comments = document.querySelectorAll('tr.athing td.ind[indent="2"]');
  for (let i = 0; i < comments.length; i++) toggleCollapseDelay(comments[i].parentElement.querySelector("a.togg.clicky").id, 5e2 * i)
})();
