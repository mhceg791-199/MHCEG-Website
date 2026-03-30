import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";
import ProfessionalDetailsFields from "./components/ProfessionalDetailsFields";
import ResumeUpload from "./components/ResumeUpload";
import FormMessages from "./components/FormMessages";
import SubmitButton from "./components/SubmitButton";
import { useApplicationForm } from "./hooks/useApplicationForm";
import PersonalInfoFields from "./components/PersonalInfoFields";

export default function ApplicationForm() {
  const {
    formData,
    resume,
    isDragging,
    loading,
    success,
    error,
    handleChange,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleSubmit,
  } = useApplicationForm();

  return (
    <section id="application-form-section" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
              <SectionHeader firstWord="Tell Us" />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Submit your application and let's build something great together
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Personal Information */}
            <PersonalInfoFields
              formData={formData}
              handleChange={handleChange}
              disabled={loading || success}
            />

            {/* Professional Details */}
            <ProfessionalDetailsFields
              formData={formData}
              handleChange={handleChange}
              disabled={loading || success}
            />

            {/* Resume Upload */}
            <ResumeUpload
              resume={resume}
              isDragging={isDragging}
              handleFileChange={handleFileChange}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              disabled={loading || success}
            />

            {/* Messages (Error/Success) */}
            <FormMessages error={error} success={success} />

            {/* Submit Button */}
            <SubmitButton loading={loading} success={success} />

            {/* Footer Text */}
            <p className="text-center text-sm text-gray-500 mt-6">
              We review all applications carefully and will contact qualified
              candidates within 2 weeks.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}



// import { useState } from "react";
// import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { API_ENDPOINTS } from "../../../../config/api";
// import SectionHeader from "../../../shared/PrivacyAndTerms/sectionHeader/sectionHeader";

// export default function ApplicationForm() {
//   const initialFormState = {
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     portfolio: "",
//     coverLetter: "",
//     siteName: "MHCEG Consultancy",
//     siteURL: "https://mhc-eg.com",
//   };

//   const [formData, setFormData] = useState(initialFormState);
//   const [resume, setResume] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setResume(e.target.files[0]);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file && file.type === "application/pdf") {
//       setResume(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!resume) {
//       setError("Please upload your resume (PDF only)");
//       return;
//     }

//     // الاحتفاظ بنسخة للـ Rollback في حالة الفشل
//     const backupForm = { ...formData };
//     const backupResume = resume;

//     // ✅ التحديث المتفائل (Optimistic UI)
//     setSuccess(true);
//     setLoading(false);

//     // تجهيز البيانات
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     data.append("resume", resume);

//     // تصفير النموذج فوراً
//     setFormData(initialFormState);
//     setResume(null);

//     try {
//       await axios.post(API_ENDPOINTS.submitApplication, data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//     } catch (err) {
//       setSuccess(false);
//       setError("Something went wrong. Your data has been restored.");
//       setFormData(backupForm);
//       setResume(backupResume);
//     }
//   };

//   const positions = [
//     "Civil Engineer",
//     "Structural Engineer",
//     "Mechanical Engineer (MEP)",
//     "Electrical Engineer",
//     "Project Manager",
//     "Planning Engineer",
//     "Quantity Surveyor",
//     "Site Engineer",
//     "Technical Office Engineer",
//     "Business Development Specialist",
//     "Consulting Engineer",
//     "Infrastructure Engineer",
//     "HSE Engineer",
//     "Procurement Engineer",
//     "Other",
//   ];

//   return (
//     <section className="py-20 bg-gray-50 scroll-mt-16" id="application-form-section">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
//               <SectionHeader firstWord="Tell Us" />
//             </h2>
//             <p className="text-gray-600 text-lg md:text-xl">
//               Submit your application and let's build something great together
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
//           >
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
//                 Personal Information
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                     placeholder="(305) 123-4567"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Desired Position *
//                   </label>
//                   <select
//                     name="position"
//                     required
//                     value={formData.position}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                   >
//                     <option value="">Select Position</option>
//                     {positions.map((pos) => (
//                       <option key={pos} value={pos}>
//                         {pos}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Details & Resume Upload Section (نفس الـ UI) */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
//                 Professional Details
//               </h3>
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Years of Experience *
//                   </label>
//                   <select
//                     name="experience"
//                     required
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                   >
//                     <option value="">Select Experience</option>
//                     <option value="0-1">0-1 years</option>
//                     <option value="1-3">1-3 years</option>
//                     <option value="3-5">3-5 years</option>
//                     <option value="5-10">5-10 years</option>
//                     <option value="10+">10+ years</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Portfolio URL (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cover Letter / Why Join Us? *
//                   </label>
//                   <textarea
//                     name="coverLetter"
//                     required
//                     value={formData.coverLetter}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all resize-none"
//                     placeholder="Tell us about yourself..."
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Resume Upload (نفس الـ UI) */}
//             <div className="mb-10">
//               <div
//                 onDragOver={(e) => {
//                   e.preventDefault();
//                   setIsDragging(true);
//                 }}
//                 onDragLeave={() => setIsDragging(false)}
//                 onDrop={handleDrop}
//                 className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${isDragging ? "border-gray-900 bg-gray-50" : "border-gray-300 hover:border-gray-400"}`}
//               >
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />
//                 <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//                 {resume ? (
//                   <p className="text-lg font-medium text-gray-900">
//                     {resume.name}
//                   </p>
//                 ) : (
//                   <p className="text-lg font-medium text-gray-900">
//                     Drop your resume here or click to upload
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Messages */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
//                 <AlertCircle className="w-5 h-5" />
//                 {error}
//               </div>
//             )}
//             {success && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
//                 <CheckCircle className="w-5 h-5" />
//                 Application submitted successfully!
//               </div>
//             )}

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={success}
//                 className={`group relative px-12 py-4 bg-mainColor text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-mainColor/90 hover:shadow-xl ${success ? "bg-green-600" : ""}`}
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   {success ? (
//                     <>
//                       <CheckCircle className="w-5 h-5" /> Submitted!
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />{" "}
//                       Submit Application
//                     </>
//                   )}
//                 </span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
