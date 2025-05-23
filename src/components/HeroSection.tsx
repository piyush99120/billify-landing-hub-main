import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative animated blob */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-indigo-400 rounded-full blur-[120px] z-0"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#4f46e5_12%,transparent_12.5%,transparent_87%,#4f46e5_87.5%,#4f46e5),linear-gradient(150deg,#4f46e5_12%,transparent_12.5%,transparent_87%,#4f46e5_87.5%,#4f46e5)] bg-[length:80px_140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block backdrop-blur-md bg-white/70 border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className="text-indigo-600 font-medium text-sm tracking-wide">
              🚀 Launching Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Smart Billing for{" "}
            <span className="relative inline-block text-indigo-600">
              Modern
              <motion.span
                className="absolute left-0 bottom-1 h-2 w-full bg-indigo-200 rounded-sm -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </span>{" "}
            Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Automate your workflow, reduce errors, and get paid faster with a billing solution designed for modern teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 shadow-lg shadow-indigo-500/20"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 px-8"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/accountant-calculating-profit-with-financial-analysis-graphs.jpg"
                alt="Dashboard Preview"
                className="w-full"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
