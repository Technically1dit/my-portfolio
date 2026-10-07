import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page (612 x 792 pt)
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Colors
  const darkTeal = rgb(0.06, 0.35, 0.35);    // #0f5959
  const accentAmber = rgb(0.85, 0.45, 0.1);  // #d9731a
  const textDark = rgb(0.12, 0.14, 0.17);     // #1f242b
  const textMuted = rgb(0.38, 0.42, 0.48);    // #616b7a
  const lineGrey = rgb(0.82, 0.85, 0.88);     // #d1d9e0
  const bgSoft = rgb(0.96, 0.98, 0.98);

  const marginX = 42;
  let y = height - 42;

  // Header background highlight accent bar
  page.drawRectangle({
    x: marginX,
    y: y - 2,
    width: width - marginX * 2,
    height: 3,
    color: darkTeal,
  });
  y -= 24;

  // Name
  page.drawText('Vandit Shastri', {
    x: marginX,
    y: y,
    size: 24,
    font: helveticaBold,
    color: darkTeal,
  });
  y -= 16;

  // Subtitle
  page.drawText('Machine Learning Engineer  |  High-Performance Python Systems', {
    x: marginX,
    y: y,
    size: 11,
    font: helveticaBold,
    color: accentAmber,
  });
  y -= 14;

  // Contact Row
  const contactText = 'Ahmedabad, Gujarat, India  *  vanditshastri@gmail.com  *  github.com/Technically1dit  *  linkedin.com/in/vandit-shastri-5536ab273';
  page.drawText(contactText, {
    x: marginX,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textMuted,
  });
  y -= 12;

  // Divider
  page.drawLine({
    start: { x: marginX, y },
    end: { x: width - marginX, y },
    thickness: 0.75,
    color: lineGrey,
  });
  y -= 14;

  // Helper function for section headers
  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: y,
      size: 10,
      font: helveticaBold,
      color: darkTeal,
    });
    y -= 4;
    page.drawLine({
      start: { x: marginX, y },
      end: { x: width - marginX, y },
      thickness: 0.5,
      color: darkTeal,
    });
    y -= 12;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeader('Professional Summary');
  const summaryLines = [
    'Machine Learning Engineer passionate about conversational AI agents, LLM pipelines, and high-performance asynchronous Python',
    'systems. Proven track record in building resilient data extraction frameworks, RAG architectures, and low-latency microservices with',
    'a strong foundation in data structures, algorithms, and clean system engineering.'
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: marginX,
      y: y,
      size: 9,
      font: helvetica,
      color: textDark,
      lineHeight: 12,
    });
    y -= 11.5;
  }
  y -= 8;

  // PROFESSIONAL EXPERIENCE
  drawSectionHeader('Professional Experience');

  // Role 1
  page.drawText('Machine Learning Engineer', {
    x: marginX,
    y: y,
    size: 10,
    font: helveticaBold,
    color: textDark,
  });
  page.drawText('2026 — Present', {
    x: width - marginX - 70,
    y: y,
    size: 9,
    font: helveticaBold,
    color: darkTeal,
  });
  y -= 11;
  page.drawText('Rootle  *  Ahmedabad, India (Full-Time)', {
    x: marginX,
    y: y,
    size: 8.5,
    font: helveticaOblique,
    color: textMuted,
  });
  y -= 11;

  const rootleBullets = [
    'Architected conversational AI agents with tool-calling capabilities and dynamic prompt orchestration.',
    'Engineered low-latency inference microservices and streaming token delivery pipelines in Python.',
    'Optimized contextual chunking, dense embeddings, and vector similarity search for grounded RAG accuracy.',
  ];
  for (const bullet of rootleBullets) {
    page.drawText('•', { x: marginX + 6, y, size: 8, font: helvetica, color: accentAmber });
    page.drawText(bullet, { x: marginX + 16, y, size: 8.5, font: helvetica, color: textDark });
    y -= 11;
  }
  y -= 4;

  // Role 2
  page.drawText('Machine Learning Intern', {
    x: marginX,
    y: y,
    size: 10,
    font: helveticaBold,
    color: textDark,
  });
  page.drawText('2025 — 2026', {
    x: width - marginX - 60,
    y: y,
    size: 9,
    font: helvetica,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Rootle  *  Ahmedabad, India (9 Months)', {
    x: marginX,
    y: y,
    size: 8.5,
    font: helveticaOblique,
    color: textMuted,
  });
  y -= 11;

  const rootleInternBullets = [
    'Prototyped machine learning workflows, automated evaluation loops, and benchmark validation pipelines.',
    'Developed fine-tuning data preparation scripts and evaluation metrics for domain-specific models.',
  ];
  for (const bullet of rootleInternBullets) {
    page.drawText('•', { x: marginX + 6, y, size: 8, font: helvetica, color: accentAmber });
    page.drawText(bullet, { x: marginX + 16, y, size: 8.5, font: helvetica, color: textDark });
    y -= 11;
  }
  y -= 4;

  // Role 3
  page.drawText('Python Developer', {
    x: marginX,
    y: y,
    size: 10,
    font: helveticaBold,
    color: textDark,
  });
  page.drawText('2025', {
    x: width - marginX - 30,
    y: y,
    size: 9,
    font: helvetica,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Actowiz Solutions  *  Ahmedabad, India (9 Months)', {
    x: marginX,
    y: y,
    size: 8.5,
    font: helveticaOblique,
    color: textMuted,
  });
  y -= 11;

  const actowizBullets = [
    'Engineered high-throughput web data extraction frameworks and automated ETL data ingestion in Python.',
    'Designed resilient data validation schemas, error handling mechanisms, and modular data transformations.',
  ];
  for (const bullet of actowizBullets) {
    page.drawText('•', { x: marginX + 6, y, size: 8, font: helvetica, color: accentAmber });
    page.drawText(bullet, { x: marginX + 16, y, size: 8.5, font: helvetica, color: textDark });
    y -= 11;
  }
  y -= 8;

  // EDUCATION
  drawSectionHeader('Education');
  page.drawText('Bachelor of Technology (B.Tech) in Computer Science & Engineering', {
    x: marginX,
    y: y,
    size: 9.5,
    font: helveticaBold,
    color: textDark,
  });
  page.drawText('2022 — 2026', {
    x: width - marginX - 60,
    y: y,
    size: 9,
    font: helveticaBold,
    color: darkTeal,
  });
  y -= 11;
  page.drawText('LJ University  *  Ahmedabad, Gujarat, India', {
    x: marginX,
    y: y,
    size: 8.5,
    font: helveticaOblique,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Core Coursework: Artificial Intelligence, Machine Learning, Data Structures & Algorithms, DBMS, Operating Systems, Networks.', {
    x: marginX,
    y: y,
    size: 8,
    font: helvetica,
    color: textMuted,
  });
  y -= 16;

  // TECHNICAL PROFICIENCIES
  drawSectionHeader('Technical Proficiencies');
  const skills = [
    { label: 'AI & Machine Learning:', text: 'Conversational Agents, LLM Orchestration, RAG, PyTorch, Scikit-Learn, Prompt Engineering, EDA' },
    { label: 'Python & Backend:', text: 'Python 3 (AsyncIO, Multiprocessing), FastAPI, Pandas, NumPy, Data ETL, JSON Schema, REST APIs' },
    { label: 'Web & Tools:', text: 'TypeScript, React, Vite, Tailwind CSS, TanStack Router, Git/GitHub, Linux/Bash Shell' }
  ];
  for (const s of skills) {
    page.drawText(s.label, { x: marginX, y, size: 8.5, font: helveticaBold, color: textDark });
    page.drawText(s.text, { x: marginX + 120, y, size: 8.5, font: helvetica, color: textDark });
    y -= 11.5;
  }
  y -= 8;

  // CERTIFICATIONS & CREDENTIALS
  drawSectionHeader('Verified Certifications');
  const certs = [
    { org: 'IBM:', name: 'Applied Machine Learning & Exploratory Data Analysis (EDA) Specialization' },
    { org: 'Great Learning:', name: 'Data Science Foundations' }
  ];
  for (const c of certs) {
    page.drawText(c.org, { x: marginX, y, size: 8.5, font: helveticaBold, color: accentAmber });
    page.drawText(c.name, { x: marginX + 80, y, size: 8.5, font: helvetica, color: textDark });
    y -= 11;
  }

  // Footer note
  page.drawLine({
    start: { x: marginX, y: 35 },
    end: { x: width - marginX, y: 35 },
    thickness: 0.5,
    color: lineGrey,
  });
  page.drawText('Vandit Shastri  *  Portfolio: technically1dit.github.io/portfolio  *  vanditshastri@gmail.com', {
    x: marginX,
    y: 24,
    size: 7.5,
    font: helvetica,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, 'vandit-shastri-resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath);
}

generateResumePdf().catch(console.error);
