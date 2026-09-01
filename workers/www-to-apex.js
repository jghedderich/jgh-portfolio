/**
 * Host-level redirects are not supported in `_redirects`.
 * Send www to the canonical origin, then serve the static build.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.juanhedderich.com') {
      url.hostname = 'juanhedderich.com';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
