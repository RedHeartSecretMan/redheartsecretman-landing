(() => {
  const resumeLink = document.getElementById('resume-link');
  const destination = new URL(resumeLink.href);
  destination.search = window.location.search;
  destination.hash = window.location.hash;
  resumeLink.href = destination.href;

  // Replace the entry page so Back does not send visitors through it again.
  window.location.replace(destination.href);
})();
