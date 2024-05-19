import Image from 'next/image'
import Link from 'next/link'
import ProductPage from './users/components/productPage'

export default function Home() {
  return (
   <main>
    <h1>Hello, this is my first next js app</h1>
    <a href="./users">Users</a><br/>
    <Link href="./users/new">New User</Link>
    <ProductPage />
   </main>
  )
}
