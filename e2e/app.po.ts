import { browser, by, element } from 'protractor';

export class DataVisualizationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dv-root h1')).getText();
  }
}
