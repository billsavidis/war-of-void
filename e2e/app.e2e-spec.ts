import { WarOfVoidPage } from './app.po';

describe('war-of-void App', () => {
  let page: WarOfVoidPage;

  beforeEach(() => {
    page = new WarOfVoidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
