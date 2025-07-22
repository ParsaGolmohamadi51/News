export async function fetchNews() {
  const res = await fetch("http://localhost:8080/news/latest/New");
  if (!res.ok) throw new Error("خطا در دریافت اخبار");
  const data = await res.json();
  console.log("داده دریافتی از بک‌اند:", data);
  return data;
}
