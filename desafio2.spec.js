import { test } from '@playwright/test';

test('go to promo do rafa', async ({ page }) => {
  await page.goto('https://promosdarafa.com.br/lojas/mercadolivre?tab=coupons');

  const cards = await page.locator(".sc-1766af8-0.dxZQct").all();
  const buttons = await page.locator(".sc-e7eb2e76-6.hJndBQ").all();
  const descriptions = await page.locator(".sc-1766af8-4.ckmswG").all();

  const result = [];

  const total = Math.min(cards.length, buttons.length, descriptions.length);

  for (let i = 0; i < total; i++) {
    result.push({
      card: await cards[i].innerText(),
      button_link: await buttons[i].getAttribute("href"),
      description: await descriptions[i].innerText()
    });
  }

  console.log(result);
});
