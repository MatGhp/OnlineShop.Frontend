import { OnlineShopPage } from './app.po';

describe('online-shop App', function() {
  let page: OnlineShopPage;

  beforeEach(() => {
    page = new OnlineShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
