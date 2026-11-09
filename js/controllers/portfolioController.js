/**
 * ============================================================================
 * MVC CONTROLLER: Event Handling & Coordination (js/controllers/portfolioController.js)
 * Connects PortfolioModel and PortfolioView across Home, About, Projects, & Contact.
 * ============================================================================
 */
window.PortfolioController = (function (Model, View) {
  function initTheme() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const html = document.documentElement;
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      try {
        localStorage.setItem('md_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
      View.showToast(isDark ? 'Dark Developer Theme enabled' : 'Light Theme enabled');
    });
  }

  function initMobileDrawer() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    if (!btn || !drawer) return;
    btn.addEventListener('click', function () {
      drawer.classList.toggle('hidden');
    });
  }

  function initCopyButtons() {
    document.querySelectorAll('.copy-trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const text = btn.getAttribute('data-copy');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            View.showToast('Copied to clipboard: ' + text);
          });
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy');
            View.showToast('Copied to clipboard: ' + text);
          } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    });
  }

  function initSkillsSection() {
    View.renderSkills(Model.getSkillsByCategory('all'), 'all');
    document.querySelectorAll('.skill-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const category = btn.getAttribute('data-skill-filter');
        View.renderSkills(Model.getSkillsByCategory(category), category);
      });
    });
  }

  function initProjectsSection() {
    document.querySelectorAll('.proj-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const category = btn.getAttribute('data-proj-filter');
        View.filterProjectCards(category);
      });
    });

    document.querySelectorAll('.open-project-modal').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const id = btn.getAttribute('data-project-modal');
        View.openProjectModal(Model.getProjectById(id));
      });
    });

    const closeBtn = document.getElementById('closeProjectModalBtn');
    const modal = document.getElementById('projectModal');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      });
    }
  }

  function initContactSection() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const topicInput = document.getElementById('contactTopic');
    document.querySelectorAll('.topic-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        topicInput.value = pill.getAttribute('data-topic');
        document.querySelectorAll('.topic-pill').forEach(function (p) {
          p.className =
            'topic-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition';
        });
        pill.className = 'topic-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-white transition';
      });
    });

    View.renderOutboxMessages(Model.getMessages());

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const topic = topicInput.value;
      const errEl = document.getElementById('formErrorMsg');

      if (!name || !email || !message || !email.includes('@')) {
        errEl.textContent = 'Please provide your name, a valid email address, and a message.';
        errEl.classList.remove('hidden');
        return;
      }
      errEl.classList.add('hidden');

      const updated = Model.saveMessage({ name: name, email: email, topic: topic, message: message });
      View.renderOutboxMessages(updated);

      // Build WhatsApp Click-to-Chat URL with pre-filled form message
      const waText = encodeURIComponent(
        '*[' + topic + ']*\n' +
        '*Name:* ' + name + '\n' +
        '*Email:* ' + email + '\n\n' +
        '*Message:*\n' + message
      );
      window.open('https://wa.me/94759561933?text=' + waText, '_blank');

      form.reset();
      View.showToast('Message logged & opening WhatsApp chat!');
    });

    const clearBtn = document.getElementById('clearMessagesBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        View.renderOutboxMessages(Model.clearMessages());
        View.showToast('Session message log cleared.');
      });
    }

    const mailtoBtn = document.getElementById('mailtoFallbackBtn');
    if (mailtoBtn) {
      mailtoBtn.addEventListener('click', function () {
        const name = document.getElementById('contactName').value.trim() || 'Hiring / Project Contact';
        const topic = topicInput.value || 'Portfolio Inquiry';
        const msg =
          document.getElementById('contactMessage').value.trim() ||
          'Hi Dhanush, I viewed your portfolio and would love to connect.';
        const subject = encodeURIComponent('[' + topic + '] From ' + name);
        const body = encodeURIComponent(msg + '\n\n— ' + name);
        window.open('mailto:' + Model.PROFILE.email + '?subject=' + subject + '&body=' + body, '_blank');
      });
    }
  }

  function init() {
    initTheme();
    initMobileDrawer();
    initCopyButtons();
    initSkillsSection();
    initProjectsSection();
    initContactSection();
  }

  return { init: init };
})(window.PortfolioModel, window.PortfolioView);

document.addEventListener('DOMContentLoaded', function () {
  window.PortfolioController.init();
});
