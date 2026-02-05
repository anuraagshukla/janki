export default function Products() {
  const products = [
    { id: 1, name: "Campa Cola", price: 40, image: "/1.jpg" },
    { id: 2, name: "Campa Lemon", price: 35, image: "/2.jpg" },
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
            <h3 className="mt-2 font-semibold">{p.name}</h3>
            <p className="text-purple-700 font-bold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
