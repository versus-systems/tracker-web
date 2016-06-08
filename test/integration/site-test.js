import 'babel-polyfill'
import {assert} from '../support/chai';

describe('Site', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should have a title', async () => {
    let headerText = await browser.getText('h3');

    assert.equal(headerText, 'Sample Project');
  });
});
