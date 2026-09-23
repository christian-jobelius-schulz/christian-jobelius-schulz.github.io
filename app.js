// Content is in the HTML; JavaScript adds the abstract toggles.
document.querySelectorAll('.abstract-button').forEach(button => {
  const detail = document.getElementById(button.getAttribute('aria-controls'));
  if (!detail) return;
  detail.hidden = true;
  button.hidden = false;
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    detail.hidden = open;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
