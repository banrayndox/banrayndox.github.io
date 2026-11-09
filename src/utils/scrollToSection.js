/**
 * Smooth scrolling utility that handles in-page section navigation cleanly
 * across both Home and Article sub-routes without triggering 404 errors.
 */
export function scrollToTarget(targetId, navigate, pathname) {
  const cleanId = targetId.replace(/^#/, '');

  if (pathname === '/') {
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${cleanId}`);
    }
  } else {
    // Navigate back to home with hash
    navigate(`/#${cleanId}`);
    // Wait for DOM to render after route transition
    setTimeout(() => {
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  }
}
