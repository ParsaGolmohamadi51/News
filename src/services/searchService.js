import axios from "axios";

export async function sendSearchQuery(query) {
  try {
    const response = await axios.post("http://localhost:8080/news/search", {
      query,
    });

    return response.data;
  } catch (error) {
    console.error("خطا در دریافت نتایج جستجو:", error);
    return [];
  }
}
