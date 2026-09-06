import { ShoppingCart, Star } from "lucide-react";

const accessories = [
  {
    id: 1,
    name: "Birthday Candle Set",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Birthday Balloons",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Cake Topper",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Party Decoration Set",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Birthday Greeting Card",
    price: 7,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Celebration Decoration Kit",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80",
  },
];

function Accessories() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

          <p className="text-pink-600 font-semibold mb-2">
            Pujan Cake and Gift House
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Cake Accessories
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Everything you need to make your celebration more beautiful,
            colorful and memorable.
          </p>

        </div>
      </section>

      {/* Accessories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our Accessories
            </h2>

            <p className="text-gray-500 mt-1">
              Perfect additions for your celebration
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {accessories.length} products available
          </span>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full shadow">
                  <span className="text-sm font-medium text-pink-600">
                    Accessory
                  </span>
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <span className="font-bold text-gray-900">
                    ${item.price}
                  </span>
                </div>

              </div>

              {/* Product Details */}
              <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
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

                {/* Price + Add */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="text-2xl font-bold text-pink-600">
                      ${item.price}
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

export default Accessories;