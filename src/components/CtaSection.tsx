import { Button } from "@/components/ui/moving-border";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="gradient-bg rounded-2xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to streamline your billing?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of businesses that trust Billify for their invoicing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              borderRadius="1.75rem"
              duration={3000}
              className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto h-12 px-6"
              borderClassName="bg-[radial-gradient(circle, #facc15 30%, #f97316 60%, transparent 80%)] opacity-100"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
