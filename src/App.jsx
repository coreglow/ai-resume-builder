import React, { useState, useEffect, useRef } from 'react';
import { LucidePen, LucideSparkles, LucideDownload, LucideClipboardCheck, LucideLoader2, LucideChevronLeft, LucideChevronRight, LucideFileText, LucideBriefcase, LucideGraduationCap, LucideLanguages, LucidePalette } from 'lucide-react';

// Helper component for icons with text
const IconLabel = ({ icon: Icon, children }) => (
    <div className="flex items-center text-gray-600 dark:text-gray-300">
        <Icon className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
        <span>{children}</span>
    </div>
);

// --- Template Components --- //
// These components are responsible for rendering the resume in different visual styles.

const TemplateClassic = ({ resume, isEditable, handleContentChange }) => (
    <div className="p-8 bg-white text-gray-800 font-sans text-sm printable-area" id="resume-preview">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-wider" contentEditable={isEditable} onBlur={(e) => handleContentChange('name', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.name}</h1>
            <p className="mt-2 text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange('contact', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.contact}</p>
        </header>
        <main>
            <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
                <p className="text-gray-700" contentEditable={isEditable} onBlur={(e) => handleContentChange('summary', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.summary}</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
                {resume.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-bold text-lg" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.company`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.company}</h3>
                        <p className="italic text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.roleAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.roleAndDate}</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            {exp.responsibilities.map((res, resIndex) => (
                                <li key={resIndex} contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.responsibilities.${resIndex}`, e.currentTarget.textContent)} suppressContentEditableWarning>{res}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
                {resume.education.map((edu, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-lg" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.institution`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.institution}</h3>
                        <p className="italic text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.degreeAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.degreeAndDate}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">SKILLS</h2>
                <p className="text-gray-700" contentEditable={isEditable} onBlur={(e) => handleContentChange('skills', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.skills}</p>
            </section>
        </main>
    </div>
);

const TemplateModern = ({ resume, isEditable, handleContentChange }) => (
    <div className="p-8 bg-white text-gray-800 font-sans text-sm printable-area" id="resume-preview">
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 bg-gray-100 p-6">
                <header className="text-left mb-8">
                    <h1 className="text-3xl font-bold text-indigo-700 tracking-wider" contentEditable={isEditable} onBlur={(e) => handleContentChange('name', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.name}</h1>
                    <p className="mt-2 text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange('contact', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.contact}</p>
                </header>
                 <section className="mb-6">
                    <h2 className="text-lg font-bold text-indigo-700 border-b-2 border-indigo-200 pb-1 mb-3">EDUCATION</h2>
                    {resume.education.map((edu, index) => (
                        <div key={index} className="mb-3">
                            <h3 className="font-semibold" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.institution`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.institution}</h3>
                            <p className="text-gray-600 text-xs" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.degreeAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.degreeAndDate}</p>
                        </div>
                    ))}
                </section>
                <section>
                    <h2 className="text-lg font-bold text-indigo-700 border-b-2 border-indigo-200 pb-1 mb-3">SKILLS</h2>
                    <p className="text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange('skills', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.skills}</p>
                </section>
            </div>
            <div className="col-span-8 p-6">
                 <section className="mb-6">
                    <h2 className="text-lg font-bold text-indigo-700 border-b-2 border-indigo-200 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
                    <p className="text-gray-700" contentEditable={isEditable} onBlur={(e) => handleContentChange('summary', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.summary}</p>
                </section>
                <section>
                    <h2 className="text-lg font-bold text-indigo-700 border-b-2 border-indigo-200 pb-1 mb-3">WORK EXPERIENCE</h2>
                    {resume.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold text-base" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.company`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.company}</h3>
                            <p className="italic text-gray-600 text-sm" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.roleAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.roleAndDate}</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                {exp.responsibilities.map((res, resIndex) => (
                                    <li key={resIndex} contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.responsibilities.${resIndex}`, e.currentTarget.textContent)} suppressContentEditableWarning>{res}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    </div>
);

const TemplatePremium = ({ resume, isEditable, handleContentChange }) => (
    <div className="p-8 bg-white text-gray-800 font-serif text-sm printable-area" id="resume-preview">
        <header className="text-center mb-6 pb-4 border-b-4 border-teal-500">
            <h1 className="text-5xl font-thin tracking-widest uppercase" contentEditable={isEditable} onBlur={(e) => handleContentChange('name', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.name}</h1>
            <p className="mt-2 text-gray-500 tracking-wider" contentEditable={isEditable} onBlur={(e) => handleContentChange('contact', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.contact}</p>
        </header>
        <main>
             <section className="mb-6">
                <h2 className="text-center text-teal-600 font-bold tracking-widest text-lg mb-3">SUMMARY</h2>
                <p className="text-center text-gray-700 italic" contentEditable={isEditable} onBlur={(e) => handleContentChange('summary', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.summary}</p>
            </section>
            <div className="w-2/3 mx-auto h-px bg-gray-300 my-4"></div>
            <section className="mb-6">
                <h2 className="text-center text-teal-600 font-bold tracking-widest text-lg mb-3">EXPERIENCE</h2>
                {resume.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-bold text-base" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.company`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.company}</h3>
                        <p className="italic text-gray-600" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.roleAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{exp.roleAndDate}</p>
                        <ul className="list-none mt-2 text-gray-700">
                           {exp.responsibilities.map((res, resIndex) => (
                                <li key={resIndex} className="flex items-start" contentEditable={isEditable} onBlur={(e) => handleContentChange(`experience.${index}.responsibilities.${resIndex}`, e.currentTarget.textContent)} suppressContentEditableWarning>
                                <span className="text-teal-500 mr-2">◆</span>{res}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
             <div className="w-2/3 mx-auto h-px bg-gray-300 my-4"></div>
            <section className="grid grid-cols-2 gap-8">
                 <div>
                    <h2 className="text-center text-teal-600 font-bold tracking-widest text-lg mb-3">EDUCATION</h2>
                    {resume.education.map((edu, index) => (
                        <div key={index} className="text-center">
                            <h3 className="font-bold" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.institution`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.institution}</h3>
                            <p className="italic text-gray-600 text-sm" contentEditable={isEditable} onBlur={(e) => handleContentChange(`education.${index}.degreeAndDate`, e.currentTarget.textContent)} suppressContentEditableWarning>{edu.degreeAndDate}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h2 className="text-center text-teal-600 font-bold tracking-widest text-lg mb-3">SKILLS</h2>
                    <p className="text-center text-gray-700" contentEditable={isEditable} onBlur={(e) => handleContentChange('skills', e.currentTarget.textContent)} suppressContentEditableWarning>{resume.skills}</p>
                </div>
            </section>
        </main>
    </div>
);

// --- Main App Component --- //

export default function App() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        experiences: [{ company: '', period: '', role: '', department: '', tasks: '' }],
        education: [{ school: '', period: '', degree: '', major: '' }],
        toeic: '700-795',
        jobPosting: '',
        name: 'Gildong Hong',
        contact: 'gildong.hong@email.com | +82 10-1234-5678 | linkedin.com/in/gildong'
    });
    const [selectedTemplate, setSelectedTemplate] = useState('Classic');
    const [generatedResume, setGeneratedResume] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

    const templates = {
        'Classic': { component: TemplateClassic, name: '클래식', type: '무료' },
        'Modern': { component: TemplateModern, name: '모던', type: '무료' },
        'Premium': { component: TemplatePremium, name: '프리미엄', type: '유료' }
    };
    
    // Handler for simple form inputs
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handler for dynamic array inputs (experience, education)
    const handleArrayChange = (section, index, e) => {
        const { name, value } = e.target;
        const list = [...formData[section]];
        list[index][name] = value;
        setFormData(prev => ({ ...prev, [section]: list }));
    };

    const addArrayItem = (section) => {
        const newItem = section === 'experiences'
            ? { company: '', period: '', role: '', department: '', tasks: '' }
            : { school: '', period: '', degree: '', major: '' };
        setFormData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
    };

    const removeArrayItem = (section, index) => {
        const list = [...formData[section]];
        list.splice(index, 1);
        setFormData(prev => ({ ...prev, [section]: list }));
    };
    
    // Handler for changing template selection
    const handleTemplateSelect = (templateKey) => {
        if (templates[templateKey].type === '유료') {
            setIsPremiumModalOpen(true);
        } else {
            setSelectedTemplate(templateKey);
        }
    };
    
    const handleContentChange = (path, value) => {
        setGeneratedResume(prev => {
            const newResume = { ...prev };
            let current = newResume;
            const keys = path.split('.');
            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    current[key] = value;
                } else {
                    current = current[key];
                }
            });
            return newResume;
        });
    };

    const generateResumePrompt = () => {
        const { experiences, education, toeic, jobPosting, name, contact } = formData;

        const experienceText = experiences.map(exp => 
            `- Company: ${exp.company}, Period: ${exp.period}, Role: ${exp.role}, Department: ${exp.department}\n  Major Tasks & Achievements: ${exp.tasks}`
        ).join('\n');

        const educationText = education.map(edu => 
            `- School: ${edu.school}, Period: ${edu.period}, Degree: ${edu.degree}, Major: ${edu.major}`
        ).join('\n');

        return `
            You are a professional career consultant creating an English resume.
            Based on the user's information and the job posting below, generate a compelling resume.
            Adjust the vocabulary and sentence structure difficulty based on the user's TOEIC score.

            **User Information:**
            - Name: ${name}
            - Contact: ${contact}
            - TOEIC Score: ${toeic} (Use this to gauge English proficiency and tailor language complexity. For example, a 900+ score allows for more sophisticated vocabulary and complex sentences, while a 600-700 score should use clearer, more direct language.)
            - Work Experience:\n${experienceText}
            - Education:\n${educationText}

            **Job Posting:**
            ---
            ${jobPosting}
            ---

            **Your Task:**
            Generate a resume in JSON format. The JSON object must contain the following keys: "name", "contact", "summary", "experience", "education", "skills".
            1.  **name**: The user's name.
            2.  **contact**: The user's contact information.
            3.  **summary**: Write a 2-3 sentence 'Professional Summary' that highlights the user's key strengths and experiences in relation to the job posting.
            4.  **experience**: An array of objects. For each experience item provided by the user, create an object with "company", "roleAndDate", and "responsibilities".
                - "company": The company name.
                - "roleAndDate": A string combining the role and employment period (e.g., "Software Engineer | 2020.01 - 2023.12").
                - "responsibilities": An array of 3-4 bullet points. Rewrite the user's tasks into professional, action-oriented achievements, using keywords from the job posting. Start each bullet point with a strong action verb.
            5.  **education**: An array of objects. For each education item, create an object with "institution" and "degreeAndDate".
                - "institution": The school name.
                - "degreeAndDate": A string combining the degree, major, and graduation period (e.g., "Bachelor of Science in Computer Science | 2016.03 - 2020.02").
            6.  **skills**: A string of comma-separated key skills derived from both the user's experience and the requirements in the job posting (e.g., "React, TypeScript, Node.js, Agile Methodologies, Project Management").

            Return only the raw JSON object, with no surrounding text or markdown.
        `;
    };

    const handleGenerate = async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedResume(null);

        const prompt = generateResumePrompt();
        const apiKey = ""; // Leave empty, will be handled by environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0) {
                const rawText = result.candidates[0].content.parts[0].text;
                // Clean the response to ensure it's valid JSON
                const cleanedJsonString = rawText.replace(/^```json\s*|```\s*$/g, '');
                const parsedResume = JSON.parse(cleanedJsonString);
                setGeneratedResume(parsedResume);
                setStep(3);
            } else {
                throw new Error("AI did not return a valid response.");
            }
        } catch (err) {
            console.error(err);
            setError(`이력서 생성에 실패했습니다: ${err.message}. 잠시 후 다시 시도해 주세요.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const downloadAsPdf = () => {
        const printableArea = document.querySelector('.printable-area');
        if (!printableArea) return;
        
        // Temporarily add print-specific styles
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
              body * { visibility: hidden; }
              .printable-area, .printable-area * { visibility: visible; }
              .printable-area { position: absolute; left: 0; top: 0; width: 100%; }
              @page { size: A4; margin: 0; }
            }
        `;
        document.head.appendChild(style);
        window.print();
        document.head.removeChild(style);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <InputForm />;
            case 2:
                return <JobPostingForm />;
            case 3:
                return <ReviewScreen />;
            default:
                return <InputForm />;
        }
    };

    const InputSection = ({ title, icon: Icon, children }) => (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Icon className="w-6 h-6 mr-3 text-indigo-500" />
                {title}
            </h3>
            {children}
        </div>
    );
    
    const FormRow = ({ label, children }) => (
         <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            {children}
        </div>
    );

    const InputForm = () => (
        <div className="max-w-4xl mx-auto">
            <InputSection title="기본 정보" icon={LucideFileText}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormRow label="이름">
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                    </FormRow>
                    <FormRow label="연락처">
                        <input type="text" name="contact" value={formData.contact} onChange={handleFormChange} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                    </FormRow>
                </div>
            </InputSection>

            <InputSection title="경력 사항" icon={LucideBriefcase}>
                {formData.experiences.map((exp, index) => (
                    <div key={index} className="p-4 border rounded-lg mb-4 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormRow label="회사명"><input type="text" name="company" value={exp.company} onChange={(e) => handleArrayChange('experiences', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                            <FormRow label="근무 기간"><input type="text" name="period" value={exp.period} onChange={(e) => handleArrayChange('experiences', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" placeholder="예: 2020.01 - 2023.12" /></FormRow>
                            <FormRow label="직책"><input type="text" name="role" value={exp.role} onChange={(e) => handleArrayChange('experiences', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                            <FormRow label="부서명"><input type="text" name="department" value={exp.department} onChange={(e) => handleArrayChange('experiences', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                        </div>
                        <FormRow label="주요 업무 및 성과">
                            <textarea name="tasks" value={exp.tasks} onChange={(e) => handleArrayChange('experiences', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
                        </FormRow>
                        <button onClick={() => removeArrayItem('experiences', index)} className="text-red-500 text-sm mt-2">삭제</button>
                    </div>
                ))}
                <button onClick={() => addArrayItem('experiences')} className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md dark:bg-indigo-900 dark:text-indigo-200">경력 추가</button>
            </InputSection>

            <InputSection title="학력 사항" icon={LucideGraduationCap}>
                {formData.education.map((edu, index) => (
                    <div key={index} className="p-4 border rounded-lg mb-4 dark:border-gray-700">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormRow label="학교명"><input type="text" name="school" value={edu.school} onChange={(e) => handleArrayChange('education', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                            <FormRow label="재학 기간"><input type="text" name="period" value={edu.period} onChange={(e) => handleArrayChange('education', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" placeholder="예: 2016.03 - 2020.02" /></FormRow>
                            <FormRow label="학위"><input type="text" name="degree" value={edu.degree} onChange={(e) => handleArrayChange('education', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                            <FormRow label="전공"><input type="text" name="major" value={edu.major} onChange={(e) => handleArrayChange('education', index, e)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" /></FormRow>
                         </div>
                        <button onClick={() => removeArrayItem('education', index)} className="text-red-500 text-sm mt-2">삭제</button>
                    </div>
                ))}
                <button onClick={() => addArrayItem('education')} className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md dark:bg-indigo-900 dark:text-indigo-200">학력 추가</button>
            </InputSection>

            <InputSection title="어학 능력 (TOEIC)" icon={LucideLanguages}>
                <FormRow label="본인의 토익 점수대를 선택해주세요. AI가 어휘 수준을 조절합니다.">
                    <select name="toeic" value={formData.toeic} onChange={handleFormChange} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                        <option>950점 이상</option>
                        <option>900-945</option>
                        <option>850-895</option>
                        <option>800-845</option>
                        <option>700-795</option>
                        <option>600-695</option>
                        <option>500-595</option>
                        <option>500점대 이하</option>
                    </select>
                </FormRow>
            </InputSection>
            
            <InputSection title="템플릿 선택" icon={LucidePalette}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(templates).map(([key, { name, type }]) => (
                        <div key={key} onClick={() => handleTemplateSelect(key)}
                            className={`p-2 border-2 rounded-lg cursor-pointer text-center ${selectedTemplate === key ? 'border-indigo-500' : 'dark:border-gray-600'}`}>
                            <div className="font-semibold">{name}</div>
                            <div className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
                                type === '무료' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>{type}</div>
                        </div>
                    ))}
                </div>
            </InputSection>

            <div className="flex justify-end mt-8">
                <button onClick={() => setStep(2)} className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 flex items-center">
                    다음 단계 <LucideChevronRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );

    const JobPostingForm = () => (
        <div className="max-w-4xl mx-auto">
             <InputSection title="채용 공고" icon={LucideClipboardCheck}>
                <FormRow label="지원하려는 포지션의 채용 공고를 여기에 붙여넣어 주세요.">
                     <textarea
                        name="jobPosting"
                        value={formData.jobPosting}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                        rows="15"
                        placeholder="예: We are looking for a proactive and passionate Software Engineer to join our dynamic team..."
                    />
                </FormRow>
             </InputSection>

            {error && <div className="text-red-500 text-center my-4">{error}</div>}

            <div className="flex justify-between mt-8">
                <button onClick={() => setStep(1)} className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 flex items-center dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                    <LucideChevronLeft className="w-5 h-5 mr-2" /> 이전 단계
                </button>
                <button onClick={handleGenerate} disabled={isLoading} className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 flex items-center disabled:bg-green-300">
                    {isLoading ? (
                        <>
                            <LucideLoader2 className="w-5 h-5 mr-2 animate-spin" />
                            AI 생성 중...
                        </>
                    ) : (
                        <>
                            <LucideSparkles className="w-5 h-5 mr-2" />
                            AI로 이력서 생성하기
                        </>
                    )}
                </button>
            </div>
        </div>
    );

    const ReviewScreen = () => {
        if (!generatedResume) {
            return (
                <div className="text-center p-8">
                    <p className="mb-4">이력서 데이터를 불러오는 중 오류가 발생했습니다.</p>
                    <button onClick={() => setStep(1)} className="px-6 py-3 bg-indigo-600 text-white rounded-lg">처음으로 돌아가기</button>
                </div>
            );
        }
        
        const TemplateComponent = templates[selectedTemplate].component;

        return (
            <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                   <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                      <TemplateComponent resume={generatedResume} isEditable={true} handleContentChange={handleContentChange} />
                   </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-8">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">설정 및 다운로드</h3>
                        
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">템플릿 변경</label>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(templates).map(([key, { name, type }]) => (
                                    <div key={key} onClick={() => handleTemplateSelect(key)}
                                        className={`p-2 border-2 rounded-lg cursor-pointer text-center ${selectedTemplate === key ? 'border-indigo-500' : 'dark:border-gray-600'}`}>
                                        <div className="font-semibold text-sm">{name}</div>
                                        <div className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${
                                            type === '무료' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>{type}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            <LucidePen className="w-4 h-4 inline-block mr-1"/>이력서의 각 항목을 클릭하여 내용을 직접 수정할 수 있습니다.
                        </p>

                        <button onClick={downloadAsPdf} className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 flex items-center justify-center">
                            <LucideDownload className="w-5 h-5 mr-2" /> PDF로 다운로드
                        </button>

                         <button onClick={() => setStep(1)} className="w-full mt-4 text-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                           처음부터 다시 시작하기
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4 sm:p-8 font-sans">
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">AI 영문 이력서 빌더</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">경력과 채용 공고를 입력하면 AI가 맞춤형 이력서를 생성해 드립니다.</p>
            </header>

            <main>
                {renderStep()}
            </main>
            
            {isPremiumModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl max-w-sm text-center">
                        <h3 className="text-xl font-bold mb-4">프리미엄 템플릿</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">이 기능은 현재 준비 중입니다. 곧 더욱 멋진 템플릿으로 찾아뵙겠습니다!</p>
                        <button onClick={() => setIsPremiumModalOpen(false)} className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
                            확인
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
