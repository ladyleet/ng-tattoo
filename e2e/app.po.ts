export class NgTattooPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-tattoo-app h1')).getText();
  }
}
