import {
  CreditCard,
  FileText,
  CalendarCheck,
  BarChart,
  CreditCard as RecurringIcon,
  CircleDollarSign
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Invoicing",
    description: "Create professional, customizable invoices in seconds and send them automatically to your clients.",
    icon: FileText
  },
  {
    title: "Multi-Currency Support",
    description: "Bill clients in their preferred currency with automatic exchange rate calculations.",
    icon: CircleDollarSign
  },
  {
    title: "Recurring Billing",
    description: "Set up automatic recurring invoices for subscription-based services and never miss a payment.",
    icon: RecurringIcon
  },
  {
    title: "Payment Processing",
    description: "Accept payments online with multiple payment gateways integration including credit cards and digital wallets.",
    icon: CreditCard
  },
  {
    title: "Financial Reporting",
    description: "Get clear insights into your revenue, outstanding invoices, and payment history with detailed reports.",
    icon: BarChart
  },
  {
    title: "Due Date Tracking",
    description: "Send automatic payment reminders to clients and track payment statuses in real-time.",
    icon: CalendarCheck
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const FeaturesSection = () => {
  return (
    <section className="relative bg-[#f9f9fb] py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features for Effortless Billing
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to streamline your invoicing workflow and get paid faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white relative rounded-2xl border border-gray-200 p-6 shadow-xl transition hover:shadow-2xl group"
            >
              {/* Futuristic icon container */}
              <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 rounded-full shadow-inner">
                <feature.icon className="w-7 h-7 text-indigo-600" />
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 blur-xl opacity-20 rounded-full z-[-1]" />
              </div>

              <h3 className="text-center text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-center text-gray-600 text-base">
                {feature.description}
              </p>

              <div className="mt-6 text-center">
                <button className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm hover:bg-indigo-100 transition">
                  Discover
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
