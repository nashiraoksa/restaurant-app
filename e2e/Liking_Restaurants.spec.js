/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.content__heading');
  //   pause();
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  //   pause();

  I.waitForElement('.resto-item__name a');

  const firstResto = locate('.resto-item__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  //   pause();
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item__name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-item__name a');

  const firstResto = locate('.resto-item__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  //   pause();
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item__name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  const likedResto = locate('.resto-item__name a').first();
  I.click(likedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});
