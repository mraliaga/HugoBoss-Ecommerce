export const fetchProducts = async () => {
  try {
    const response = await fetch("db.json");

    // Eger hata yoksa veriyi donustur.
    if (!response.ok) {
      throw new Error("Yanlis Url.Kaybol");
    }
    return await response.json();
  } catch (error) {
    console.log(`hata: ${error}`);

    return [];
  }
};
