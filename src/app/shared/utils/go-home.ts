import { Router } from '@angular/router';

/** Brand/logo click: go back to the top of the home page from anywhere. */
export function goHomeTop(router: Router): void {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (router.url.split(/[?#]/)[0] !== '/') {
    router.navigateByUrl('/').then(scrollTop);
    return;
  }

  scrollTop();
}
