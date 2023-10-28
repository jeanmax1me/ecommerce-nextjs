import Link from "next/link"
import Container from "./Container"
import Product from "./Product"
import { PcCase, ScanFace, Smartphone, Watch } from "lucide-react"
import { getProducts } from "@/helpers"

async function Products() {
    const products = await getProducts();
  return (
    <div className="mt-10 ">
        <Container>
        <div className="flex flex-col gap-2 items-center">
            <h2 className="text-3xl font-semibold">Choose a category</h2>
            <p className="text-lg text-center">Explore dozens of customized layouts made by our brilliant designers</p>
            <div className="text-zinc-500 flex items-center gap-2 md:gap-6">
                <Link href={"/phones"} className="flex gap-2 hover:text-black cursor-pointer duration-200">
                <Smartphone />
                <p>Phones</p>
                </Link>
                <div className="h-7 w-[1px] bg-designColor inline-flex" />
                <Link href={"/phones"} className="flex gap-2 hover:text-black cursor-pointer duration-200">
                <PcCase />
                <p>Phones Cases</p>
                </Link>
                <div className="h-7 w-[1px] bg-designColor inline-flex" />
                <Link href={"/phones"} className="flex gap-2 hover:text-black cursor-pointer duration-200">
                <Watch />
                <p>Watches</p>
                </Link>
                <div className="h-7 w-[1px] bg-designColor inline-flex" />
                <Link href={"/phones"} className="flex gap-2 hover:text-black cursor-pointer duration-200">
                <ScanFace />
                <p>Accessories</p>
                </Link>
            </div>
        </div>
        <Product products={products} />
        </Container>
        </div>
  )
}

export default Products