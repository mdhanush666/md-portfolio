/**
 * ============================================================================
 * MVC VIEW: UI Rendering & DOM Updates (js/views/portfolioView.js)
 * Responsible for rendering shared navbar/footer, skills, projects, and modals.
 * ============================================================================
 */
window.PortfolioView = (function () {
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className =
      'px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 font-medium text-xs shadow-lg border border-slate-700 transition-all duration-300';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2600);
  }

  function renderSkills(skills, activeCategory) {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    document.querySelectorAll('.skill-filter-btn').forEach(function (btn) {
      const isMatch = btn.getAttribute('data-skill-filter') === activeCategory;
      btn.className = isMatch
        ? 'skill-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-semibold bg-emerald-500 text-white shadow-sm transition'
        : 'skill-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition';
    });

    grid.innerHTML = skills
      .map(function (skill) {
        return (
          '<div class="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 transition group">' +
            '<div class="flex items-center justify-between gap-2 mb-1">' +
              '<span class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">' +
                skill.name +
              '</span>' +
              '<span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">' +
                skill.tag +
              '</span>' +
            '</div>' +
            '<p class="text-xs text-slate-500 dark:text-slate-400">' + skill.detail + '</p>' +
          '</div>'
        );
      })
      .join('');
  }

  function filterProjectCards(activeCategory) {
    document.querySelectorAll('.proj-filter-btn').forEach(function (btn) {
      const isMatch = btn.getAttribute('data-proj-filter') === activeCategory;
      btn.className = isMatch
        ? 'proj-filter-btn px-3.5 py-2 rounded-xl text-xs font-mono-code font-semibold bg-emerald-500 text-white shadow-sm transition'
        : 'proj-filter-btn px-3.5 py-2 rounded-xl text-xs font-mono-code font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition';
    });

    document.querySelectorAll('.project-card').forEach(function (card) {
      if (activeCategory === 'all' || card.getAttribute('data-category') === activeCategory) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    if (!modal || !project) return;

    document.getElementById('modalProjBadge').textContent = project.badge + ' • ' + project.statusBadge;
    document.getElementById('modalProjTitle').textContent = project.title;

    const bulletsHtml = project.highlights
      .map(function (h) {
        return '<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span><span>' + h + '</span></li>';
      })
      .join('');

    const linksHtml = project.links
      .map(function (l) {
        return (
          '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition">' +
            '<span>' + l.label + '</span>' +
            '<span>↗</span>' +
          '</a>'
        );
      })
      .join('');

    document.getElementById('modalProjContent').innerHTML =
      '<p class="leading-relaxed">' + project.summary + '</p>' +
      '<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">' +
        '<div class="text-xs font-mono-code uppercase text-slate-400">Key Engineering Contributions</div>' +
        '<ul class="space-y-2 text-xs sm:text-sm">' + bulletsHtml + '</ul>' +
      '</div>' +
      '<div class="flex flex-wrap gap-2 pt-2">' + linksHtml + '</div>';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function renderOutboxMessages(messages) {
    const panel = document.getElementById('sentMessagesPanel');
    const list = document.getElementById('sentMessagesList');
    if (!panel || !list) return;

    if (!messages.length) {
      panel.classList.add('hidden');
      return;
    }

    panel.classList.remove('hidden');
    list.innerHTML = messages
      .map(function (m) {
        return (
          '<div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">' +
            '<div class="flex items-center justify-between">' +
              '<span class="font-bold text-slate-900 dark:text-white">' + m.name + ' (' + m.email + ')</span>' +
              '<span class="font-mono-code text-emerald-500">' + m.topic + '</span>' +
            '</div>' +
            '<p class="text-slate-600 dark:text-slate-400">' + m.message + '</p>' +
          '</div>'
        );
      })
      .join('');
  }

  return {
    showToast: showToast,
    renderSkills: renderSkills,
    filterProjectCards: filterProjectCards,
    openProjectModal: openProjectModal,
    renderOutboxMessages: renderOutboxMessages
  };
})();
