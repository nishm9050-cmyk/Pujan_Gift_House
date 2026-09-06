import { Link } from "react-router-dom";

const featuredCakes = [
  {
    name: "Strawberry Dream",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate Delight",
    price: "$44.99",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Berry Celebration",
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  return (
    <main className="bg-[#fffaf7]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[650px] py-16">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              🎂 Freshly Baked Every Day
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Life is
              <span className="text-pink-500"> sweeter </span>
              with cake.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Delicious handcrafted cakes made with premium ingredients
              for birthdays, weddings, celebrations and every sweet moment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <Link
                to="/cakes"
                className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-pink-200 transition"
              >
                Explore Cakes →
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 hover:border-pink-400 hover:text-pink-500 px-7 py-4 rounded-full font-semibold transition"
              >
                Our Story
              </Link>

            </div>

            <div className="mt-10 flex justify-center lg:justify-start gap-8">

              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div className="w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-500">
                  Cake Designs
                </p>
              </div>

              <div className="w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-bold">4.9★</p>
                <p className="text-sm text-gray-500">
                  Rating
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-60" />

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50" />

            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful decorated cake"
              className="relative w-full h-[450px] sm:h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl">

              <div className="flex items-center gap-3">
                <span className="text-3xl">⭐</span>

                <div>
                  <p className="font-bold">
                    Loved by 10,000+ customers
                  </p>

                  <p className="text-sm text-gray-500">
                    Fresh • Delicious • Handmade
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <span className="text-pink-500 font-semibold">
              FIND YOUR FAVORITE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-3">
              Something delicious for every occasion.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <CategoryCard
              title="Birthday Cakes"
              image="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80"
            />

            <CategoryCard
              title="Chocolate Cakes"
              image="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80"
            />

            <CategoryCard
              title="Wedding Cakes"
              image="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80"
            />

          </div>
        </div>

      </section>


      {/* FEATURED CAKES */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">

            <div>
              <span className="text-pink-500 font-semibold">
                OUR BEST SELLERS
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Customer Favorites
              </h2>
            </div>

            <Link
              to="/cakes"
              className="text-pink-500 font-semibold"
            >
              View All Cakes →
            </Link>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {featuredCakes.map((cake) => (

              <div
                key={cake.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="overflow-hidden">

                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {cake.name}
                  </h3>

                  <div className="mt-2 text-yellow-500">
                    ★★★★★
                  </div>

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-2xl font-bold text-pink-500">
                      {cake.price}
                    </span>

                    <button className="bg-gray-900 hover:bg-pink-500 text-white px-5 py-2.5 rounded-xl transition">
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROMO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">

        <div className="relative overflow-hidden rounded-[35px] bg-pink-500">

          <div className="grid md:grid-cols-2 items-center">

            <div className="p-8 sm:p-12 lg:p-16 text-white">

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🎉 SPECIAL OFFER
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold mt-6">
                15% OFF your first order
              </h2>

              <p className="mt-5 text-pink-100 text-lg">
                Make your celebration extra sweet with our freshly
                handcrafted cakes.
              </p>

              <Link
                to="/cakes"
                className="inline-block mt-8 bg-white text-pink-500 px-7 py-3.5 rounded-full font-bold hover:bg-gray-100 transition"
              >
                Order Your Cake
              </Link>

            </div>

            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80"
              alt="Delicious cake"
              className="hidden md:block w-full h-[400px] object-cover"
            />

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-pink-500 font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Made With Love & Quality
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <Feature
              icon="🍓"
              title="Fresh Ingredients"
              text="Only premium and fresh ingredients go into our cakes."
            />

            <Feature
              icon="👨‍🍳"
              title="Expert Bakers"
              text="Our skilled bakers create every cake with precision."
            />

            <Feature
              icon="🚚"
              title="Fast Delivery"
              text="Fresh cakes delivered safely to your doorstep."
            />

            <Feature
              icon="❤️"
              title="Made With Love"
              text="Every cake is carefully made for your special moment."
            />

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="py-24 text-center px-5">

        <div className="text-5xl">
          🍰
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mt-5">
          Ready to make someone smile?
        </h2>

        <p className="text-gray-500 text-lg mt-4">
          Choose your favorite cake and let us handle the sweetness.
        </p>

        <Link
          to="/cakes"
          className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-pink-200 transition"
        >
          Browse All Cakes
        </Link>

      </section>

    </main>
  );
}


/* CATEGORY CARD */
function CategoryCard({ title, image }) {
  return (
    <Link
      to="/cakes"
      className="group relative overflow-hidden rounded-3xl h-80"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-2xl font-bold">
          {title}
        </h3>

        <p className="text-white/80 mt-1">
          Explore collection →
        </p>
      </div>
    </Link>
  );
}


/* FEATURE */
function Feature({ icon, title, text }) {
  return (
    <div className="text-center">

      <div className="w-16 h-16 mx-auto bg-pink-100 rounded-2xl flex items-center justify-center text-3xl">
        {icon}
      </div>

      <h3 className="font-bold text-lg mt-5">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {text}
      </p>

    </div>
  );
}

export default Home;
