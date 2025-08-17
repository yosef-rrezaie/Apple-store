import ProductPage from '@/components/modules/ProductPage'
import { connectDB } from '@/utils/DB/connectDB'
import Ad from '@/utils/DB/modelAd'
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const { productsId } = params; 

  try {
    await connectDB()
    const ad = await Ad.findOne({ _id: Object(productsId) , published : true }); 
    const session = await getServerSession()
    if(!ad) throw new Error
    if(session) return <ProductPage information={JSON.parse(JSON.stringify(ad))} emailUser={session.user.email}/>
    else return <ProductPage information={JSON.parse(JSON.stringify(ad))} emailUser="NotFound"/>
  } catch (err) {
    console.error("DB error:", err)
    return notFound();  
  }
}
