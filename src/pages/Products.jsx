export default function Products() {
  const products = [
    { id: 1, name: "Campa Cola", price: 40, image: "/cola.png" },
    { id: 2, name: "Campa Lemon", price: 35, image: "/lemon.png" },
       { id: 3, name: "Campa Orange", price: 35, image: "/orange.png" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            <img src={p.image} className="h-32 mx-auto" />
            <h3 className="mt-2 text-center font-semibold">{p.name}</h3>
            <p className="text-center text-muted-700 font-bold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
