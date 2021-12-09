import "./App.css";
import Summary from "./Summary";
import PerInfo from "./GetRData";
import Career from "./Career";
import Comp from "./CompanyDetails";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Expert from "./Expertise";
import Methodology from "./Methodology";
import Tools from "./Tool";
import Education from "./Education";
import data from "./RData.json";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
//import ProgressBar from "./ProgressBar";

function App() {
  const printPDF = () => {
    // if (SelectedQuotationPDFInfo > 0 && SelectedInvoice > 0) {
    const domElement = document.getElementById("resumeID");
    html2canvas(domElement, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      var imgWidth = 205;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPdf("p", "mm");
      var position = 10;

      doc.addImage(
        imgData,
        "PNG",
        5,
        position,
        imgWidth,
        imgHeight,
        "",
        "FAST"
      );
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();

        doc.addImage(
          imgData,
          "PNG",
          2,
          position + 1,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        heightLeft -= pageHeight;
      }

      doc.save("Resume.pdf");
    });
  };

  return (
    <div
      style={{ border: "1px solid #ccc", borderRadius: "6px", margin: "10px" }}
    >
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "6px",

            margin: "10px 0 0 0",
            cursor: "pointer",
          }}
          onClick={printPDF}
        >
          Generate PDF
        </button>
      </div>
      <div
        id="resumeID"
        className="main"
        style={{
          padding: "5rem",
        }}
      >
        <div className="resume">
          <PerInfo data={data.personal_details} />
          <Summary data={data.summary} />
          <div className="underline"></div>
          <Career career={data.career} />
          <div className="underline"></div>
          <Comp data={data.companyDetails} />
        </div>
        <vl className="vl" />
        <div className="resSide">
          <Certifications data={data.certificates} />
          <div className="underline"></div>
          <Skills data={data.skills} />
          <div className="underline"></div>
          <Expert data={data.expertise} />
          <div className="underline"></div>
          <Methodology data={data.methodology} />
          <div className="underline"></div>
          <Tools data={data.tools} />
          <div className="underline"></div>
          <Education _={data.education} />
        </div>
      </div>
    </div>
  );
}

export default App;
