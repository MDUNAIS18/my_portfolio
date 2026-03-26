import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Python Developer Intern",
      company: "Solublix",
      period: "Jan 2026 - Mar 2026 (3 months)",
      type: "Internship",
      description: "Developed clean, reusable, and efficient Python scripts, automated repetitive workflows, implemented backend logic for data-driven flows, and integrated APIs/external services for data handling and automation.",
      achievements: [
        "Created reusable Python scripts to automate business workflows.",
        "Increased productivity by automating repetitive tasks.",
        "Built backend logic for data-driven applications.",
        "Integrated third-party APIs and services for data automation."
      ],
      technologies: ["Python", "REST APIs", "Pandas", "JSON", "Git"]
    },
    {
      title: "Python Backend Developer Intern",
      company: "Ishaneowep Software Private Limited",
      period: "Jun 2025 (1 month)",
      type: "Internship",
      description: "Built backend modules using Python and Django, handled server-side data processing, and assisted in staging deployment and bug fixes.",
      achievements: [
        "Built Django backend modules and APIs.",
        "Optimized server-side data handling for performance.",
        "Supported staging server deployment and QA bug fixes."
      ],
      technologies: ["Python", "Django", "REST APIs", "PostgreSQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-transparent bg-gradient-primary bg-clip-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in the world of software development and technology
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="card-soft card-hover hover-subtle p-8 fade-in-up"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-xl text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="card-soft hover-subtle p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Looking Forward</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm actively seeking opportunities to contribute to innovative projects and grow as a Python developer and Cloud Engineer. 
              My goal is to work with cutting-edge technologies and collaborate with talented teams to build impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;