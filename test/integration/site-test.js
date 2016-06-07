import {assert} from '../support/chai';

describe('Site', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should have a title', async () => {
    let headerText = await browser.getText('h1');

    assert.equal(headerText, 'Project Tracker');
  });
});
