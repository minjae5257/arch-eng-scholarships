(function () {
  const list = document.getElementById("list");
  const q = document.getElementById("q");
  const count = document.getElementById("count");
  const chips = document.querySelectorAll(".chip");
  let cat = "all";

  function match(item, query) {
    if (cat !== "all" && item.cat !== cat) return false;
    if (!query) return true;
    const blob = [item.name, item.org, item.who, item.amount, item.level]
      .concat(item.tags)
      .join(" ")
      .toLowerCase();
    return blob.includes(query);
  }

  function render() {
    const query = q.value.trim().toLowerCase();
    const rows = SCHOLARSHIPS.filter((item) => match(item, query));
    count.textContent = rows.length
      ? rows.length + "건"
      : "조건에 맞는 장학금이 없습니다.";
    if (!rows.length) {
      list.innerHTML = '<p class="empty">검색어나 필터를 바꿔 보세요.</p>';
      return;
    }
    list.innerHTML = rows
      .map(function (item) {
        const tags = item.tags
          .map(function (t) {
            return '<span class="tag">' + t + "</span>";
          })
          .join("");
        return (
          '<article class="card"><h2>' +
          item.name +
          '</h2><p class="org">' +
          item.org +
          " · " +
          item.level +
          '</p><div class="tags">' +
          tags +
          '</div><p class="meta"><strong>지원</strong> ' +
          item.amount +
          "</p><p class=\"meta\"><strong>대상</strong> " +
          item.who +
          '</p><a href="' +
          item.url +
          '" target="_blank" rel="noopener">공식 안내 보기</a></article>'
        );
      })
      .join("");
  }

  chips.forEach(function (btn) {
    btn.addEventListener("click", function () {
      cat = btn.getAttribute("data-cat");
      chips.forEach(function (c) {
        c.classList.toggle("is-on", c === btn);
      });
      render();
    });
  });
  q.addEventListener("input", render);
  render();
})();
