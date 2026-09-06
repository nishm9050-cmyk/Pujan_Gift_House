import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  CreditCard,
} from "lucide-react";

function Cart() {
  // Temporary cart data
  // Later this will come from CartContext/localStorage
  const cartItems = [
    {
      id: 1,
      name: "Strawberry Dream Cake",
      price: 45,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Chocolate Delight",
      price: 50,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal >= 100 ? 0 : 5;
  const total = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              <ShoppingCart className="text-pink-600" size={25} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                तपाईंको कार्ट
              </h1>
              <p className="text-gray-500 mt-1">
                आफ्नो अर्डर जाँच गर्नुहोस्
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0"
                  />

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h2 className="font-bold text-gray-900 text-base sm:text-lg">
                          {item.name}
                        </h2>

                        <p className="text-pink-600 font-semibold mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        className="text-gray-400 hover:text-red-500 transition"
                        aria-label="Remove item"
                      >
                        <Trash2 size={19} />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button className="p-2 hover:bg-gray-100 transition">
                          <Minus size={16} />
                        </button>

                        <span className="px-4 font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button className="p-2 hover:bg-gray-100 transition">
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              to="/products/cakes"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition mt-3"
            >
              <ArrowLeft size={18} />
              किनमेल जारी राख्नुहोस्
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900">
                अर्डरको सारांश
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>उप-जम्मा</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>डेलिभरी शुल्क</span>
                  <span>
                    {deliveryCharge === 0
                      ? "निःशुल्क"
                      : `$${deliveryCharge.toFixed(2)}`}
                  </span>
                </div>

                {deliveryCharge === 0 && (
                  <p className="text-sm text-green-600">
                    ✓ $100 भन्दा बढीको अर्डरमा निःशुल्क डेलिभरी
                  </p>
                )}

                <div className="border-t border-gray-100 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    जम्मा
                  </span>

                  <span className="text-xl font-bold text-pink-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3.5 rounded-xl font-semibold transition"
              >
                <CreditCard size={19} />
                Checkout गर्नुहोस्
              </Link>

              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                Checkout पछि हामी तपाईंलाई फोन गरेर अर्डरको विवरण पुष्टि
                गर्नेछौं।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;