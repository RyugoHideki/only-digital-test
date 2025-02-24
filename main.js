const { test, expect } = require('@playwright/test');

test('Check footer presence and elements on only.digital', async ({ page }) => {
    // Переходим на главную страницу сайта
    await page.goto('https://only.digital/');

    // Проверяем, что футер присутствует на странице
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Проверяем наличие определённых элементов в футере
    const footerLinks = footer.locator('a');
    await expect(footerLinks).not.toHaveCount(0); // Проверяем, что есть хотя бы одна ссылка

    const footerText = footer.locator('p');
    await expect(footerText).not.toHaveCount(0); // Проверяем, что есть хотя бы один текстовый блок

    // Дополнительные проверки, если необходимо
    const socialMediaLinks = footer.locator('.social-media a');
    await expect(socialMediaLinks).not.toHaveCount(0); // Проверяем наличие ссылок на соцсети
});
