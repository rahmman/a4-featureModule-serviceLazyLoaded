import { A4FeatureModuleServiceLazyLoadedPage } from './app.po';

describe('a4-feature-module-service-lazy-loaded App', function() {
  let page: A4FeatureModuleServiceLazyLoadedPage;

  beforeEach(() => {
    page = new A4FeatureModuleServiceLazyLoadedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
