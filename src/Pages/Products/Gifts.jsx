import { ShoppingCart, Star, Gift } from "lucide-react";

const gifts = [
  {
    id: 1,
    name: "Luxury Gift Box",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Pink Celebration Gift",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Beautiful Flower Bouquet",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Birthday Gift Set",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Romantic Gift Box",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Special Flower Gift",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  },
];

function Gifts() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
              <Gift className="text-pink-600" size={28} />
            </div>
          </div>

          <p className="text-pink-600 font-semibold mb-2">
            Pujan Cake and Gift House
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Beautiful Gifts
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Find the perfect gift for birthdays, anniversaries and every
            special occasion.
          </p>

        </div>
      </section>

      {/* Gift Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our Gifts
            </h2>

            <p className="text-gray-500 mt-1">
              Make someone's day special
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {gifts.length} gifts available
          </span>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Gift Badge */}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full shadow">
                  <span className="text-sm font-medium text-pink-600">
                    Gift
                  </span>
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <span className="font-bold text-gray-900">
                    ${gift.price}
                  </span>
                </div>

              </div>

              {/* Details */}
              <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-900">
                  {gift.name}
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
                      Price
                    </p>

                    <p className="text-2xl font-bold text-pink-600">
                      ${gift.price}
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

export default Gifts;