import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Certificate = () => {
  const certRef = useRef();

  const [form, setForm] = useState({
    name: '',
    course: '',
    summary: '',
    certNo: '',
    hours: '',
    date: '',
    mode: ''
  });

  const handleDownload = () => {
    const element = certRef.current;

    const opt = {
      margin: 0,
      filename: `${form.certNo || "certificate"}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'px', format: [1123, 794], orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleFocus = (e, field, placeholder) => {
    if (!form[field]) e.currentTarget.textContent = '';
  };

  const handleBlur = (e, field, placeholder) => {
    const value = e.currentTarget.textContent.trim();
    setForm({ ...form, [field]: value });
    if (!value) e.currentTarget.textContent = placeholder;
  };

  const getValue = (field, placeholder) => {
    return form[field] || placeholder;
  };

  const baseStyle = {
    outline: 'none',
    background: 'transparent',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div
        ref={certRef}
        style={{
          width: '1123px',
          height: '794px',
          backgroundImage: 'url("/AAAML.png")',
          backgroundSize: '1123px 794px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          position: 'relative',
          fontFamily: 'Times New Roman, serif',
        }}
      >

        {/* Name */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'name', 'NAME ')}
          onBlur={(e) => handleBlur(e, 'name', 'NAME')}
          style={{
            ...baseStyle,
            position: 'absolute',
            top: '260px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#D4AF37',
            textTransform: 'uppercase',
          }}
        >
          {getValue('name', 'NAME')}
        </div>

        {/* Course Name */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'course', 'Course Name')}
          onBlur={(e) => handleBlur(e, 'course', 'Course Name')}
          style={{
            ...baseStyle,
            position: 'absolute',
            top: '340px',
            left: '300px',
            width: '700px',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '1.5',
            minHeight: '60px',         // ≈ 3 lines
            maxHeight: '90px',         // lock to 3 lines
            overflowY: 'auto',
            color: '#000',
          }}
        >
          {getValue('course', 'Course Name')}
        </div>

        {/* Course Summary */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'summary', 'Course Summary')}
          onBlur={(e) => handleBlur(e, 'summary', 'Course Summary')}
          style={{
            ...baseStyle,
            position: 'absolute',
            top: '430px',
            left: '300px',
            width: '700px',
            fontSize: '15px',
            fontWeight: 'bold',
            lineHeight: '1.5',
            minHeight: '60px',         // ≈ 3 lines
            maxHeight: '120px',         // lock to 3 lines
            overflowY: 'auto',
            color: '#000',
          }}
        >
          {getValue('summary', 'Course Summary')}
        </div>

        {/* Certificate ID */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'certNo', 'CERT-00001')}
          onBlur={(e) => handleBlur(e, 'certNo', 'CERT-00001')}
          style={{
            ...baseStyle,
            position: 'absolute',
            bottom: '205px',
            left: '350px',
            width: '400px',
            fontSize: '16px',
            color: '#000',
          }}
        >
          {getValue('certNo', 'CERT-00001')}
        </div>

        {/* Hours */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'hours', '8')}
          onBlur={(e) => handleBlur(e, 'hours', '8')}
          style={{
            ...baseStyle,
            position: 'absolute',
            bottom: '173px',
            left: '350px',
            width: '400px',
            fontSize: '16px',
            color: '#000',
          }}
        >
          {getValue('hours', '8')}
        </div>

        {/* Date */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'date', '2025-06-18')}
          onBlur={(e) => handleBlur(e, 'date', '2025-06-18')}
          style={{
            ...baseStyle,
            position: 'absolute',
            bottom: '138px',
            left: '350px',
            width: '400px',
            fontSize: '16px',
            color: '#000',
          }}
        >
          {getValue('date', '2025-06-18')}
        </div>

        {/* Mode of Training */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, 'mode', 'Online')}
          onBlur={(e) => handleBlur(e, 'mode', 'Online')}
          style={{
            ...baseStyle,
            position: 'absolute',
            bottom: '105px',
            left: '350px',
            width: '400px',
            fontSize: '16px',
            color: '#000',
          }}
        >
          {getValue('mode', 'Online')}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        style={{
          marginTop: '20px',
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
