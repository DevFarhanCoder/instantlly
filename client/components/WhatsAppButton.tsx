import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (without + and spaces)
    const phoneNumber = "919876543210"; // Example: +91 98765 43210 becomes 919876543210
    const message = "Hi! I'm interested in your marketing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
