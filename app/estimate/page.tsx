import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export default function EstimatePage() {
  return (
    <main className="estimate-page">
      <header className="estimate-page-header">
        <Link href="/" aria-label="Return to the neatiful homepage">
          <Image
            src="/neatiful_logo.png"
            alt="neatiful"
            width={180}
            height={56}
            priority
          />
        </Link>

        <Link className="back-home-link" href="/">
          ← Back to home
        </Link>
      </header>

      <section className="estimate-page-content">
        <div className="estimate-page-intro">
          <p className="eyebrow">Free estimate request</p>

          <h1>
            Tell us about
            <br />
            <em>your space.</em>
          </h1>

          <p>
            Complete the questionnaire below so our team can understand your
            needs and prepare a personalized service and provide your estimate.
          </p>

          <p className="estimate-response-time">
            A member of our team will contact you using your preferred method
            within 8–12 business hours.
          </p>
        </div>

        <div className="estimate-form-container">
          <iframe
            title="neatiful free estimate request"
            src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=qyXyQStiiE-ZcgRAuah8XX25EFvU6PVJgzz4XpCKsXJUMEk5SE5NNlc3N1ZCWTU5S0dCNDI1M0NEMCQlQCN0PWcu&embed=true"
            width="100%"
            height="2800"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            allowFullScreen
          />
        </div>

        <p className="estimate-privacy-note">
          Your information is used only to review and respond to your service
          request. Marketing communications are sent only if you choose to
          subscribe.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}