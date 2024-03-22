import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential({ searchParams }) {
  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData?.filter((i) => i.category === searchParams.category);
  }

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
