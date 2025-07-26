import axios from "axios";

export async function fetchNews() {
  try {
    const response = await axios.get("http://localhost:8080/news/latest/New");
    console.log("داده دریافتی از بک‌اند:", response.data);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت اخبار:", error);
    throw new Error("خطا در دریافت اخبار");
  }
}
