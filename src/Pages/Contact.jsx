import { Phone, Mail, MapPin, CakeSlice } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
            <CakeSlice className="text-pink-600" size={28} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            हामीलाई सम्पर्क गर्नुहोस्
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            केक, उपहार वा अन्य सामग्रीको बारेमा जानकारी लिन,
            अर्डर गर्न वा आफ्नो आवश्यकता अनुसारको केक बनाउन
            हामीलाई सम्पर्क गर्नुहोस्।
          </p>
        </div>
      </section>

      {/* Custom Cake Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            🎂 आफूले चाहेजस्तो केक बनाउन चाहनुहुन्छ?
          </h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            तपाईंको आवश्यकता अनुसारको विशेष तथा Customized Cake को लागि
            यही सम्पर्क फारमबाट आफ्नो विवरण पठाउनुहोस् वा हामीलाई
            <span className="font-bold text-pink-600"> 0000000000 </span>
            मा फोन गर्नुहोस्।
          </p>

          <p className="mt-2 text-gray-600">
            तपाईंले यसै पृष्ठबाट अर्डर पनि पठाउन सक्नुहुन्छ।
            अर्डर प्राप्त भएपछि हामी तपाईंलाई फोन गरेर अर्डरको विवरण
            पुष्टि गर्नेछौं।
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              सम्पर्क विवरण
            </h2>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                  <Phone className="text-pink-600" size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">फोन</h3>
                  <p className="mt-1 text-gray-600">0000000000</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                  <Mail className="text-pink-600" size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">इमेल</h3>
                  <p className="mt-1 text-gray-600 break-all">
                    info@pujancake.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-pink-600" size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">ठेगाना</h3>
                  <p className="mt-1 text-gray-600">
                    पुजन केक एण्ड गिफ्ट हाउस
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold">
                🕐 हाम्रो खुल्ने समय
              </h3>

              <p className="mt-3 text-gray-300">
                आइतबारदेखि शुक्रबारसम्म
              </p>

              <p className="mt-1 text-gray-400">
                शनिबार बन्द रहनेछ।
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                अर्डर / सम्पर्क फारम
              </h2>

              <p className="mt-2 text-gray-600">
                तलको फारम भरेर आफ्नो अर्डर वा आवश्यकताको जानकारी पठाउनुहोस्।
              </p>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तपाईंको नाम
                  </label>

                  <input
                    type="text"
                    placeholder="आफ्नो नाम लेख्नुहोस्"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      फोन नम्बर
                    </label>

                    <input
                      type="tel"
                      placeholder="फोन नम्बर लेख्नुहोस्"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      इमेल
                    </label>

                    <input
                      type="email"
                      placeholder="इमेल लेख्नुहोस्"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                    />
                  </div>
                </div>

                {/* Order Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तपाईंलाई के चाहिन्छ?
                  </label>

                  <select
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      विकल्प छान्नुहोस्
                    </option>
                    <option value="cake">केक</option>
                    <option value="custom-cake">Customized Cake</option>
                    <option value="gift">उपहार</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                {/* Delivery Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      चाहिएको मिति
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      डेलिभरी चाहिन्छ?
                    </label>

                    <select
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        विकल्प छान्नुहोस्
                      </option>
                      <option value="yes">हो, घरमै डेलिभरी चाहिन्छ</option>
                      <option value="no">होइन, आफैं लिन आउँछु</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तपाईंको आवश्यकता / अर्डर विवरण
                  </label>

                  <textarea
                    rows="6"
                    placeholder="केकको प्रकार, आकार, डिजाइन, स्वाद, उपहार वा अन्य आवश्यकताको विवरण लेख्नुहोस्..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                  ></textarea>
                </div>

                {/* Confirmation Notice */}
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ℹ️ फारम पठाएपछि हामी तपाईंलाई फोन गरेर अर्डरको विवरण,
                    मूल्य र डेलिभरी सम्बन्धी जानकारी पुष्टि गर्नेछौं।
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition shadow-sm"
                >
                  अर्डर / सन्देश पठाउनुहोस्
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Customized Cake को लागि आजै सम्पर्क गर्नुहोस् 🎂
          </h2>

          <p className="mt-3 text-gray-400">
            फोन: <span className="text-white font-semibold">0000000000</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;