const { test, expect } = require('@playwright/test');

test('Check footer presence and elements on only.digital', async ({ page }) => {
    // Переходим на главную страницу сайта
    await page.goto('https://only.digital/');

    // Проверяем, что футер присутствует на странице
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Проверяем наличие ссылок в футере
    const footerLinks = footer.locator('a');
    await expect(footerLinks).not.toHaveCount(0);

    // Проверяем наличие текста в футере
    const footerText = footer.locator('p');
    await expect(footerText).not.toHaveCount(0);

    // Проверяем наличие ссылок на соцсети (если они есть)
    const socialMediaLinks = footer.locator('a[href*="telegram"], a[href*="twitter"], a[href*="facebook"], a[href*="instagram"]');
    const socialMediaCount = await socialMediaLinks.count();

    if (socialMediaCount > 0) {
        await expect(socialMediaLinks).not.toHaveCount(0);
    } else {
        console.log('Ссылки на социальные сети не найдены в футере.');
    }
});