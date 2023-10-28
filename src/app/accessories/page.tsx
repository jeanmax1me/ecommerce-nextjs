import Container from "@/components/Container";
import Product from "@/components/Product";
import { getAccessories } from "@/helpers";

async function page() {
  const products = await getAccessories();
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-40 pb-4 flex items-center justify-between">
        <h2>Accessories</h2>
        <p>Get your favorite Accessories</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">Showing all {products.lenght} results</p>
      <Product products={products} />
    </Container>
  )
}

export default page