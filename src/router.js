const SERVICE_DETAIL_PATTERN = /^\/layanan\/([^/]+)\/?$/;

export function getRoute(pathname = window.location.pathname) {
  if (pathname === "/" || pathname === "") {
    return { name: "home" };
  }

  if (pathname === "/about" || pathname === "/about/") {
    return { name: "about" };
  }

  const serviceMatch = pathname.match(SERVICE_DETAIL_PATTERN);
  if (serviceMatch) {
    return {
      name: "service-detail",
      slug: decodeURIComponent(serviceMatch[1]),
    };
  }

  return { name: "not-found" };
}

export function initRouter(render) {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-router-link]");
    if (!link) return;

    const url = new URL(link.href);
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (
      isModifiedClick ||
      link.target === "_blank" ||
      url.origin !== window.location.origin
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
    render();
  });

  window.addEventListener("popstate", render);
}
