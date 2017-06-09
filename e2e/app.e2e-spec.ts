import { NgReduxPage } from './app.po';

describe('ng-redux App', () => {
  let page: NgReduxPage;

  beforeEach(() => {
    page = new NgReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
