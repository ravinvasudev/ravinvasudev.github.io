import { Download, Linkedin, Mail } from "lucide-react";

import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/button-link";

export function ContactCta() {
  return (
    <section id="contact" className="py-24">
      <div className="shell">
        <div className="surface-card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.22),transparent_55%)]"
          />

          <div className="relative">
            <p className="kicker">Open to Architecture Leadership Roles</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
              Looking for an architect who can set the standard and ship the
              reference implementation?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.location} : {profile.totalExperience} across{" "}
              {profile.industries.join(", ")}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.socials.email}`}>
                <Mail size={16} />
                {profile.socials.email}
              </ButtonLink>
              <ButtonLink href={profile.socials.linkedin} variant="outline">
                <Linkedin size={16} />
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} variant="outline" external>
                <Download size={16} />
                Download Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
