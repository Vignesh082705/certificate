import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Certificate = () => {
  const certRef = useRef();

  const [form, setForm] = useState({
    name: "",
    course: "",
    summary: "",
    certNo: "",
    hours: "",
    date: "",
    mode: "",
  });

  const handleDownload = () => {
    const element = certRef.current;
    const opt = {
      margin: 0,
      filename: `${form.certNo || "certificate"}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: false,
      },
      jsPDF: {
        unit: "pt",
        format: "a4",
        orientation: "landscape",
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  const handleFocus = (e, field, placeholder) => {
    if (!form[field]) e.currentTarget.textContent = "";
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
    outline: "none",
    background: "transparent",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    fontFamily: "Verdana, sans-serif",
    textRendering: "geometricPrecision",
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div
        ref={certRef}
        style={{
          width: "1123px",
          height: "794px",
          backgroundImage: 'url("/AAAML.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Headings */}
        <div style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)', fontSize: '60px', fontWeight: '400', color: '#DAA520' }}>CERTIFICATE</div>
        <div style={{ position: 'absolute', top: '170px', left: '50%', transform: 'translateX(-50%)', fontSize: '30px', fontWeight: '400', color: '#003366' }}>OF PARTICIPATION</div>
        <div style={{ position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', fontSize: '25px', color: '#003366' }}>THIS CERTIFICATE IS PROUDLY PRESENTED TO</div>

        {/* Static Labels */}
        <div style={{ position: 'absolute', top: '330px', left: '170px', fontSize: '22px', fontWeight: 'bold', color: '#000080' }}>Course Name:</div>
        <div style={{ position: 'absolute', top: '408px', left: '170px', fontSize: '15px', color: '#3B5998' }}>Case Summary:</div>
        <div style={{ position: 'absolute', bottom: '230px', left: '170px', fontSize: '18px', color: '#3B5998' }}>Certificate ID:</div>
        <div style={{ position: 'absolute', bottom: '195px', left: '170px', fontSize: '18px', color: '#3B5998' }}>Hours:</div>
        <div style={{ position: 'absolute', bottom: '160px', left: '170px', fontSize: '18px', color: '#3B5998' }}>Date of Completion:</div>
        <div style={{ position: 'absolute', bottom: '125px', left: '170px', fontSize: '18px', color: '#3B5998' }}>Mode of Training:</div>

        {/* NAME */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, "name", "NAME")}
          onBlur={(e) => handleBlur(e, "name", "NAME")}
          style={{
            ...baseStyle,
            fontFamily: "Times New Roman, serif",
            fontSize: "45px",
            fontWeight: "bold",
            color: "#D4AF37",
            position: "absolute",
            top: "260px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {getValue("name", "NAME")}
        </div>

        {/* Course Name */}
<div
  contentEditable
  suppressContentEditableWarning
  onFocus={(e) => handleFocus(e, "course", "Course Name")}
  onBlur={(e) => handleBlur(e, "course", "Course Name")}
  style={{
    ...baseStyle,
    position: "absolute",
    top: "330px",
    left: "320px",
    width: "670px",
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "1.5",
    minHeight: "60px",
    color: "#000080",
  }}
>
  {getValue("course", "Course Name")}
</div>

{/* Course Summary */}
<div
  contentEditable
  suppressContentEditableWarning
  onFocus={(e) => handleFocus(e, "summary", "Course Summary")}
  onBlur={(e) => handleBlur(e, "summary", "Course Summary")}
  style={{
    ...baseStyle,
    position: "absolute",
    top: "410px",
    left: "275px",
    width: "700px",
    fontSize: "13px",
    lineHeight: "1.5",
    minHeight: "60px",
    color: "#3B5998",
  }}
>
  {getValue("summary", "Course Summary")}
</div>
        {/* Certificate ID */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, "certNo", "AAACT10000000")}
          onBlur={(e) => handleBlur(e, "certNo", "AAACT10000000")}
          style={{
            ...baseStyle,
            position: "absolute",
            bottom: "230px",
            left: "350px",
            width: "400px",
            fontSize: "16px",
            fontWeight: 'bold',
            color: "#3B5998",
          }}
        >
          {getValue("certNo", "AAACT10000000")}
        </div>

        {/* Hours */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, "hours", "0 Hour")}
          onBlur={(e) => handleBlur(e, "hours", "0 Hour")}
          style={{
            ...baseStyle,
            position: "absolute",
            bottom: "195px",
            left: "350px",
            width: "400px",
            fontSize: "16px",
            fontWeight: 'bold',
            color: "#3B5998",
          }}
        >
          {getValue("hours", "0 Hour")}
        </div>

        {/* Date */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, "date", "dd/mm/yyyy")}
          onBlur={(e) => handleBlur(e, "date", "dd/mm/yyyy")}
          style={{
            ...baseStyle,
            position: "absolute",
            bottom: "160px",
            left: "350px",
            width: "400px",
            fontSize: "16px",
            fontWeight: 'bold',
            color: "#3B5998",
          }}
        >
          {getValue("date", "dd/mm/yyyy")}
        </div>

        {/* Mode */}
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => handleFocus(e, "mode", "Online")}
          onBlur={(e) => handleBlur(e, "mode", "Online")}
          style={{
            ...baseStyle,
            position: "absolute",
            bottom: "125px",
            left: "350px",
            width: "400px",
            fontSize: "16px",
            fontWeight: 'bold',
            color: "#3B5998",
          }}
        >
          {getValue("mode", "Online")}
        </div>

        {/* Signature */}
        <div
          style={{
            position: "absolute",
            bottom: "110px",
            right: "130px",
            textAlign: "center",
            color: "#3B5998",
          }}
        >
          <img
            src="/signature.png"
            alt="Signature"
            style={{ width: "150px", marginBottom: "5px" }}
          />
          <p style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "Verdana" }}>
            Umamaheswari Sukumar
          </p>
          <p style={{ fontSize: "16px", fontFamily: "Verdana" }}>
            Executive Director
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        style={{
          marginTop: "20px",
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
