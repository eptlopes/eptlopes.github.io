/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sFjDVEp5PhX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import Link from "next/link"

 export default function Component() {
   return (
     <section className="container mx-auto py-12 px-4 md:px-6">
       <h1 className="text-3xl font-bold mb-8">Choose Your Store</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl">
           <Link href="#" className="block" prefetch={false}>
             <img
               src="/placeholder.svg"
               alt="Store 1"
               width={400}
               height={300}
               className="w-full h-48 object-cover"
               style={{ aspectRatio: "400/300", objectFit: "cover" }}
             />
             <div className="p-4">
               <h3 className="text-xl font-semibold mb-2">Store 1</h3>
               <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
           </Link>
         </div>
         <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl">
           <Link href="#" className="block" prefetch={false}>
             <img
               src="/placeholder.svg"
               alt="Store 2"
               width={400}
               height={300}
               className="w-full h-48 object-cover"
               style={{ aspectRatio: "400/300", objectFit: "cover" }}
             />
             <div className="p-4">
               <h3 className="text-xl font-semibold mb-2">Store 2</h3>
               <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
           </Link>
         </div>
         <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl">
           <Link href="#" className="block" prefetch={false}>
             <img
               src="/placeholder.svg"
               alt="Store 3"
               width={400}
               height={300}
               className="w-full h-48 object-cover"
               style={{ aspectRatio: "400/300", objectFit: "cover" }}
             />
             <div className="p-4">
               <h3 className="text-xl font-semibold mb-2">Store 3</h3>
               <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
           </Link>
         </div>
         <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl">
           <Link href="#" className="block" prefetch={false}>
             <img
               src="/placeholder.svg"
               alt="Store 4"
               width={400}
               height={300}
               className="w-full h-48 object-cover"
               style={{ aspectRatio: "400/300", objectFit: "cover" }}
             />
             <div className="p-4">
               <h3 className="text-xl font-semibold mb-2">Store 4</h3>
               <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
           </Link>
         </div>
       </div>
     </section>
   )
 }