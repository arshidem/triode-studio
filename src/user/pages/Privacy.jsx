import useSEO from "../hooks/useSEO";
export default function Privacy() {
  useSEO();
  return (
    <article className="detail-page">
      <h1>Privacy</h1>
      <p className="intro">
        This page explains how Triode Studio handles information shared through
        this website.
      </p>
      <section>
        <h2>Project enquiries</h2>
        <p>
          When you submit the enquiry form, we receive the contact details and
          project information you choose to provide. We use these details to
          respond, discuss your requirements, and prepare a proposal. Please do
          not submit passwords, payment details, or other sensitive information.
        </p>
      </section>
      <section>
        <h2>Service providers</h2>
        <p>
          The website is hosted on Vercel. Form submissions are sent through
          EmailJS when configured. These providers process information needed to
          deliver their services. Email and WhatsApp links open third-party
          services with their own privacy practices.
        </p>
      </section>
      <section>
        <h2>Website measurement</h2>
        <p>
          We use Vercel Analytics and Speed Insights to understand aggregate
          website usage and performance. We do not intentionally send enquiry
          text or contact details as analytics events.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can contact us directly instead of using the form. To ask about,
          correct, or request deletion of enquiry information, email{" "}
          <a className="text-link" href="mailto:triodewebstudio@gmail.com">
            triodewebstudio@gmail.com
          </a>
          . We keep enquiry information only as needed for responding, project
          administration, and applicable record-keeping obligations.
        </p>
      </section>
    </article>
  );
}
