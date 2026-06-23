export interface Plan {
  name: string;
  studentLimit: string;
  pricePerStudent: string;
  monthlyEstimate: string;
  trial: string;
  support: string;
  features: string[];
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Basic",
    studentLimit: "Up to 300",
    pricePerStudent: "৳ 9",
    monthlyEstimate: "Up to ৳ 2,700",
    trial: "Demo only",
    support: "Email",
    features: ["SMS Notifications", "Parent Portal", "Attendance", "Admission", "Fee Management", "Reports"],
    highlighted: false,
  },
  {
    name: "Standard",
    studentLimit: "Up to 800",
    pricePerStudent: "৳ 7",
    monthlyEstimate: "Up to ৳ 5,600",
    trial: "Demo only",
    support: "Email + Phone",
    features: ["Everything in Basic", "Online Payment", "Payroll Management", "Examination & Results", "Dashboard & Analytics"],
    highlighted: true,
  },
  {
    name: "Premium",
    studentLimit: "Unlimited",
    pricePerStudent: "৳ 5",
    monthlyEstimate: "From ৳ 8,000",
    trial: "Demo only",
    support: "Dedicated",
    features: ["Everything in Standard", "Custom Branding", "API Access", "Advanced Reports", "Multi-school Support"],
    highlighted: false,
  },
];
