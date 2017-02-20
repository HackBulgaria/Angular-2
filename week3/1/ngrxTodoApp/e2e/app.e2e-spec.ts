import { NgrxTodoAppPage } from './app.po';

describe('ngrx-todo-app App', function() {
  let page: NgrxTodoAppPage;

  beforeEach(() => {
    page = new NgrxTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
