"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsappButton() {
  // Replace with your actual WhatsApp channel link
  const whatsappLink = "https://www.whatsapp.com/channel/0029Vb5zKHf9xVJn5l9yuh0C"

  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-gray-400 font-light">İlk promo kodunuzu almak için WhatsApp kanalımızı takip edin</p>
        <p className="text-xs text-gray-500 font-light">Follow our WhatsApp channel to get your first promo code</p>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-[#C2F055] hover:bg-[#B8E84F] text-black font-medium text-sm transition-all duration-300 rounded-full shadow-lg hover:shadow-[#C2F055]/20"
      >
        <MessageSquare size={16} />
        <span>WhatsApp Kanalımız</span>
      </a>
    </div>
  )
}
