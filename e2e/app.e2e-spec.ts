import { DataVisualizationPage } from './app.po';

describe('weather-data App', () => {
  let page: DataVisualizationPage;

  beforeEach(() => {
    page = new DataVisualizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dv works!');
  });
});
