const jobdetailsfield = [
    { label: "Company Name", name: "companyname", type: "text", placeholder: "e.g. TechNova Pvt Ltd", required: true },
    { label: "Job Role", name: "role", type: "text", placeholder: "e.g. Frontend Developer", required: true },
    { label: "Location", name: "location", type: "text", placeholder: "e.g. Bangalore", required: true },
    { label: "Experience (in years)", name: "experience", type: "number", placeholder: "e.g. 2", required: true, min: 0 },
    { label: "Year of Passed Out", name: "yearofpassedout", type: "number", placeholder: "e.g. 2022", required: true, min: 1900, max: new Date().getFullYear() },
    { label: "Salary (₹)", name: "salary", type: "number", placeholder: "e.g. 600000", required: true, min: 0 },
    { label: "Deadline to Apply", name: "deadline", type: "date", required: true },
    { label: "Contact Email", name: "contact", type: "email", placeholder: "e.g. hr@technova.com", required: true },
    { label: "Short Description", name: "description", type: "text", placeholder: "e.g. React.js developer needed for UI projects", required: true, fullWidth: true },
    { label: "Detailed Summary", name: "summary", type: "textarea", placeholder: "e.g. We are looking for a passionate developer...", required: true, fullWidth: true, rows: 4 }
];

export default jobdetailsfield;