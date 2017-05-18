import { QtPage } from './app.po';

describe('qt App', () => {
  let page: QtPage;

  beforeEach(() => {
    page = new QtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
