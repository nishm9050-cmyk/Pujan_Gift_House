import {
    CakeSlice,
    Gift,
    Truck,
    Heart,
    Users,
    CalendarDays,
    Sparkles,
  } from "lucide-react";
  import {Link} from 'react-router-dom';
  function About() {
    return (
      <div className="min-h-screen bg-gray-50">
  
        {/* Hero Section */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
  
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                <CakeSlice className="text-pink-600" size={32} />
              </div>
            </div>
  
            <p className="text-pink-600 font-semibold mb-3">
              पुजन केक एण्ड गिफ्ट हाउस
            </p>
  
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              हाम्रो बारेमा
            </h1>
  
            <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
              तपाईंका हरेक खुशीका अवसरलाई अझ विशेष र सम्झनलायक बनाउन
              पुजन केक एण्ड गिफ्ट हाउस सधैं तपाईंको साथमा छ।
            </p>
  
          </div>
        </section>
  
        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
            {/* Text */}
            <div>
  
              <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-5">
                हाम्रो परिचय
              </span>
  
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                तपाईंको खुशी, हाम्रो प्राथमिकता ❤️
              </h2>
  
              <p className="mt-6 text-gray-600 leading-8">
                पुजन केक एण्ड गिफ्ट हाउस एक पारिवारिक व्यवसाय हो, जहाँ
                माया, मेहनत र गुणस्तरलाई विशेष प्राथमिकता दिइन्छ।
                हाम्रो उद्देश्य तपाईंका जन्मदिन, वार्षिकोत्सव,
                विवाह, उत्सव तथा अन्य विशेष अवसरहरूलाई अझ यादगार
                बनाउनु हो।
              </p>
  
              <p className="mt-4 text-gray-600 leading-8">
                हामी विभिन्न प्रकारका स्वादिष्ट केक, आकर्षक उपहार तथा
                विभिन्न अवसरका लागि आवश्यक सामग्रीहरू उपलब्ध गराउँछौं।
                तपाईंको आवश्यकताअनुसार घरमै डेलिभरी सेवा पनि प्रदान
                गरिन्छ।
              </p>
  
            </div>
  
            {/* Business Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
  
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                व्यवसायको जानकारी
              </h3>
  
              <div className="space-y-5">
  
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                    <Users className="text-pink-600" size={21} />
                  </div>
  
                  <div>
                    <p className="text-sm text-gray-500">
                      सञ्चालक
                    </p>
                    <p className="font-semibold text-gray-900">
                      पुजन पोखरेल
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                    <CakeSlice className="text-pink-600" size={21} />
                  </div>
  
                  <div>
                    <p className="text-sm text-gray-500">
                      केक निर्माता
                    </p>
                    <p className="font-semibold text-gray-900">
                      पुजन पोखरेल
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                    <Heart className="text-pink-600" size={21} />
                  </div>
  
                  <div>
                    <p className="text-sm text-gray-500">
                      व्यवसायको प्रकार
                    </p>
                    <p className="font-semibold text-gray-900">
                      पारिवारिक व्यवसाय
                    </p>
                  </div>
                </div>
  
              </div>
  
            </div>
          </div>
        </section>
  
        {/* Services */}
        <section className="bg-white py-16 border-y border-gray-100">
  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
            <div className="text-center mb-12">
  
              <p className="text-pink-600 font-semibold mb-2">
                हामी के प्रदान गर्छौं?
              </p>
  
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                हाम्रा सेवाहरू
              </h2>
  
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                तपाईंको विशेष दिनलाई आवश्यक पर्ने विभिन्न उत्पादन तथा
                सेवाहरू एउटै ठाउँमा उपलब्ध गराउने हाम्रो प्रयास हो।
              </p>
  
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
              {/* Cakes */}
              <div className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
  
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
                  <CakeSlice className="text-pink-600" size={27} />
                </div>
  
                <h3 className="text-xl font-bold text-gray-900">
                  विभिन्न प्रकारका केक
                </h3>
  
                <p className="mt-3 text-gray-600 leading-7">
                  जन्मदिन, विवाह, वार्षिकोत्सव तथा अन्य विशेष अवसरका
                  लागि विभिन्न स्वाद र डिजाइनका केकहरू उपलब्ध छन्।
                </p>
  
              </div>
  
              {/* Gifts */}
              <div className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
  
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
                  <Gift className="text-pink-600" size={27} />
                </div>
  
                <h3 className="text-xl font-bold text-gray-900">
                  उपहार तथा Accessories
                </h3>
  
                <p className="mt-3 text-gray-600 leading-7">
                  आफ्ना प्रियजनलाई खुशी बनाउन विभिन्न प्रकारका
                  उपहार, केक Accessories तथा उत्सवका सामग्रीहरू
                  उपलब्ध छन्।
                </p>
  
              </div>
  
              {/* Delivery */}
              <div className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
  
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
                  <Truck className="text-pink-600" size={27} />
                </div>
  
                <h3 className="text-xl font-bold text-gray-900">
                  घरमै डेलिभरी
                </h3>
  
                <p className="mt-3 text-gray-600 leading-7">
                  तपाईंलाई पसलसम्म आउन आवश्यक नपरोस् भनेर
                  आवश्यक स्थानमा घरमै डेलिभरी सेवा उपलब्ध गराइन्छ।
                </p>
  
              </div>
  
            </div>
  
          </div>
        </section>
  
        {/* Cake Types */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  
          <div className="bg-pink-50 rounded-3xl p-8 sm:p-12">
  
            <div className="flex items-center gap-4 mb-6">
  
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                <Sparkles className="text-pink-600" size={27} />
              </div>
  
              <div>
                <p className="text-pink-600 font-semibold">
                  Cake Collection
                </p>
  
                <h2 className="text-3xl font-bold text-gray-900">
                  सबैका लागि केक
                </h2>
              </div>
  
            </div>
  
            <p className="text-gray-600 leading-8 max-w-3xl">
              तपाईंको आवश्यकता र रोजाइअनुसार हामी
              <strong> भेजिटेरियन र नन-भेजिटेरियन</strong>
              दुवै प्रकारका केक उपलब्ध गराउँछौं।
              विशेष अवसरका लागि तपाईंको रोजाइअनुसार केकको
              डिजाइन तथा स्वाद छनोट गर्न सकिन्छ।
            </p>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
  
              <div className="bg-white rounded-2xl p-5">
                <h3 className="font-bold text-gray-900">
                  🥬 भेजिटेरियन केक
                </h3>
  
                <p className="text-gray-500 mt-2">
                  स्वादिष्ट तथा विभिन्न अवसरका लागि उपयुक्त।
                </p>
              </div>
  
              <div className="bg-white rounded-2xl p-5">
                <h3 className="font-bold text-gray-900">
                  🍰 नन-भेजिटेरियन केक
                </h3>
  
                <p className="text-gray-500 mt-2">
                  तपाईंको रोजाइअनुसार विशेष स्वादका केकहरू।
                </p>
              </div>
  
            </div>
  
          </div>
        </section>
  
        {/* Opening Days */}
        <section className="bg-white border-t border-gray-100 py-16">
  
          <div className="max-w-4xl mx-auto px-4 text-center">
  
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                <CalendarDays className="text-pink-600" size={27} />
              </div>
            </div>
  
            <h2 className="text-3xl font-bold text-gray-900">
              हाम्रो खुल्ने दिन
            </h2>
  
            <p className="mt-4 text-gray-600">
              तपाईंको सेवा र सुविधाका लागि हामी हप्ताको ६ दिन खुला
              रहन्छौं।
            </p>
  
            <div className="mt-8 inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4">
  
              <span className="text-gray-500">
                खुला:
              </span>
  
              <span className="font-bold text-gray-900">
                आइतबारदेखि शुक्रबारसम्म
              </span>
  
            </div>
  
            <p className="mt-4 text-sm text-gray-500">
              शनिबार बन्द रहनेछ।
            </p>
  
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="bg-black text-white">
  
          <div className="max-w-5xl mx-auto px-4 py-16 text-center">
  
            <h2 className="text-3xl sm:text-4xl font-bold">
              तपाईंको विशेष दिनलाई अझ विशेष बनाऔं 🎂
            </h2>
  
            <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-7">
              स्वादिष्ट केक, आकर्षक उपहार तथा आवश्यक Accessories
              खोज्दै हुनुहुन्छ भने पुजन केक एण्ड गिफ्ट हाउसलाई
              सम्झनुहोस्।
            </p>
  
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
  
              <Link
                to="/products/cakes"
                className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                केक हेर्नुहोस्
              </Link>
  
              <Link
                to="/products/gifts"
                className="px-7 py-3.5 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
              >
                उपहार हेर्नुहोस्
              </Link>
  
            </div>
  
          </div>
  
        </section>
  
      </div>
    );
  }
  
  export default About;