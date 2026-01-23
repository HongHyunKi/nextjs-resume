import {
  ACTIVITIES,
  CONTACT,
  EDUCATION,
  LANGUAGES,
  PERSONAL_INFO,
  TECH_STACK,
  TRAINING,
  WORK_EXPERIENCES,
} from '@/lib/resume-data';
import { ExternalLink, Github, Mail, Rss, UserRoundPen } from 'lucide-react';

// Bullet Icon
const BulletIcon = () => (
  <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 mt-[0.6rem] flex-shrink-0" />
);

// Contact Item
const ContactItem = ({
  icon,
  label,
  href,
  isEmail = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  isEmail?: boolean;
}) => (
  <a
    href={href}
    target={isEmail ? undefined : '_blank'}
    rel={isEmail ? undefined : 'noopener noreferrer'}
    className="flex items-center gap-3 text-slate-600 hover:text-foreground"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12 print:py-0">
        {/** Header */}
        <header className="mb-12 border-b border-border pb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-24">
            {/** Greeting */}
            <div>
              <p className="text-base md:text-lg text-foreground/50 font-medium tracking-wide">
                안녕하세요, 반갑습니다.
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mt-2">
                <span className="text-blue-600">{PERSONAL_INFO.name}</span>
                <span className="text-foreground/80">입니다.</span>
              </h1>
            </div>

            {/** Contact Info */}
            <div className="space-y-2.5">
              <ContactItem
                icon={<Mail className="h-5 w-5 flex-shrink-0" />}
                label={CONTACT.email.label}
                href={CONTACT.email.href}
                isEmail
              />
              {CONTACT.github && (
                <ContactItem
                  icon={<Github className="h-5 w-5 flex-shrink-0" />}
                  label={CONTACT.github.label}
                  href={CONTACT.github.href}
                />
              )}
              {/*{CONTACT.linkedin && (*/}
              {/*  <ContactItem*/}
              {/*    icon={<Linkedin className="h-5 w-5 flex-shrink-0" />}*/}
              {/*    label={CONTACT.linkedin.label}*/}
              {/*    href={CONTACT.linkedin.href}*/}
              {/*  />*/}
              {/*)}*/}
              {CONTACT.blog && (
                <ContactItem
                  icon={<Rss className="h-5 w-5 flex-shrink-0" />}
                  label={CONTACT.blog.label}
                  href={CONTACT.blog.href}
                />
              )}
              {CONTACT.portfolio && (
                <ContactItem
                  icon={<UserRoundPen className="h-5 w-5 flex-shrink-0" />}
                  label={CONTACT.portfolio.label}
                  href={CONTACT.portfolio.href}
                />
              )}
            </div>
          </div>

          {/** Introduce */}
          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">INTRODUCE</h2>
            <p className="whitespace-pre-line text-base leading-[1.75] text-foreground/80">
              {PERSONAL_INFO.description}
            </p>
          </section>
        </header>

        {/** Tech Stack */}
        <section className="mb-12 border-b border-border pb-10">
          <h2 className="mb-4 text-2xl font-bold text-blue-600">TECH STACK</h2>
          <div className="flex flex-col gap-3 sm:gap-2">
            {TECH_STACK.map(
              (
                stack: { category: string; skills: string[] },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
                >
                  <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
                    {stack.category}
                  </span>
                  <span className="text-sm text-foreground/60">
                    {stack.skills.join(' · ')}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/** Work Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-blue-600">
            WORK EXPERIENCE
          </h2>
          {WORK_EXPERIENCES.map((work, workIndex) => (
            <div key={workIndex} className="mb-10 last:mb-0">
              {/** Company Header */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {work.company}
                  </h3>
                  <p className="text-base text-foreground/70 mt-1">
                    {work.position}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {work.period}
                </span>
              </div>

              {/** Company Description */}
              {work.description && (
                <p className="mb-6 text-sm text-muted-foreground italic">
                  {work.description}
                </p>
              )}

              {/** Projects */}
              <div className="space-y-6">
                {work.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="relative pl-6 pb-6 border-l-2 border-blue-200 dark:border-blue-900 last:pb-0"
                  >
                    {/** Timeline Dot */}
                    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-blue-600" />

                    {/** Project Header */}
                    <div className="mb-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h4>
                      {'period' in project && project.period && (
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/** Project Description */}
                    <p className="mb-4 text-base leading-relaxed text-foreground/80 font-medium">
                      {project.description}
                    </p>

                    {/** Tasks */}
                    {project.tasks && project.tasks.length > 0 && (
                      <ul className="mb-4 space-y-2.5">
                        {project.tasks.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground/80"
                          >
                            <BulletIcon />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/** Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 text-xs font-medium border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/** Activities */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-blue-600">ACTIVITIES</h2>
          <div className="space-y-5">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between gap-2"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {activity.link ? (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {activity.title}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      activity.title
                    )}
                  </h3>
                  <p className="text-[15px] text-foreground/70 mt-1">
                    {activity.role}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                    {activity.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {activity.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/** Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-blue-600">EDUCATION</h2>
          <div className="space-y-5">
            {TRAINING.map((training, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between gap-2"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {training.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                    {training.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {training.period}
                </span>
              </div>
            ))}
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between gap-2"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-[15px] text-foreground/70 mt-1">
                    {edu.major} • {edu.degree}
                    {edu.gpa && ` • ${edu.gpa}`}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                      {edu.description}
                    </p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/** Languages */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-blue-600">LANGUAGES</h2>
          <div className="space-y-5">
            {LANGUAGES.map((lang, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between gap-2"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {lang.title}
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {lang.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
