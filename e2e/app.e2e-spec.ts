import { GoogleMapProjectPage } from './app.po';

describe('google-map-project App', function() {
  let page: GoogleMapProjectPage;

  beforeEach(() => {
    page = new GoogleMapProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
