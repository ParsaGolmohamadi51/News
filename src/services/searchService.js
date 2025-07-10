export async function sendSearchQuery(query) {
  try {
    const response = await fetch("https://your-api-url.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error("خطا در دریافت نتایج جستجو");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search error:", error.message);
    throw error;
  }
}
