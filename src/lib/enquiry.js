export function getEmailConfig(env) {
  const values = [
    env.VITE_EMAILJS_SERVICE_ID,
    env.VITE_EMAILJS_TEMPLATE_ID,
    env.VITE_EMAILJS_PUBLIC_KEY,
  ];
  if (
    values.some((value) => !value || /^(your_|placeholder|TODO)/i.test(value))
  )
    return null;
  return { serviceId: values[0], templateId: values[1], publicKey: values[2] };
}
export function buildEnquiryParams(fields, selectedServices) {
  return {
    project_type: selectedServices.join(", ") || "General Inquiry",
    selected_services: selectedServices.join(", ") || "None selected",
    business_name: fields.businessName.trim(),
    from_name: fields.name.trim(),
    from_email: fields.email.trim(),
    phone: fields.phone.trim(),
    budget: fields.budget,
    timeline: fields.timeline,
    message: fields.description.trim(),
  };
}
