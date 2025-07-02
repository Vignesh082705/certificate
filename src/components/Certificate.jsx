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
        <div style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)', fontSize: '55px', fontWeight: '400', color: '#DAA520', fontFamily: 'Verdana, sans-serif' }}>CERTIFICATE</div>
        <div style={{ position: 'absolute', top: '170px', left: '50%', transform: 'translateX(-50%)', fontSize: '28px', fontWeight: '400', color: '#003366', fontFamily: 'Verdana, sans-serif' }}>OF PARTICIPATION</div>
        <div style={{ position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', fontSize: '23px', color: '#003366', fontFamily: 'Verdana, sans-serif' }}>THIS CERTIFICATE IS PROUDLY PRESENTED TO</div>

        {/* Static Labels */}
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
            fontSize: "37px",
            fontWeight: "bold",
            color: "#D4AF37",
            position: "absolute",
            top: "260px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {getValue("name", "NAME")}
        </div>

        <div
  contentEditable
  suppressContentEditableWarning
  onFocus={(e) => handleFocus(e, "course", "Course Name")}
  onBlur={(e) => handleBlur(e, "course", "Course Name")}
  style={{
    ...baseStyle,
    position: "absolute",
    top: "332px",
    left: "170px",
    width: "810px",
    fontSize: "18px",
    textAlign:"center",
    fontWeight: "bold",
    lineHeight: "1.5",
    minHeight: "60px",
    fontFamily: 'Verdana, sans-serif',
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
    top: "390px",
    left: "170px",
    width: "810px",
    fontSize: "13px",
    lineHeight: "1.5",
    minHeight: "60px",
    textAlign: "center",
    color: "#3B5998",
  }}
>
  {getValue("summary", "Course Summary")}
</div>

        {/* Certificate ID */}
       {/* Static prefix */}
<div
  style={{
    position: "absolute",
    bottom: "230px",
    left: "350px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Verdana, sans-serif",
    color: "#3B5998",
  }}
>
  AAACT1
</div>

{/* Input for last 4 digits */}
<input
  type="text"
  value={form.certNo}
  maxLength={7}
  onChange={(e) =>
    setForm({
      ...form,
      certNo: e.target.value.replace(/[^0-9]/g, ""),
    })
  }
  placeholder="0000000"
  style={{
    position: "absolute",
    bottom: "227px",       // slightly moved up
    left: "422px",
    width: "80px",
    height: "26px",        // increased height
    lineHeight: "26px",    // match height
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Verdana, sans-serif",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#3B5998",
    textAlign: "left",
    padding: "0px",        // remove extra spacing
    boxSizing: "border-box", // ensures height is respected
  }}
/>

        {/* Hours */}
        <div
  style={{
    position: "absolute",
    bottom: "195px",
    left: "350px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Verdana, sans-serif",
    color: "#3B5998",
    display: "flex",
    alignItems: "center",
  }}
>
  {/* Editable Number */}
  <span
    contentEditable
    suppressContentEditableWarning
    onBlur={(e) => {
      const value = e.currentTarget.textContent.trim();
      setForm({ ...form, hours: value.replace(/\D/g, "") }); // only digits
    }}
    onFocus={(e) => {
      if (!form.hours) e.currentTarget.textContent = "";
    }}
    style={{
      outline: "none",
      minWidth: "20px",
      textAlign: "left",
    }}
  >
    {form.hours || "0"}
  </span>

  {/* Static "Hour" label */}
  <span>Hour</span>
</div>


        {/* Date */}
        <input
  type="text"
  value={form.date}
  onChange={(e) => {
    let input = e.target.value.replace(/\D/g, ""); // remove non-numeric
    if (input.length > 8) input = input.slice(0, 8);

    let formatted = input;
    if (input.length > 4) {
      formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4)}`;
    } else if (input.length > 2) {
      formatted = `${input.slice(0, 2)}/${input.slice(2)}`;
    }

    setForm({ ...form, date: formatted });
  }}
  placeholder="dd/mm/yyyy"
  maxLength={10}
  style={{
    position: "absolute",
    bottom: "155px",
    left: "350px",
    width: "120px",
    height: "26px",        // increased height
    lineHeight: "26px", 
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Verdana, sans-serif",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#3B5998",
  }}
/>


        {/* Mode */}
        <select
  value={form.mode}
  onChange={(e) => setForm({ ...form, mode: e.target.value })}
  style={{
    position: "absolute",
    bottom: "121px",
    left: "350px",
    width: "400px",
    height: "26px",               // ✅ ensures full text visibility
    lineHeight: "26px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Verdana, sans-serif",
    color: "#3B5998",
    background: "transparent",
    border: "none",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    textAlign: "left",
  }}
>
  <option value="">Select Mode</option>
  <option value="Online">Online</option>
  <option value="Face To Face">Face To Face</option>
  <option value="In Office">In Office</option>
  <option value="In House">In House</option>
</select>

        {/* Signature */}
        {/* Signature and Seal Container */}
<div
  style={{
    position: "absolute",
    bottom: "110px",
    right: "110px",
    textAlign: "center",
    color: "#3B5998",
  }}
>
  {/* Seal - background layer */}
  <img
    src="/seal.png"
    alt="Seal"
    style={{
      width: "100px",
      position: "absolute",
      bottom: "55px",
      right: "90px",
      zIndex: 1,
    }}
  />

  {/* Signature - top layer */}
  <img
    src="/signature.png"
    alt="Signature"
    style={{
      width: "200px",
      position: "relative",
      zIndex: 2,
      marginLeft:"25px",
      marginBottom: "15px",
    }}
  />

  {/* Name and Title */}
  <p style={{ fontSize: "20px", fontWeight:"bold", fontFamily: "'Playfair Display'", textTransform: "uppercase", margin: 0 }}>
    Umamaheswari Sukumar
  </p>
  <p style={{ fontSize: "16px", fontFamily: "Verdana, sans-serif", margin: 0 }}>
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
