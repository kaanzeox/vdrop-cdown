'use client'

import CountdownTimer from "@/components/countdown-timer"
import WhatsappButton from "@/components/whatsapp-button"
import { useState } from "react"

export default function Home() {
  const targetDate = new Date("2025-07-23T21:58:00")
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Eski hesaplarımıza giriş yapabilecek miyiz?",
      answer: "Bakıma girmeden önce kullandığınız hesaplarınıza hiçbir değişiklik olmadan giriş yapabilirsiniz. Eğer bakiyeniz varsa yine hesabınızda hiçbir değişiklik olmadan bulunacaktır. Ancak level sistemleri yenilendiği için tüm leveller ve transactionlar sıfırlanmıştır."
    },
    {
      question: "Eski hesabımın şifresini/mailini unuttum ne yapacağım?",
      answer: "Açılıştan sonra giriş yaparken Şifremi Unuttum seçeneği ile şifrenizi sıfırlayabilirsiniz. Fakat maalesef mailinizi unutma durumunuzda hesabınıza tekrar giriş yapabilmeniz mümkün değil."
    },
    {
      question: "Sitede ki sistemler hala aynı mı?",
      answer: "Sitede en temel özellik olan bakiye sisteminde değişiklikler olmuştur. Siteye yeni gelen envanter sistemi ile artık kasa açılımından sonra itemler satılmak yerine envanterinize eklenmekte ve VP kodları ancak item çekimi ile verilmektedir, bakiye çekimi ile değil."
    }
  ]

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white overflow-hidden">
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950 opacity-50" />
      
      {/* Subtle animated background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px]" />

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-24">
        {/* Logo Area with subtle float animation */}
        <div className="w-full max-w-[180px] h-12 relative animate-fade-in group">
          <div className="h-full w-full flex items-center justify-center transform transition-transform duration-700 hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-full w-auto object-contain select-none blur-[0.3px] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              draggable="false"
            />
          </div>
        </div>

        {/* Countdown Section with enhanced styling */}
        <div className="text-center space-y-16 animate-slide-up w-full max-w-2xl mx-auto px-4">
          <div className="space-y-6 relative">
            <div className="absolute -inset-x-4 -inset-y-6 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl -z-10" />
            <h1 className="text-2xl md:text-3xl font-extralight text-white tracking-[0.15em] leading-relaxed">
              BAKIM SONLANIYOR!
            </h1>
            <div className="space-y-2.5">
              <p className="text-sm text-gray-300/90 font-extralight tracking-[0.2em] uppercase">
                Bakımdan Çıkmamıza Kalan
              </p>
              <p className="text-xs text-gray-500 font-extralight tracking-wider">
                Time Remaining Until We're Out of Maintenance
              </p>
            </div>
          </div>

          {/* Enhanced countdown display with interactive effects */}
          <div className="space-y-6">
            <div className="group relative perspective-1000">
              {/* Glow effect container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Interactive hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Main countdown container */}
              <div className="relative backdrop-blur-sm bg-white/[0.02] rounded-xl p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] 
                            transition-all duration-500 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.05)] 
                            group-hover:bg-white/[0.03] transform group-hover:-translate-y-0.5 group-hover:rotate-[0.5deg]
                            cursor-pointer">
                <div className="transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <CountdownTimer targetDate={targetDate} />
                </div>
              </div>
            </div>

            {/* WhatsApp section with matching style */}
            <div className="group relative perspective-1000">
              {/* Glow effect container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Interactive hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Main WhatsApp container */}
              <div className="relative backdrop-blur-sm bg-white/[0.02] rounded-xl px-8 py-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] 
                            transition-all duration-500 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.05)] 
                            group-hover:bg-white/[0.03] transform group-hover:-translate-y-0.5 group-hover:rotate-[-0.5deg]
                            cursor-pointer">
                <div className="transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <WhatsappButton />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 group relative perspective-1000">
              {/* Glow effect container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Interactive hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Main FAQ container */}
              <div className="relative backdrop-blur-sm bg-white/[0.02] rounded-xl p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] 
                            transition-all duration-500 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.05)] 
                            group-hover:bg-white/[0.03] transform group-hover:-translate-y-0.5">
                <div className="space-y-4">
                  <h2 className="text-lg font-extralight tracking-[0.2em] text-center mb-6">SIKÇA SORULAN SORULAR</h2>
                  
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-white/[0.05] last:border-none">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                        className="w-full py-4 flex items-center justify-between text-left transition-colors duration-300 group/item"
                      >
                        <span className="text-sm font-extralight tracking-wide group-hover/item:text-white/90">
                          {item.question}
                        </span>
                        <span className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="pb-4 text-sm text-gray-400/90 font-extralight tracking-wide">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
