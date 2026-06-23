/* src/components/HowItWorks.tsx */
const steps = [
  { step: "01", title: "Request Demo", desc: "Fill the form to see ShikkhaERP in action." },
  { step: "02", title: "Onboarding", desc: "We help you set up your school data effortlessly." },
  { step: "03", title: "Configure", desc: "Customize features to match your school's workflow." },
  { step: "04", title: "Start Managing", desc: "Go live and streamline your entire school." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-primary">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">{s.step}</div>
              <h3 className="mt-4 font-semibold text-primary">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}