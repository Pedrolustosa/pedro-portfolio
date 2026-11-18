import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let router: Router;
  let link: HTMLAnchorElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter(routes)]
    }).compileComponents();

    TestBed.createComponent(App);
    router = TestBed.inject(Router);

    link = document.createElement('a');
    link.setAttribute('href', '#about');
    document.body.appendChild(link);
  });

  afterEach(() => link.remove());

  it('routes section links through the Router outside the home page', async () => {
    await router.navigateByUrl('/projects/identityhub');
    const navigate = spyOn(router, 'navigate').and.resolveTo(true);

    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBeTrue();
    expect(navigate).toHaveBeenCalledWith(['/'], { fragment: 'about' });
  });

  it('leaves native anchor behaviour alone on the home page', async () => {
    await router.navigateByUrl('/');
    const navigate = spyOn(router, 'navigate');

    // Cancel at the document level after App has seen the click,
    // so the test runner page itself does not jump.
    const cancel = (e: Event) => e.preventDefault();
    document.addEventListener('click', cancel);

    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    document.removeEventListener('click', cancel);

    expect(navigate).not.toHaveBeenCalled();
  });

  it('sets the page title per route', async () => {
    await router.navigateByUrl('/projects/identityhub');
    expect(document.title).toBe('IdentityHub | Pedro Lustosa');

    await router.navigateByUrl('/');
    expect(document.title).toBe('Pedro Lustosa | Software Engineer');
  });
});
