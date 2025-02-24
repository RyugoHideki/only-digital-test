const { test, expect } = require('@playwright/test');

test('Check footer presence and elements on only.digital', async ({ page }) => {
    // Переходим на главную страницу сайта
    await page.goto('https://only.digital/');

    // Ожидаем появления футера
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Проверяем наличие ссылок в футере
    const footerLinks = footer.locator('a');
    await expect(footerLinks).not.toHaveCount(0);

    // Проверяем наличие текста в футере
    const footerText = footer.locator('p');
    await expect(footerText).not.toHaveCount(0);

    // Проверяем наличие ссылки на Telegram
    const telegramButton = footer.locator('a[href="https://t.me/onlycreativedigitalagency"]');
    if (await telegramButton.isVisible()) {
        await expect(telegramButton).toBeVisible();
        await telegramButton.click();

        // Проверяем, что открылась новая вкладка с Telegram
        const newPage = await page.waitForEvent('popup');
        await expect(newPage).toHaveURL('https://t.me/onlycreativedigitalagency');
    } else {
        console.log('Ссылка на Telegram не найдена в футере.');
    }
});