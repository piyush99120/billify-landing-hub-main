import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion"; // Import motion

const faqs = [
  {
    question: "How secure is my financial data?",
    answer:
      "Security is our top priority. We use bank-level encryption (256-bit SSL), secure servers, and regular security audits. We're compliant with PCI DSS standards and never store full credit card details on our servers.",
  },
  {
    question: "Can I customize my invoice templates?",
    answer:
      "Yes! Billify offers fully customizable invoice templates. You can add your company logo, change colors to match your brand, customize fields, and create multiple templates for different types of services or clients.",
  },
  {
    question: "Which payment methods do you support?",
    answer:
      "We support all major credit cards, ACH transfers, PayPal, and digital wallets including Apple Pay and Google Pay. We also integrate with popular payment gateways like Stripe, PayPal, and Square.",
  },
  {
    question: "Is there a limit on the number of invoices I can send?",
    answer:
      "No, all of our plans include unlimited invoicing. Whether you're sending one invoice a month or hundreds, Billify can handle your needs without any additional charges.",
  },
  {
    question: "Can I use Billify for recurring subscriptions?",
    answer:
      "Absolutely! Our recurring billing feature allows you to set up automatic billing cycles (weekly, monthly, quarterly, or annually). You can also customize billing dates and set end dates for fixed-term subscriptions.",
  },
];

// Animation variants for each FAQ item
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Billify. Can't find the answer?
            Contact our support team.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div // Wrap AccordionItem with motion.div
                key={index}
                variants={itemVariants} // Apply animation variants
                initial="hidden"
                whileInView="visible" // Animate when in view
                viewport={{ once: true, amount: 0.3 }} // Configure viewport options
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
