import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('SearchBar' , () => {
  let component;

  // beforeEach(() => {
  //   component = renderComponent(App);
  // });
  component = renderComponent(SearchBar);

  it('component exists', () => {
    expect(component).to.exist;
  });
});
