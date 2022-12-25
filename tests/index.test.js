import { expect, test } from '@playwright/test';

test("page title is 'textarea-autosize by javierjulio'", async ({ page }) => {
  await page.goto("/textarea-autosize/")
  await expect(page).toHaveTitle("textarea-autosize by javierjulio")
})

test("page content includes project heading", async ({ page }) => {
  await page.goto("/textarea-autosize/")
  await expect(page.getByRole("heading", { name: "Textarea AutoSize" })).toBeVisible()
})

test("has a rendered height of 2 lines when large enough text entered", async ({ page }) => {
  await page.goto("/textarea-autosize/")

  await expect(page.getByTestId("sample-textarea")).toHaveText("")
  await expect(page.getByTestId("sample-textarea")).toHaveJSProperty("offsetHeight", 38)

  const longText = "this is a test with a very long message entry that is just blah and just adds more text"
  await page.getByTestId("sample-textarea").fill(longText)
  await expect(page.getByTestId("sample-textarea")).toHaveJSProperty("offsetHeight", 62)
})

test("resizes to one line when deleting all text", async ({ page }) => {
  await page.goto("/textarea-autosize/")

  const longText = "this is a test with a very long message entry that is just blah and just adds more text"
  await page.getByTestId("sample-textarea").fill(longText)
  await expect(page.getByTestId("sample-textarea")).toHaveJSProperty("offsetHeight", 62)

  await page.getByTestId("sample-textarea").fill("")
  await expect(page.getByTestId("sample-textarea")).toHaveJSProperty("offsetHeight", 38)
})

test("stops resizing when max-height is reached", async ({ page }) => {
  await page.goto("/textarea-autosize/")

  const maxHeight = 100
  const longText = Array.from({length: 20}, () => "this is a long message").join(" ")

  const textarea = page.getByTestId("sample-textarea")
  await textarea.evaluate((el, maxHeight) => el.style.maxHeight = `${maxHeight}px`, maxHeight);
  await textarea.fill(longText)

  await expect(textarea).toHaveJSProperty("offsetHeight", maxHeight)
  await expect(textarea).toHaveCSS("height", `${maxHeight}px`)

  const scrollHeight = await textarea.evaluate(el => el.scrollHeight);
  expect(scrollHeight).toBeGreaterThan(maxHeight)
})
