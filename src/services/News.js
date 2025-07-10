export async function getNews() {
  try {
    const res = await fetch("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("خطا در دریافت اخبار");

    return await res.json();
  } catch (error) {
    console.error("خطا در دریافت اخبار:", error);
    return [];
  }
}
