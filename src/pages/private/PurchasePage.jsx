import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import heroArt1 from "../../assets/Link(1).png";

const PurchasePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const art = state?.art || {
    title: "Hope Beyond Bars",
    artist: "Marcus Williams",
    buyNowPrice: 850,
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-500 text-sm flex items-center gap-2 hover:text-black"
        >
          ← Back to Artwork
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <img
                src={heroArt1}
                className="w-full aspect-square object-cover rounded-xl mb-4"
                alt={art.title}
              />
              <div className="mb-6">
                <h4 className="font-bold text-gray-900">{art.title}</h4>
                <p className="text-sm text-gray-500">by {art.artist}</p>
              </div>

              <div className="space-y-3 text-sm border-t pt-4">
                <div className="flex justify-between text-gray-500">
                  <span>Artwork Price</span>
                  <span>${art.buyNowPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping & Handling</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-green-600 pt-3 border-t">
                  <span>Total</span>
                  <span>${art.buyNowPrice + 50}</span>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-4 rounded-xl space-y-2">
                {[
                  "Certificate of Authenticity",
                  "Insured Shipping",
                  "Artist Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="text-xs text-green-700 flex items-center gap-2"
                  >
                    <span className="text-[10px]">✔</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="flex-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl bg-green-50 p-2 rounded-lg">🛒</span>
                <div>
                  <h2 className="text-xl font-bold">Complete Your Purchase</h2>
                  <p className="text-sm text-gray-500">
                    Fill in your details below to secure this artwork.
                  </p>
                </div>
              </div>

              <form className="space-y-8">
                <section>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Shipping Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Input label="Full Name" placeholder="John Doe" />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        label="Street Address"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <Input label="City" placeholder="New York" />
                    <Input label="State" placeholder="NY" />
                    <Input label="ZIP Code" placeholder="10001" />
                    <Input label="Phone Number" placeholder="(555) 123-4567" />
                  </div>
                </section>

                <section className="pt-6 border-t">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Payment Information
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-10 border-2 border-dashed border-gray-200 text-center space-y-3">
                    <div className="text-3xl">🔒</div>
                    <p className="font-bold">Secure Payment Processing</p>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                      Payment processing will be handled securely via Stripe or
                      PayPal.
                    </p>
                  </div>
                </section>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-xs text-gray-500 leading-normal">
                      I agree to the{" "}
                      <span className="text-orange-500 underline">
                        terms and conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-orange-500 underline">
                        privacy policy
                      </span>
                      . I understand this is a final sale.
                    </span>
                  </label>
                  <button className="w-full py-4 bg-gray-200 text-gray-500 font-bold rounded-xl transition-colors hover:bg-green-600 hover:text-white">
                    Complete Purchase - ${art.buyNowPrice + 50}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Input Component
const Input = ({ label, placeholder }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">
      {label} *
    </label>
    <input
      type="text"
      className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default PurchasePage;
