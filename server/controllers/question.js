import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const __dirname = path.resolve();

const scrapeQuestion = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: "url is required" });

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load" });

    page.setViewport({
      width: 1080,
      height: 1080,
    });

    const selector = "div.problem-statement";

    const rect = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      const { x, y, width, height } = element.getBoundingClientRect();
      return { left: x, top: y, width, height, id: element.id };
    }, selector);

    const questionName = uuidv4();
    const path = __dirname + `/questions/${questionName}.png`;

    await page.screenshot({
      path,
      clip: {
        x: rect.left - 10,
        y: rect.top - 10,
        width: rect.width + 20,
        height: rect.height + 20,
      },
    });

    return res.status(200).json({
      questionSource: questionName + ".png",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { scrapeQuestion };
