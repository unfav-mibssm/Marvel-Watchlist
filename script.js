(function () {
  "use strict";

  /* ============================================================
     Data helpers
     ============================================================ */
  function movie(title, year, opts) {
    return Object.assign({ kind: "movie", title, meta: year, legacy: false }, opts || {});
  }
  function series(id, title, season, episodes) {
    return { kind: "series", id, title, meta: "Season " + season, episodes };
  }
  function legacyGroup(label, note, films) {
    return { kind: "legacy-group", label, note, films };
  }

  /* ============================================================
     Data — order preserved exactly as supplied, with the four
     new 2026 additions inserted in their chronological slot.
     ============================================================ */
  var DATA = [
    {
      id: "phase1",
      title: "Phase One",
      saga: "The Infinity Saga",
      items: [
        movie("Iron Man", "2008"),
        movie("The Incredible Hulk", "2008"),
        movie("Iron Man 2", "2010"),
        movie("Thor", "2011"),
        movie("Captain America: The First Avenger", "2011"),
        movie("The Avengers", "2012")
      ]
    },
    {
      id: "phase2",
      title: "Phase Two",
      items: [
        movie("Iron Man 3", "2013"),
        movie("Thor: The Dark World", "2013"),
        movie("Captain America: The Winter Soldier", "2014"),
        movie("Guardians of the Galaxy", "2014"),
        movie("Avengers: Age of Ultron", "2015"),
        movie("Ant-Man", "2015")
      ]
    },
    {
      id: "phase3",
      title: "Phase Three",
      items: [
        movie("Captain America: Civil War", "2016"),
        movie("Doctor Strange", "2016"),
        movie("Guardians of the Galaxy 2", "2017"),
        movie("Spider-Man: Homecoming", "2017"),
        movie("Thor: Ragnarok", "2017"),
        movie("Black Panther", "2018"),
        movie("Avengers: Infinity War", "2018"),
        movie("Ant-Man and the Wasp", "2018"),
        movie("Captain Marvel", "2019"),
        movie("Avengers: Endgame", "2019"),
        movie("Spider-Man: Far From Home", "2019")
      ]
    },
    {
      id: "phase4",
      title: "Phase Four",
      saga: "The Multiverse Saga",
      items: [
        series("wv", "WandaVision", 1, 9),
        series("fws", "Falcon and the Winter Soldier", 1, 6),
        series("l1", "Loki", 1, 6),
        movie("Black Widow", "2021"),
        series("wi1", "What If...?", 1, 9),
        movie("Shang-Chi and the Legend of the Ten Rings", "2021"),
        movie("Eternals", "2021"),
        series("hk", "Hawkeye", 1, 6),
        movie("Spider-Man: No Way Home", "2021"),
        series("mk", "Moon Knight", 1, 6),
        movie("Doctor Strange in the Multiverse of Madness", "2022"),
        series("ms", "Ms. Marvel", 1, 6),
        movie("Thor: Love and Thunder", "2022"),
        series("gr1", "I Am Groot", 1, 5),
        series("sh", "She-Hulk", 1, 9),
        movie("Werewolf By Night", "2022"),
        movie("Black Panther: Wakanda Forever", "2022"),
        movie("Guardians of the Galaxy Christmas Special", "2022")
      ]
    },
    {
      id: "phase5",
      title: "Phase Five",
      items: [
        movie("Ant-Man and the Wasp: Quantumania", "2023"),
        movie("Guardians of the Galaxy 3", "2023"),
        series("si", "Secret Invasion", 1, 6),
        series("gr2", "I Am Groot", 2, 5),
        series("l2", "Loki", 2, 6),
        movie("The Marvels", "2023"),
        series("wi2", "What If...?", 2, 9),
        series("ec", "Echo", 1, 5),
        legacyGroup("X-Men Film Franchise", "Not part of MCU continuity", [
          { title: "X-Men", meta: "2000" },
          { title: "X2: X-Men United", meta: "2003" },
          { title: "X-Men: The Last Stand", meta: "2006" },
          { title: "X-Men Origins: Wolverine", meta: "2009" },
          { title: "X-Men: First Class", meta: "2011" },
          { title: "The Wolverine", meta: "2013" },
          { title: "X-Men: Days of Future Past", meta: "2014" },
          { title: "Deadpool", meta: "2016" },
          { title: "X-Men: Apocalypse", meta: "2016" },
          { title: "Logan", meta: "2017" },
          { title: "Deadpool 2", meta: "2018" },
          { title: "Dark Phoenix", meta: "2019" },
          { title: "The New Mutants", meta: "2020" }
        ]),
        movie("Deadpool & Wolverine", "2024"),
        series("ag", "Agatha All Along", 1, 9),
        series("wi3", "What If...?", 3, 8),
        movie("Captain America: Brave New World", "2025")
      ]
    },
    {
      id: "defenders",
      title: "The Defenders Saga",
      items: [
        series("d1", "Daredevil", 1, 13),
        series("j1", "Jessica Jones", 1, 13),
        series("d2", "Daredevil", 2, 13),
        series("l1c", "Luke Cage", 1, 13),
        series("i1f", "Iron Fist", 1, 13),
        series("df1", "The Defenders", 1, 8),
        series("p1s", "The Punisher", 1, 13),
        series("j2", "Jessica Jones", 2, 13),
        series("l2c", "Luke Cage", 2, 13),
        series("i2f", "Iron Fist", 2, 10),
        series("d3", "Daredevil", 3, 13),
        series("p2s", "The Punisher", 2, 13),
        series("j3", "Jessica Jones", 3, 13),
        series("ba1", "Daredevil: Born Again", 1, 9),
        movie("Thunderbolts*", "2025"),
        series("ih", "Ironheart", 1, 6)
      ]
    },
    {
      id: "phase6",
      title: "Phase Six",
      items: [
        legacyGroup("Fantastic Four Film Franchise", "Not part of MCU continuity", [
          { title: "Fantastic Four", meta: "2005" },
          { title: "Fantastic Four: Rise of the Silver Surfer", meta: "2007" },
          { title: "Fantastic Four", meta: "2015" }
        ]),
        movie("The Fantastic Four: First Steps", "2025"),
        series("wak", "Eyes of Wakanda", 1, 4),
        series("zom", "Marvel Zombies", 1, 4),
        series("wm", "Wonder Man", 1, 8),
        series("ba2", "Daredevil: Born Again", 2, 8),
        movie("The Punisher: One Last Kill", "2026"),
        movie("Spider-Man: Brand New Day", "2026"),
        series("vq", "VisionQuest", 1, 8),
        movie("Avengers: Doomsday", "2026")
      ]
    }
  ];

  /* ============================================================
     Utilities
     ============================================================ */
  function slug(str) {
    return String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  var CHECK_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12.5 9.5 18 20 6"></polyline></svg>';

  var CHEVRON_SVG =
    '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>';

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ============================================================
     Storage
     ============================================================ */
  var STORAGE_KEY = "marvel-watch-order-v1";
  var state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    state = {};
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* storage unavailable — progress just won't persist */
    }
  }

  /* ============================================================
     Rendering
     ============================================================ */
  var main = document.getElementById("main");
  var nav = document.getElementById("sectionNav");

  function rowMovie(item) {
    var key = "m_" + slug(item.title + "-" + item.meta);
    var checked = !!state[key];
    var row = el(
      '<label class="row' +
        (item.legacy ? " legacy" : "") +
        '">' +
        '<input type="checkbox" data-key="' + key + '"' + (checked ? " checked" : "") + ">" +
        '<span class="check-box">' + CHECK_SVG + "</span>" +
        '<span class="row-title">' + item.title + "</span>" +
        '<span class="row-meta">' + item.meta + "</span>" +
        "</label>"
    );
    return { node: row, total: 1 };
  }

  function rowLegacyGroup(group) {
    var wrap = el(
      '<div class="subgroup">' +
        '<div class="subgroup-label">' + group.label + "<small>" + group.note + "</small></div>" +
        '<div class="legacy-list"></div>' +
        "</div>"
    );
    var list = wrap.querySelector(".legacy-list");
    var total = 0;
    group.films.forEach(function (f) {
      var r = rowMovie({ title: f.title, meta: f.meta, legacy: true });
      list.appendChild(r.node);
      total += r.total;
    });
    return { node: wrap, total: total };
  }

  function rowSeries(item) {
    var details = el(
      '<details class="show">' +
        '<summary class="show-summary">' +
        CHEVRON_SVG +
        '<span class="show-title-wrap"><span class="show-title">' +
        item.title +
        '</span><span class="show-meta">' +
        item.meta +
        "</span></span>" +
        '<span class="show-frac">0/' + item.episodes + "</span>" +
        "</summary>" +
        '<div class="episode-panel">' +
        '<div class="episode-grid"></div>' +
        '<div class="episode-actions">' +
        '<button type="button" class="link-btn" data-action="mark-all">Mark all watched</button>' +
        '<button type="button" class="link-btn" data-action="clear-all">Clear season</button>' +
        "</div></div></details>"
    );
    var grid = details.querySelector(".episode-grid");
    for (var n = 1; n <= item.episodes; n++) {
      var key = item.id + "_ep" + n;
      var checked = !!state[key];
      var chip = el(
        '<label class="ep-chip">' +
          '<input type="checkbox" data-key="' + key + '"' + (checked ? " checked" : "") + ">" +
          '<span class="ep-num">' + n + "</span>" +
          "</label>"
      );
      grid.appendChild(chip);
    }
    details._seriesId = item.id;
    details._episodeCount = item.episodes;
    return { node: details, total: item.episodes };
  }

  var pillsBySection = {};

  DATA.forEach(function (section) {
    var sectionEl = el('<section class="phase-section" id="' + section.id + '"></section>');
    if (section.saga) {
      sectionEl.appendChild(el('<p class="saga-kicker">' + section.saga + "</p>"));
    }

    sectionEl.appendChild(
      el(
        '<div class="phase-title-row"><h2 class="phase-title">' +
          section.title +
          '</h2><span class="phase-frac" data-section-frac="' +
          section.id +
          '">0/0</span></div>'
      )
    );

    var sectionTotal = 0;

    section.items.forEach(function (item) {
      var result;
      if (item.kind === "movie") result = rowMovie(item);
      else if (item.kind === "series") result = rowSeries(item);
      else if (item.kind === "legacy-group") result = rowLegacyGroup(item);
      sectionEl.appendChild(result.node);
      sectionTotal += result.total;
    });

    sectionEl.dataset.total = sectionTotal;
    main.appendChild(sectionEl);

    var pill = el(
      '<button type="button" class="nav-pill" data-target="' +
        section.id +
        '">' +
        section.title +
        '<span class="pill-frac">0/' + sectionTotal + "</span></button>"
    );
    pill.addEventListener("click", function () {
      document.getElementById(section.id).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(pill);
    pillsBySection[section.id] = pill;
  });

  /* ============================================================
     Progress calculation
     ============================================================ */
  var allCheckboxes = Array.prototype.slice.call(main.querySelectorAll('input[type="checkbox"]'));
  var overallTotal = allCheckboxes.length;
  document.getElementById("progressTotal").textContent = overallTotal;

  function refreshAll() {
    var overallChecked = 0;

    DATA.forEach(function (section) {
      var sectionEl = document.getElementById(section.id);
      var boxes = sectionEl.querySelectorAll('input[type="checkbox"]');
      var checked = 0;
      boxes.forEach(function (b) {
        if (b.checked) checked++;
      });
      overallChecked += checked;

      var fracEl = sectionEl.querySelector("[data-section-frac]");
      fracEl.textContent = checked + "/" + sectionEl.dataset.total;

      var pillFrac = pillsBySection[section.id].querySelector(".pill-frac");
      pillFrac.textContent = checked + "/" + sectionEl.dataset.total;
    });

    // per-show fractions + completeness
    main.querySelectorAll("details.show").forEach(function (details) {
      var boxes = details.querySelectorAll('input[type="checkbox"]');
      var checked = 0;
      boxes.forEach(function (b) {
        if (b.checked) checked++;
      });
      var fracEl = details.querySelector(".show-frac");
      fracEl.textContent = checked + "/" + details._episodeCount;
      details.classList.toggle("is-complete", checked === details._episodeCount);
    });

    document.getElementById("progressCount").textContent = overallChecked;
    var pct = overallTotal ? (overallChecked / overallTotal) * 100 : 0;
    document.getElementById("progressFill").style.width = pct + "%";
  }

  /* ============================================================
     Events
     ============================================================ */
  main.addEventListener("change", function (e) {
    var target = e.target;
    if (target.tagName !== "INPUT" || target.type !== "checkbox") return;
    var key = target.dataset.key;
    if (!key) return;
    state[key] = target.checked;
    save();
    refreshAll();
  });

  main.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    e.preventDefault();
    var details = btn.closest("details.show");
    if (!details) return;
    var boxes = details.querySelectorAll('input[type="checkbox"]');
    var makeChecked = btn.dataset.action === "mark-all";
    boxes.forEach(function (b) {
      b.checked = makeChecked;
      state[b.dataset.key] = makeChecked;
    });
    save();
    refreshAll();
  });

  var hideBtn = document.getElementById("hideWatchedBtn");
  hideBtn.addEventListener("click", function () {
    var active = document.body.classList.toggle("hide-watched");
    hideBtn.setAttribute("aria-pressed", active ? "true" : "false");
    hideBtn.textContent = active ? "Show all" : "Hide watched";
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    var ok = window.confirm("Reset every checkbox on this tracker? This can't be undone.");
    if (!ok) return;
    state = {};
    save();
    allCheckboxes.forEach(function (b) {
      b.checked = false;
    });
    refreshAll();
  });

  /* ============================================================
     Scroll-spy for nav pills
     ============================================================ */
  var sectionEls = DATA.map(function (s) {
    return document.getElementById(s.id);
  });

  function setActivePill(id) {
    Object.keys(pillsBySection).forEach(function (key) {
      pillsBySection[key].classList.toggle("active", key === id);
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActivePill(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sectionEls.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ============================================================
     Init
     ============================================================ */
  refreshAll();
  setActivePill(DATA[0].id);
})();
