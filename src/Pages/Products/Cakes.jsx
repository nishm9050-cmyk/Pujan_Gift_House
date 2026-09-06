import { ShoppingCart, Star } from "lucide-react";

const cakes = [
  {
    id: 1,
    name: "Strawberry Dream Cake",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Chocolate Delight",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Berry Celebration Cake",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Classic Vanilla Cake",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Fresh Cream Cake",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Birthday Special Cake",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
  },
];

function Cakes() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-pink-600 font-semibold mb-2">
            Pujan Cake and Gift House
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Delicious Cakes
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Freshly made cakes for birthdays, celebrations and every special
            moment.
          </p>
        </div>
      </section>

      {/* Cakes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our Cakes
            </h2>
            <p className="text-gray-500 mt-1">
              Choose your favorite cake
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {cakes.length} cakes available
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <span className="font-bold text-gray-900">
                    ${cake.price}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-900">
                  {cake.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                  <span className="text-sm text-gray-500 ml-1">
                    5.0
                  </span>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-sm text-gray-500">
                      Starting from
                    </p>

                    <p className="text-2xl font-bold text-pink-600">
                      ${cake.price}
                    </p>
                  </div>

                  <button
                    className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-pink-600 transition"
                  >
                    <ShoppingCart size={18} />
                    Add
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Cakes;