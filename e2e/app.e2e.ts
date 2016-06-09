import { NgTattooPage } from './app.po';

describe('ng-tattoo App', function() {
  let page: NgTattooPage;

  beforeEach(() => {
    page = new NgTattooPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-tattoo works!');
  });
});
