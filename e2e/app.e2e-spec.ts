import { MpIrcTempPage } from './app.po';

describe('mp-irc-temp App', function() {
  let page: MpIrcTempPage;

  beforeEach(() => {
    page = new MpIrcTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
