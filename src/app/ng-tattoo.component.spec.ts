import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgTattooAppComponent } from '../app/ng-tattoo.component';

beforeEachProviders(() => [NgTattooAppComponent]);

describe('App: NgTattoo', () => {
  it('should create the app',
      inject([NgTattooAppComponent], (app: NgTattooAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-tattoo works!\'',
      inject([NgTattooAppComponent], (app: NgTattooAppComponent) => {
    expect(app.title).toEqual('ng-tattoo works!');
  }));
});
