# Triode Studio launch setup

The primary site URL is https://triodestudio.vercel.app. Update the sitemap, robots file, homepage structured data, and static social metadata together if the domain changes.

## Inquiry delivery

Configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in Vercel, then redeploy. Use .env.example for local development. EmailJS templates receive project_type, selected_services, business_name, from_name, from_email, phone, budget, timeline, and message. Configure the recipient and reply-to address in EmailJS, restrict allowed origins, and send a test inquiry from the deployed site to verify receipt.

Missing configuration or a failed send must leave the form visible with an error and direct email/WhatsApp links. Only a successful EmailJS response shows the success screen. A successful API response does not prove inbox delivery; check the recipient inbox during setup.

## Work and team assets

The hero and featured portfolio project use existing Nike concept poster artwork, explicitly labeled as independent work. Software cards describe the projects without fabricated screenshots or audience metrics. Replace or extend these with approved app screenshots, demo URLs, and verified case-study results when available. Add real founder photos when the team supplies them; current initials are intentional.

Discovery-call links open a WhatsApp request. They do not promise an already-booked appointment.

## Review before merging

Run npm ci, npm run build, and lint the edited React files. On the Vercel preview, review mobile layouts, keyboard navigation, direct navigation to /portfolio and /contact, poster images, and both the success and failure paths of inquiry delivery. Avoid sending test inquiries to the studio without coordinating with the team.
