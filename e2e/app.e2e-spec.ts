import { FirstPrinciplesPage } from './app.po';

describe('first-principles App', () => {
  let page: FirstPrinciplesPage;

  beforeEach(() => {
    page = new FirstPrinciplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
