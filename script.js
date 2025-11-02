<<<<<<< HEAD
// 🌐 Smooth scroll for navigation
function scrollToSection() {
  const section = document.getElementById('features');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// 🌍 Multi-language translations
const translations = {
  en: {
    navTitle: "School Infrastructure Monitoring System",
    navHome: "Home",
    navStatus: "School Status",
    navReport: "Report",
    navContact: "Contact",

    title: "School Infrastructure Monitoring Portal",
    subtitle: "Ensuring every school gets the facilities it deserves",

    upload: "Upload School Images",
    uploadDesc: "Citizens can upload school condition photos for review.",
    check: "Check School Status",
    checkDesc: "View which schools need immediate attention.",
    survey: "Official Survey Report",
    surveyDesc: "Officers verify data and upload live photos with GPS.",
    feedback: "Feedback & Transparency",
    feedbackDesc: "Public can view government actions and provide feedback.",

    schoolHeading: "School Report Submission",
    statusHeading: "School Status Overview",

    reportHeading: "Submit School Report",
    reportDesc: "Fill out the details below to report your school's infrastructure status.",
    reportSchoolName: "School Name",
    reportLocation: "School Location",
    reportCondition: "Condition",
    reportUpload: "Upload Photo",
    reportSubmit: "Submit Report",
    reportSchoolPlaceholder: "Enter school name",
    reportLocationPlaceholder: "Enter school location",
    reportConditionPlaceholder: "Describe the current condition",

    contactHeading: "Contact Us",
    contactDesc: "If you have any suggestions or complaints, please contact us using the form below.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    submitBtn: "Send Message",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "Enter your email address",
    messagePlaceholder: "Type your message here...",
  },

  hi: {
    navTitle: "विद्यालय अवसंरचना निगरानी प्रणाली",
    navHome: "मुखपृष्ठ",
    navStatus: "विद्यालय स्थिति",
    navReport: "रिपोर्ट",
    navContact: "संपर्क करें",

    title: "विद्यालय अवसंरचना निगरानी पोर्टल",
    subtitle: "सुनिश्चित करना कि हर विद्यालय को आवश्यक सुविधाएँ मिलें",

    upload: "विद्यालय छवियाँ अपलोड करें",
    uploadDesc: "नागरिक समीक्षा हेतु विद्यालय की तस्वीरें अपलोड कर सकते हैं।",
    check: "विद्यालय की स्थिति देखें",
    checkDesc: "देखें किन विद्यालयों को तत्काल ध्यान की आवश्यकता है।",
    survey: "आधिकारिक सर्वेक्षण रिपोर्ट",
    surveyDesc: "अधिकारी डेटा की पुष्टि करते हैं और जीपीएस के साथ लाइव फोटो अपलोड करते हैं।",
    feedback: "प्रतिक्रिया और पारदर्शिता",
    feedbackDesc: "जनता सरकारी कार्यों को देख सकती है और प्रतिक्रिया दे सकती है।",

    schoolHeading: "विद्यालय रिपोर्ट सबमिशन",
    statusHeading: "विद्यालय स्थिति अवलोकन",

    reportHeading: "विद्यालय रिपोर्ट जमा करें",
    reportDesc: "अपने विद्यालय की अवसंरचना की स्थिति रिपोर्ट करने के लिए नीचे विवरण भरें।",
    reportSchoolName: "विद्यालय का नाम",
    reportLocation: "विद्यालय का स्थान",
    reportCondition: "स्थिति का विवरण",
    reportUpload: "फोटो अपलोड करें",
    reportSubmit: "रिपोर्ट जमा करें",
    reportSchoolPlaceholder: "विद्यालय का नाम दर्ज करें",
    reportLocationPlaceholder: "विद्यालय का स्थान दर्ज करें",
    reportConditionPlaceholder: "वर्तमान स्थिति का विवरण लिखें",

    contactHeading: "हमसे संपर्क करें",
    contactDesc: "अगर आपके पास कोई सुझाव या शिकायत है, तो कृपया नीचे दिए गए फॉर्म के माध्यम से संपर्क करें।",
    nameLabel: "आपका नाम",
    emailLabel: "आपका ईमेल",
    messageLabel: "आपका संदेश",
    submitBtn: "संदेश भेजें",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    emailPlaceholder: "अपना ईमेल पता दर्ज करें",
    messagePlaceholder: "यहाँ अपना संदेश टाइप करें...",
  },
};

// 🔁 Apply translations to elements on the current page
function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;
  const t = translations[lang];

  // 🧭 Navbar
  if (document.getElementById("navTitle")) document.getElementById("navTitle").textContent = t.navTitle;
  if (document.getElementById("navHome")) document.getElementById("navHome").textContent = t.navHome;
  if (document.getElementById("navStatus")) document.getElementById("navStatus").textContent = t.navStatus;
  if (document.getElementById("navReport")) document.getElementById("navReport").textContent = t.navReport;
  if (document.getElementById("navContact")) document.getElementById("navContact").textContent = t.navContact;

  // 🏠 Hero section
  if (document.querySelector(".hero-content h1"))
    document.querySelector(".hero-content h1").textContent = t.title;
  if (document.querySelector(".hero-content p"))
    document.querySelector(".hero-content p").textContent = t.subtitle;

  // 💡 Feature cards
  if (document.querySelector(".red h3")) document.querySelector(".red h3").textContent = t.upload;
  if (document.querySelector(".red p")) document.querySelector(".red p").textContent = t.uploadDesc;
  if (document.querySelector(".orange h3")) document.querySelector(".orange h3").textContent = t.check;
  if (document.querySelector(".orange p")) document.querySelector(".orange p").textContent = t.checkDesc;
  if (document.querySelector(".blue h3")) document.querySelector(".blue h3").textContent = t.survey;
  if (document.querySelector(".blue p")) document.querySelector(".blue p").textContent = t.surveyDesc;
  if (document.querySelector(".purple h3")) document.querySelector(".purple h3").textContent = t.feedback;
  if (document.querySelector(".purple p")) document.querySelector(".purple p").textContent = t.feedbackDesc;

  // 🏫 Report Page
  if (document.getElementById("reportHeading")) document.getElementById("reportHeading").textContent = t.reportHeading;
  if (document.getElementById("reportDesc")) document.getElementById("reportDesc").textContent = t.reportDesc;
  if (document.getElementById("reportSchoolLabel")) document.getElementById("reportSchoolLabel").textContent = t.reportSchoolName;
  if (document.getElementById("reportLocationLabel")) document.getElementById("reportLocationLabel").textContent = t.reportLocation;
  if (document.getElementById("reportConditionLabel")) document.getElementById("reportConditionLabel").textContent = t.reportCondition;
  if (document.getElementById("reportUploadLabel")) document.getElementById("reportUploadLabel").textContent = t.reportUpload;
  if (document.getElementById("reportSubmitBtn")) document.getElementById("reportSubmitBtn").textContent = t.reportSubmit;

  if (document.getElementById("schoolNameInput")) document.getElementById("schoolNameInput").placeholder = t.reportSchoolPlaceholder;
  if (document.getElementById("locationInput")) document.getElementById("locationInput").placeholder = t.reportLocationPlaceholder;
  if (document.getElementById("conditionInput")) document.getElementById("conditionInput").placeholder = t.reportConditionPlaceholder;

  // ✉️ Contact Page
  if (document.getElementById("contactHeading")) document.getElementById("contactHeading").textContent = t.contactHeading;
  if (document.getElementById("contactDesc")) document.getElementById("contactDesc").textContent = t.contactDesc;
  if (document.getElementById("labelName")) document.getElementById("labelName").textContent = t.nameLabel;
  if (document.getElementById("labelEmail")) document.getElementById("labelEmail").textContent = t.emailLabel;
  if (document.getElementById("labelMsg")) document.getElementById("labelMsg").textContent = t.messageLabel;
  if (document.getElementById("btnSend")) document.getElementById("btnSend").textContent = t.submitBtn;

  if (document.getElementById("nameInput")) document.getElementById("nameInput").placeholder = t.namePlaceholder;
  if (document.getElementById("emailInput")) document.getElementById("emailInput").placeholder = t.emailPlaceholder;
  if (document.getElementById("messageInput")) document.getElementById("messageInput").placeholder = t.messagePlaceholder;

  // Save preference
  localStorage.setItem("preferredLanguage", lang);
}

// 🧠 Apply saved language
window.onload = () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  const select = document.getElementById("languageSelect");
  if (select) select.value = savedLang;
  setTimeout(changeLanguage, 100);
};
=======
function scrollToSection() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> c75f1cc422fe12b7df3c2439d55ee727243790cf
