export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  
  // Si la ruta contiene un punto (archivo) o es /assets/, déjala pasar
  if (url.pathname.includes('.') || url.pathname.startsWith('/assets/')) {
    return next();
  }
  
  // Si es una ruta de navegación SPA, redirige a index.html
  const response = await next();
  
  // Si la respuesta es 404, sirve index.html para SPA routing
  if (response.status === 404) {
    return new Response(await fetch(new URL('/index.html', url.origin)).then(r => r.text()), {
      headers: { 'Content-Type': 'text/html' }
    });
  }
  
  return response;
}