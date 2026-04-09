// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Firecrawl from "@mendable/firecrawl-js";

// Tailwind class merger utility
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Initialize Firecrawl client (server-side only)
export const firecrawl = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

// Function to scrape product details
export async function scrapeProduct(url) {
  try {
    const response = await firecrawl.scrape({
      url,
      onlyMainContent: false,
      formats: [
        {
          type: "json",
          schema: {
            type: "object",
            properties: {
              ProductName: { type: "string" },
              ProductPrice: { type: "number" },
              PriceCode: { type: "string" },
              ProductUrl: { type: "string" },
            },
          },
          prompt:
            "Extract product name as 'ProductName', product price as a number as 'ProductPrice', currency code (USD/INR) as 'PriceCode', and product URL as 'ProductUrl'.",
        },
      ],
    });

    return response;
  } catch (error) {
    console.error("Firecrawl scraping error:", error);
    throw error;
  }
}