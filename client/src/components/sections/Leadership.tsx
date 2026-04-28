import { Users } from "lucide-react";

export default function Leadership() {
  const leadership = [
    {
      title: "Postgraduate Committee Chair",
      company: "UEA Students' Union | Norwich, UK",
      period: "Sep 2023 – Sep 2024",
      achievements: [
        "Set the postgraduate engagement strategy and partnered with the executive board to prioritise union-wide initiatives.",
        "Designed and orchestrated networking and professional-development events serving 300+ students through targeted segmentation.",
        "Evaluated funding proposals through a value-vs-impact framework to allocate budget toward highest-return academic and social initiatives."
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        Leadership Experience
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl">
        Elected and committee roles where I led strategy, stakeholder engagement, and governance beyond the day job.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {leadership.map((role, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl glass-card border border-border shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground leading-tight">{role.title}</h3>
                <div className="text-primary font-medium">{role.company}</div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2 border-transparent bg-secondary text-secondary-foreground">
                  {role.period}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mt-4">
              {role.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
