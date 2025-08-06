import ProductPage from '@/components/modules/ProductPage'
import { connectDB } from '@/utils/DB/connectDB'
import Ad from '@/utils/DB/modelAd'
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const { productsId } = params; 

  try {
    await connectDB()
    const ad = await Ad.findOne({ _id: Object(productsId) }); 
    console.log(ad)
    // if (!ad) return notFound(); 
    return <ProductPage information={JSON.parse(JSON.stringify(ad))} />
  } catch (err) {
    console.error("DB error:", err)
    return notFound(); 
  }
}
