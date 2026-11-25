import { Firecrawl } from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({
    apiKey: process.env.FIRECRAWL_API,
});

export async function scrapData(url) {
    try {
        const result = await firecrawl.scrape(url, {
            extract: {
                prompt:
                    "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
                schema: {
                    type: "object",
                    properties: {
                        productName: { type: "string" },
                        currentPrice: { type: "number" },
                        currencyCode: { type: "string" },
                        productImageUrl: { type: "string" },
                    },
                    required: ["productName", "currentPrice"],
                },
            },
        })
        const extractedData=result.json;
        if(!extractedData || !extractedData.productName) throw new Error("No data extracted from URL")
    } catch (error) {
        console.error("Firecrawl scrape error ",error);
        throw new Error(`Failed to scrap product ${error.message}`)
    }
}