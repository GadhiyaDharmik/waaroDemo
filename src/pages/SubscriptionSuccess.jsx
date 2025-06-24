import React from "react";
import ClipboardList from "../asset/SVG/TempPage/elements.svg";
import Megaphone from "../asset/SVG/TempPage/elements-1.svg";
import Mail from "../asset/SVG/TempPage/elements-2.svg";
import Contact from "../asset/SVG/TempPage/elements-3.svg";
import PieChart from "../asset/SVG/TempPage/elements-4.svg";
import BookOpenCheck from "../asset/SVG/TempPage/elements-5.svg";
import Users2 from "../asset/SVG/TempPage/elements-6.svg";
import Upload from "../asset/SVG/TempPage/elements-7.svg";

const features = [
  { label: "Product Listing", icon: ClipboardList },
  { label: "Product Promotion", icon: Megaphone },
  { label: "Back email Sender", icon: Mail },
  { label: "Lead/Inquiry", icon: Contact },
  { label: "Analytic", icon: PieChart },
  { label: "Business Catalog", icon: BookOpenCheck },
  { label: "B2B Connection", icon: Users2 },
  { label: "Post Your Requirements", icon: Upload },
];

const SubscriptionSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-md-4 py-md-10 rounded-xl">
      <div className="bg-white rounded-[24px] shadow-xl max-w-3xl w-full p-8 text-center">
        <h1 className="text-3xl font-semibold text-black">Coguralations</h1>
        <p className="unlock-text">
          You have unlocked <strong>90 days subscription</strong>
        </p>
        <p className="marketplace-text">
          India’s Best B2B Marketplace with Marketing Tool
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#000000] rounded-lg px-4 py-3 justify-center text-sm font-medium text-[#fff]"
              >
                <img src={feature.icon} alt="icon" className="w-5 h-5" />
                {feature.label}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-base font-semibold text-black">
          “90 Days access begins from the official launch date”
        </p>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
