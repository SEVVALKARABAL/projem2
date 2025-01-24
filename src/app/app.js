import React from "react";
import Accordion from "@/accordion";

const faqData = [
  {
    question: "Ürün kaliteli mi?",
    answer: "Evet, ürünlerimiz yüksek kalite standartlarına göre üretilmiştir.",
  },
  {
    question: "Fiyatı ne kadar?",
    answer:
      "Ürün fiyatları çeşitlere göre değişmektedir. Daha fazla bilgi için iletişime geçin.",
  },
  {
    question: "Ne zaman ulaşır?",
    answer: "Siparişler genellikle 3-5 iş günü içerisinde teslim edilir.",
  },
];

const App = () => {
  return (
    <div style={{ width: "50%", margin: "20px auto", textAlign: "center" }}>
      <h2>SSS (Sıkça Sorulan Sorular)</h2>
      <div>
        {faqData.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
