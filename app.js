const questions = [
  { prompt: "Dalam analogi “Koki di Dapur yang Canggih”, komponen komputer manakah yang diibaratkan sebagai kulkas atau lemari bahan makanan, tempat menyimpan semua bahan secara permanen?", points: 2, options: ["CPU (Koki)", "RAM (Meja Kerja)", "Hard Drive/SSD (Storage)", "Monitor (Penyajian Hidangan)", "Bus (Lorong Penghubung)"], answer: 2, explanation: "Hard drive atau SSD adalah penyimpanan sekunder yang menyimpan data secara permanen, seperti gudang bahan makanan." },
  { prompt: "Menurut Arsitektur Von Neumann, otak komputer yang bertugas memproses semua instruksi adalah ...", points: 2, options: ["Memory Unit", "Input Device", "Output Device", "Buses", "CPU (Central Processing Unit)"], answer: 4, explanation: "CPU menjalankan instruksi dan mengendalikan pemrosesan data di dalam komputer." },
  { prompt: "Perangkat lunak yang mengelola perangkat keras, menyediakan antarmuka pengguna, dan memastikan komponen bekerja efisien adalah ...", points: 2, options: ["Aplikasi (seperti game atau browser)", "Antarmuka CLI", "Sistem Operasi (OS)", "Cloud Computing", "Jaringan Internet"], answer: 2, explanation: "Sistem operasi menjadi pengelola sumber daya perangkat keras sekaligus menyediakan layanan dan antarmuka bagi aplikasi serta pengguna." },
  { prompt: "Dalam proses kerja CPU, Waktu Eksekusi (Waktu-E) terjadi pada tahapan ...", points: 2, options: ["Fetch dan Decode", "Fetch dan Store", "Decode dan Execute", "Execute dan Store", "Execute dan Fetch"], answer: 3, explanation: "Siklus mesin membagi proses menjadi Waktu-I (Fetch dan Decode) dan Waktu-E (Execute dan Store)." },
  { prompt: "Manakah dari pernyataan berikut yang paling tepat mendefinisikan fungsi dari Register pada CPU?", points: 2, options: ["Menyimpan data secara permanen saat komputer mati.", "Menyediakan antarmuka grafis yang memudahkan pengguna berinteraksi dengan seluruh perangkat komputer.", "Ruang kerja sementara untuk menyimpan data atau instruksi yang sedang diproses ALU.", "Lorong penghubung antar komponen utama pada komputer.", "Melakukan perhitungan aritmatika dan logika yang kompleks."], answer: 2, explanation: "Register adalah ruang kerja sementara di dalam CPU untuk data atau instruksi yang sedang diproses ALU." },
  { prompt: "Ketika pengguna mengetik teks melalui keyboard, tindakan ini termasuk tahapan interaksi manusia dan komputer yang disebut ...", points: 2, options: ["Output", "Input", "Proses", "Kolaborasi", "Execution"], answer: 1, explanation: "Keyboard mengirimkan data dari pengguna ke komputer, sehingga termasuk perangkat dan tahapan input." },
  { prompt: "Command Line User Interface (CLI) dicirikan sebagai antarmuka yang ...", points: 2, options: ["Sangat ramah pengguna, hanya menampilkan gambar, ikon, dan jendela yang bisa diklik dengan mudah.", "Lambat dan membutuhkan banyak klik mouse.", "Cepat, powerful, tetapi interaksi utamanya via teks dan membutuhkan hafalan perintah.", "Hanya digunakan untuk perintah suara (Audio/Video).", "Hanya digunakan pada Super Computer seperti Sierra/ATS-2."], answer: 2, explanation: "CLI menerima perintah berbasis teks secara langsung; pengguna perlu mengetahui atau menghafal perintahnya." },
  { prompt: "Dalam Algoritma Round Robin, istilah Quantum Time merujuk pada ...", points: 2, options: ["Waktu total yang dibutuhkan untuk menyelesaikan semua proses.", "Jatah waktu maksimal per giliran yang diberikan OS kepada setiap proses.", "Waktu yang dibutuhkan sebuah proses sejak pertama kali dimulai hingga benar-benar selesai dikerjakan.", "Waktu yang dibutuhkan CPU untuk Fetching instruksi.", "Waktu tunggu proses sebelum kembali ke ujung antrean."], answer: 1, explanation: "Quantum Time adalah batas waktu maksimal CPU untuk satu giliran proses sebelum OS menjadwalkan proses berikutnya." },
  { prompt: "Arsitektur komputer yang menyimpan instruksi program dalam memori bersama data disebut konsep ...", points: 2, options: ["Multitasking", "Round Robin", "Bus Architecture", "Instruction Set", "Stored-Program"], answer: 4, explanation: "Konsep stored-program menempatkan instruksi program dan data di dalam memori yang dapat diakses CPU." },
  { prompt: "Perangkat keras yang termasuk kategori Perangkat Output (pelayan yang menyajikan hidangan) adalah ...", points: 2, options: ["Mouse dan keyboard", "Scanner dan microphone", "Monitor dan printer", "CPU dan RAM", "Webcam dan touchpad"], answer: 2, explanation: "Monitor menampilkan keluaran secara visual dan printer menghasilkan keluaran cetak." },
  { prompt: "Apa peran Unit Kontrol (CU) dalam kaitannya dengan Instruction Set?", points: 3, options: ["CU bertugas membuat Instruction Set baru agar CPU dapat melakukan multitasking.", "CU hanya berfungsi saat terjadi error pada Instruction Set.", "CU dirancang untuk menerjemahkan (Decode) semua instruksi dalam Instruction Set merek CPU tersebut.", "CU memastikan ALU melakukan perhitungan yang benar, terlepas dari Instruction Set apa pun yang digunakan CPU, sehingga hasilnya selalu akurat.", "CU adalah memori yang menyimpan semua Instruction Set komputer."], answer: 2, explanation: "CU menerjemahkan instruksi dalam Instruction Set yang didukung CPU agar instruksi dapat dijalankan." },
  { prompt: "Dalam analogi dapur, apa risiko utama jika RAM (Meja Kerja) terlalu kecil?", points: 3, options: ["Koki (CPU) akan kelelahan karena harus memasak lebih cepat.", "Gudang Bahan (Storage) akan penuh dan tidak bisa menyimpan data.", "Koki (CPU) harus bolak-balik ke Gudang Bahan (Storage) lebih sering, sehingga total waktu memasak melambat.", "Pelayan (I/O) tidak dapat menerima pesanan dari pelanggan karena meja kerja tidak lagi muat untuk menampung semua pesanan yang masuk.", "Terjadi error pada Instruction Set CPU."], answer: 2, explanation: "RAM yang kecil membuat CPU lebih sering mengambil data dari storage yang lebih lambat, sehingga kerja komputer melambat." },
  { prompt: "Tujuan utama Algoritma Round Robin adalah ...", points: 3, options: ["Mengutamakan proses yang memiliki Burst Time terpanjang agar cepat selesai.", "Memberikan keadilan (fairness) pada semua proses dengan membagi jatah waktu yang sama rata.", "Memastikan hanya satu proses yang berjalan di CPU pada satu waktu.", "Mengurangi total waktu eksekusi dengan menghilangkan Quantum Time pada setiap proses yang sedang berjalan di dalam antrean CPU.", "Menghitung total Arrival Time setiap proses dengan akurat."], answer: 1, explanation: "Round Robin memberi semua proses jatah waktu yang sama secara bergiliran agar tidak ada proses yang diabaikan." },
  { prompt: "Dalam Siklus Mesin, mengapa Waktu Instruksi (Waktu-I) harus terjadi sebelum Waktu Eksekusi (Waktu-E)?", points: 3, options: ["Agar CPU sempat mendingin sebelum melakukan perhitungan berat.", "Karena CPU harus Fetch dan Decode instruksi dulu sebelum tahu operasi (Execute) yang harus dilakukan.", "Karena Secondary Storage harus memverifikasi data lebih dulu sebelum diproses di Primary Storage dan dikirim ke CPU.", "Karena Instruction Set hanya dapat diproses oleh ALU.", "Agar Input Device dapat mencatat Burst Time secara akurat dan menyerahkannya kepada Output Device untuk ditampilkan."], answer: 1, explanation: "CPU harus mengambil (Fetch) dan menerjemahkan (Decode) instruksi sebelum mengetahui operasi yang perlu dieksekusi." },
  { prompt: "Seorang programmer menggunakan Alamat Simbolis untuk menyimpan data tarif di kotak ke-3. Apa peran Control Unit (CU)?", points: 3, options: ["Melakukan perhitungan tarif dengan data lain.", "Menerjemahkan Alamat Simbolis menjadi lokasi memori sesungguhnya dan mengirim sinyal kontrol untuk menaruh data tarif di sana.", "Menyimpan hasil perhitungan di kotak ke-8.", "Mengganti isi kotak ke-3 dengan data baru secara acak.", "Melakukan Multitasking dengan data penggajian lain sehingga beberapa program dapat berjalan bersamaan di dalam memori utama komputer."], answer: 1, explanation: "CU menerjemahkan alamat simbolis ke lokasi memori sesungguhnya dan mengirim sinyal kontrol untuk menyimpan data." },
  { prompt: "Contoh kolaborasi sistem komputer yang paling bergantung pada konsep Internet of Things (IoT) adalah ...", points: 3, options: ["Dua orang yang mengedit dokumen yang sama di Google Docs.", "Super Computer Sierra yang menjalankan simulasi cuaca.", "Sekumpulan sensor suhu yang mengirim data kelembapan di gudang ke server pusat untuk dianalisis.", "Seorang pengguna yang menggunakan CLI untuk menjalankan program.", "Seorang pengguna yang menggunakan mouse untuk mengklik ikon di GUI hingga program terbuka sepenuhnya di layar."], answer: 2, explanation: "IoT menghubungkan perangkat dan sensor melalui internet agar dapat bertukar data, seperti sensor suhu yang mengirim data ke server." },
  { prompt: "Jika sebuah Microcontroller dirancang hanya untuk menyalakan lampu (Output) berdasarkan tombol yang ditekan (Input), komponen Von Neumann mana yang paling tidak signifikan?", points: 3, options: ["Buses, karena interaksi data sangat minimal dan hanya antar komponen dasar.", "CPU, karena tanpa Koki tidak ada yang memproses semua instruksi di dalam seluruh sistem.", "INPUT DEVICE, karena tombol ditekan.", "OUTPUT DEVICE, karena lampu dinyalakan.", "MEMORY UNIT, karena perlu menyimpan instruksi minimal untuk menjalankan program kecil tersebut secara terus-menerus."], answer: 0, explanation: "Bus adalah komponen yang paling tidak signifikan pada contoh sederhana ini karena interaksi data antar komponen sangat minimal." },
  { prompt: "Jika OS memakai First Come, First Served (bukan Round Robin), apa dampaknya pada pesanan game dengan Burst Time terlama?", points: 3, options: ["Pesanan Game akan selesai paling cepat karena diutamakan.", "Pesanan Game akan mendapat Quantum Time terbesar.", "Pesanan Game membuat musik dan browsing tertunda sampai Game selesai, sehingga sistem terasa hang (tidak fair).", "Sistem akan otomatis membagi waktu secara adil kepada semua pesanan tanpa memerlukan Algoritma Round Robin sama sekali di dalam CPU.", "CPU akan menggunakan Secondary Storage untuk mempercepat Game."], answer: 2, explanation: "Pada FCFS, proses yang datang lebih dulu berjalan sampai selesai. Game dengan Burst Time panjang dapat membuat musik dan browsing menunggu." },
  { prompt: "ALU menerima instruksi untuk membandingkan apakah dua angka (X dan Y) sama. Operasi apa yang paling mungkin dijalankan?", points: 3, options: ["Penjumlahan (X+Y) lalu memeriksa apakah hasilnya sama dengan salah satu angka.", "Perkalian (X×Y).", "Pengurangan (X-Y) lalu memeriksa apakah hasilnya nol (0).", "Mencari akar kuadrat dari X dan Y.", "Memeriksa Quantum Time dari kedua angka."], answer: 2, explanation: "Jika X dikurangi Y menghasilkan nol, kedua angka sama." },
  { prompt: "Saat CPU mengakses data yang baru digunakan dan tersimpan di RAM, tahapan Siklus Instruksi yang diuntungkan karena data siap di meja kerja adalah ...", points: 3, options: ["Decoding dan Storing", "Input dan Output", "Fetching dan Executing", "Booting dan Shutdown", "Clock Speed dan Multitasking"], answer: 2, explanation: "Data yang tersedia di RAM dapat diambil CPU lebih cepat untuk menjalankan instruksi yang memerlukannya, mendukung tahap fetch dan execute." }
];

const essays = [
  "Sistem dan Interaksi: Jelaskan perbedaan utama GUI (Graphical User Interface) dan CLI (Command Line User Interface). Berikan satu keunggulan spesifik dari masing-masing antarmuka dalam konteks interaksi manusia dan komputer.",
  "Analisis Siklus Mesin: Jelaskan secara rinci empat tahapan proses kerja CPU (Fetch, Decode, Execute, Store).",
  "Analisis Cara Kerja Komputer: Diberikan program 3 × 10 + 9. Buatlah tabel sederhana Mr. Algo untuk menyelesaikan operasi program tersebut.",
  "Perbandingan Penyimpanan: RAM (Primary Storage) dan Hard Drive/SSD (Secondary Storage) memegang peran vital dalam arsitektur Von Neumann. Jelaskan dua perbedaan paling krusial berdasarkan sifat penyimpanan dan peran masing-masing dalam mendukung kerja CPU.",
  "Sintesis Konsep Multitasking: Jelaskan mengapa multitasking merupakan masalah utama yang harus dipecahkan OS. Hubungkan bagaimana Round Robin membantu menciptakan ilusi bahwa satu CPU dapat mengerjakan musik, browsing, dan game secara bersamaan."
];

const screens = [...document.querySelectorAll(".screen")];
const themeToggle = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const student = { name: "", className: "" };
let currentQuestionIndex = 0;
let remainingSeconds = 3600;
let timerInterval;
let submissionConfirmed = false;
let examGuardActive = false;
let fullscreenWasEntered = false;
let guardStrikeCount = 0;
let lastViolationAt = 0;
let pendingViolationMessage = "";
const violationStorageKey = "sumatif-bab4-guard-strikes";
const lockoutStorageKey = "sumatif-bab4-guard-locked";
const teacherPasswordHash = "c7f169bb80d5336e90cbc819e6db62508a55d23ebb80a5c0f75b9f2db8e7b135";
const guardNotice = document.querySelector("#guard-notice");
const violationDialog = document.querySelector("#violation-dialog");
const teacherUnlockDialog = document.querySelector("#teacher-unlock-dialog");

function readStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function isExamLocked() {
  return readStoredValue(lockoutStorageKey) === "true" || guardStrikeCount >= 3;
}

function updateGuardNotice(message = "Pengawasan aktif. Jangan berpindah tab atau keluar dari layar penuh.") {
  guardNotice.hidden = !examGuardActive;
  document.querySelector("#guard-notice-text").textContent = message;
  document.querySelector("#guard-count").textContent = `${guardStrikeCount} / 3 pelanggaran`;
}

function showLockoutScreen() {
  examGuardActive = false;
  submissionConfirmed = true;
  window.clearInterval(timerInterval);
  guardNotice.hidden = true;
  writeStoredValue(lockoutStorageKey, "true");
  if (violationDialog.open) violationDialog.close("locked");
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  showScreen("lockout-screen");
}

function showViolationDialog() {
  if (!examGuardActive || violationDialog.open || document.visibilityState === "hidden") return;
  document.querySelector("#violation-count").textContent = `PERINGATAN ${guardStrikeCount} DARI 3`;
  document.querySelector("#violation-message").textContent = pendingViolationMessage;
  document.querySelector("#fullscreen-error").hidden = true;
  violationDialog.showModal();
}

function registerExamViolation(message, deferUntilVisible = false) {
  if (!examGuardActive || isExamLocked()) return;
  const now = Date.now();
  if (now - lastViolationAt < 1500) return;

  lastViolationAt = now;
  guardStrikeCount += 1;
  pendingViolationMessage = `${message} (${guardStrikeCount} dari 3 pelanggaran).`;
  writeStoredValue(violationStorageKey, String(guardStrikeCount));
  updateGuardNotice(`Pelanggaran ${guardStrikeCount} dari 3 tercatat.`);

  if (guardStrikeCount >= 3) {
    showLockoutScreen();
    return;
  }

  if (!deferUntilVisible && document.visibilityState !== "hidden") {
    showViolationDialog();
  } else if (document.visibilityState !== "hidden") {
    window.setTimeout(showViolationDialog, 0);
  }
}

function startExamGuard() {
  if (isExamLocked()) {
    showLockoutScreen();
    return;
  }

  const storedStrikes = Number(readStoredValue(violationStorageKey));
  guardStrikeCount = Number.isFinite(storedStrikes) ? Math.min(storedStrikes, 2) : 0;
  examGuardActive = true;
  fullscreenWasEntered = Boolean(document.fullscreenElement);
  updateGuardNotice();

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen({ navigationUI: "hide" })
      .then(() => { fullscreenWasEntered = true; })
      .catch(() => updateGuardNotice("Mode layar penuh tidak tersedia. Perpindahan tab tetap diawasi."));
  } else {
    updateGuardNotice("Mode layar penuh tidak tersedia. Perpindahan tab tetap diawasi.");
  }
}

function stopExamGuard() {
  examGuardActive = false;
  guardNotice.hidden = true;
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

async function hashTeacherPassword(password) {
  const bytes = Uint8Array.from(password, character => character.charCodeAt(0));
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

function setTheme(theme, persist = false) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-checked", String(isDark));
  themeToggle.setAttribute("aria-label", `${isDark ? "Matikan" : "Aktifkan"} mode gelap`);
  themeToggle.title = `${isDark ? "Matikan" : "Aktifkan"} mode gelap`;
  themeColorMeta.content = isDark ? "#171c17" : "#f4f5ef";

  if (persist) {
    try {
      localStorage.setItem("ruang-ujian-theme", isDark ? "dark" : "light");
    } catch {}
  }
}

setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
});

function showScreen(id) {
  for (const screen of screens) {
    const active = screen.id === id;
    screen.classList.toggle("active", active);
    screen.hidden = !active;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestions() {
  const mcContainer = document.querySelector("#mc-questions");
  mcContainer.innerHTML = questions.map((question, index) => `
    <article class="question-card" id="question-${index + 1}" data-question-index="${index}">
      <div class="question-prompt"><span class="question-number">${String(index + 1).padStart(2, "0")}</span><p>${question.prompt}</p><span class="points">${question.points} poin</span></div>
      <div class="options">${question.options.map((option, optionIndex) => `
        <label class="option"><input type="radio" name="q${index}" value="${optionIndex}"><span>${option}</span></label>
      `).join("")}</div>
      <button class="uncertain-toggle" type="button" aria-pressed="false" aria-label="Tandai soal ${index + 1} sebagai ragu-ragu">Tandai ragu-ragu</button>
    </article>
  `).join("");

  document.querySelector("#essay-questions").innerHTML = essays.map((prompt, index) => `
    <article class="essay-card" id="question-${index + questions.length + 1}" data-question-index="${index + questions.length}"><div class="essay-question"><span class="question-number">${index + questions.length + 1}</span><p>${prompt} <span class="required-mark">*</span></p></div><div class="essay-confirmation"><label class="essay-check" for="essay-${index}"><input id="essay-${index}" name="essay${index}" type="checkbox" aria-describedby="essay-state-${index}" aria-required="true"><span>Saya sudah menuliskan jawaban ini di kertas</span></label><p class="essay-state" id="essay-state-${index}" role="status" aria-live="polite">Belum dikonfirmasi</p></div><button class="uncertain-toggle" type="button" aria-pressed="false" aria-label="Tandai soal ${index + questions.length + 1} sebagai ragu-ragu">Tandai ragu-ragu</button></article>
  `).join("");

  renderQuestionNavigator();
  updateQuestionNavigator();
  updateQuestionPage();
}

function updateQuestionPage(scrollToQuestion = false) {
  const lastQuestionIndex = questions.length + essays.length - 1;
  const showingEssay = currentQuestionIndex >= questions.length;
  const questionCard = document.querySelector(`#question-${currentQuestionIndex + 1}`);

  document.querySelector("#mc-section").hidden = showingEssay;
  document.querySelector("#essay-section").hidden = !showingEssay;
  document.querySelectorAll(".question-card, .essay-card").forEach(card => {
    card.hidden = Number(card.dataset.questionIndex) !== currentQuestionIndex;
  });

  document.querySelector("#question-position").textContent = `Soal ${String(currentQuestionIndex + 1).padStart(2, "0")} dari ${lastQuestionIndex + 1}`;
  document.querySelector("#previous-question").disabled = currentQuestionIndex === 0;
  document.querySelector("#next-question").hidden = currentQuestionIndex === lastQuestionIndex;
  document.querySelector("#final-submit-row").hidden = currentQuestionIndex !== lastQuestionIndex;
  document.querySelectorAll(".question-map-item").forEach(button => {
    if (Number(button.dataset.questionIndex) === currentQuestionIndex) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (scrollToQuestion && questionCard) {
    questionCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function goToQuestion(index, scrollToQuestion = true) {
  const lastQuestionIndex = questions.length + essays.length - 1;
  currentQuestionIndex = Math.max(0, Math.min(index, lastQuestionIndex));
  updateQuestionPage(scrollToQuestion);
}

function renderQuestionNavigator() {
  const groups = [
    { title: "Pilihan ganda", start: 0, end: questions.length },
    { title: "Esai", start: questions.length, end: questions.length + essays.length }
  ];
  document.querySelector("#question-map").innerHTML = groups.map(group => `
    <div class="question-map-group"><h3>${group.title}</h3><div class="question-map-grid">${Array.from({ length: group.end - group.start }, (_, offset) => {
      const index = group.start + offset;
      const number = index + 1;
      return `<button class="question-map-item" type="button" data-question-index="${index}" data-status="unanswered" aria-label="Soal ${number}: belum dijawab" title="Soal ${number}: belum dijawab">${number}</button>`;
    }).join("")}</div></div>
  `).join("");
}

function updateQuestionNavigator() {
  let answeredCount = 0;
  document.querySelectorAll(".question-card, .essay-card").forEach((card, index) => {
    const doubtful = card.dataset.doubtful === "true";
    const answered = index < questions.length
      ? Boolean(document.querySelector(`input[name="q${index}"]:checked`))
      : Boolean(document.querySelector(`#essay-${index - questions.length}:checked`));
    const status = doubtful ? "doubtful" : answered ? "answered" : "unanswered";
    if (answered) answeredCount += 1;
    card.dataset.status = status;

    const mapButton = document.querySelector(`.question-map-item[data-question-index="${index}"]`);
    if (mapButton) {
      const statusLabel = status === "doubtful" ? "ragu-ragu" : status === "answered" ? "sudah dijawab" : "belum dijawab";
      mapButton.dataset.status = status;
      mapButton.setAttribute("aria-label", `Soal ${index + 1}: ${statusLabel}`);
      mapButton.title = `Soal ${index + 1}: ${statusLabel}`;
    }
  });
  document.querySelector("#navigator-count").textContent = `${answeredCount} / ${questions.length + essays.length} terjawab`;
}

function startTimer() {
  updateTimer();
  timerInterval = window.setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) {
      window.clearInterval(timerInterval);
      submitExam(true);
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const timer = document.querySelector("#timer");
  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timer.parentElement.classList.toggle("warning", remainingSeconds <= 300);
}

function updateProgress() {
  const answered = questions.filter((_, index) => document.querySelector(`input[name="q${index}"]:checked`)).length;
  document.querySelector("#progress-label").textContent = `${answered} / ${questions.length} dijawab`;
  document.querySelector("#progress-bar").style.width = `${answered / questions.length * 100}%`;
}

function updateEssayStatus(card, showError = false) {
  const checkbox = card.querySelector('input[type="checkbox"]');
  const confirmed = checkbox.checked;
  card.classList.toggle("confirmed", confirmed);
  card.classList.toggle("invalid", showError && !confirmed);
  card.querySelector(".essay-state").textContent = confirmed
    ? "Telah dikonfirmasi"
    : showError
      ? "Centang setelah selesai menulis di kertas"
      : "Belum dikonfirmasi";
  return confirmed;
}

function validateEssays() {
  let firstInvalid = null;
  document.querySelectorAll(".essay-card").forEach(card => {
    if (!updateEssayStatus(card, true) && !firstInvalid) {
      firstInvalid = {
        index: Number(card.dataset.questionIndex),
        checkbox: card.querySelector('input[type="checkbox"]')
      };
    }
  });
  if (firstInvalid) {
    goToQuestion(firstInvalid.index);
    firstInvalid.checkbox.focus();
  }
  return !firstInvalid;
}

function calculateScore() {
  return questions.reduce((total, question, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    return total + (selected && Number(selected.value) === question.answer ? question.points : 0);
  }, 0);
}

function renderResults() {
  const score = calculateScore();
  const correct = questions.filter((question, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    return selected && Number(selected.value) === question.answer;
  }).length;
  document.querySelector("#result-student").textContent = student.name;
  document.querySelector("#result-class").textContent = student.className;
  document.querySelector("#score").textContent = score;
  document.querySelector("#correct-count").textContent = `${correct} benar`;
  document.querySelector("#wrong-count").textContent = `${questions.length - correct} salah atau kosong`;
  document.querySelector("#score-caption").textContent = score >= 40 ? "Sangat baik" : score >= 30 ? "Terus pertajam pemahaman" : "Tetap semangat belajar";
  document.querySelector("#answer-review").innerHTML = questions.map((question, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const isCorrect = selected && Number(selected.value) === question.answer;
    const selectedText = selected ? question.options[Number(selected.value)] : "Tidak dijawab";
    return `<article class="review-item ${isCorrect ? "correct" : "incorrect"}"><span class="review-status">${isCorrect ? "✓" : "×"}</span><div class="review-content"><h3>${String(index + 1).padStart(2, "0")}. ${question.prompt}</h3><p class="review-answer">Jawabanmu: <strong class="${isCorrect ? "" : "wrong-text"}">${selectedText}</strong>${isCorrect ? "" : ` · Kunci: <strong>${question.options[question.answer]}</strong>`}</p><p class="review-explanation"><strong>Pembahasan</strong> · ${question.explanation}</p></div></article>`;
  }).join("");
}

function submitExam(fromTimer = false) {
  if (submissionConfirmed) return;
  if (!fromTimer && !validateEssays()) return;
  window.clearInterval(timerInterval);
  submissionConfirmed = true;
  stopExamGuard();
  renderResults();
  showScreen("result-screen");
}

document.querySelector("#login-form").addEventListener("submit", event => {
  event.preventDefault();
  if (isExamLocked()) {
    showLockoutScreen();
    return;
  }
  const formData = new FormData(event.currentTarget);
  student.name = String(formData.get("name")).trim();
  student.className = String(formData.get("class")).trim();
  document.querySelector("#rules-student").textContent = `${student.name} · ${student.className}`;
  startExamGuard();
  showScreen("rules-screen");
});

document.querySelector("#start-exam").addEventListener("click", () => {
  document.querySelector("#exam-student").textContent = student.name;
  document.querySelector("#exam-class").textContent = student.className;
  showScreen("exam-screen");
  startTimer();
});

document.querySelector("#exam-form").addEventListener("change", event => {
  if (event.target.matches('input[type="radio"]')) updateProgress();
  if (event.target.matches('.essay-card input[type="checkbox"]')) {
    updateEssayStatus(event.target.closest(".essay-card"));
  }
  updateQuestionNavigator();
});

document.querySelector("#exam-form").addEventListener("click", event => {
  const button = event.target.closest(".uncertain-toggle");
  if (!button) return;

  const card = button.closest(".question-card, .essay-card");
  const doubtful = button.getAttribute("aria-pressed") !== "true";
  card.dataset.doubtful = String(doubtful);
  button.setAttribute("aria-pressed", String(doubtful));
  button.textContent = doubtful ? "Hapus tanda ragu" : "Tandai ragu-ragu";
  button.setAttribute("aria-label", `${doubtful ? "Hapus tanda ragu pada" : "Tandai"} soal ${Number(card.dataset.questionIndex) + 1}${doubtful ? "" : " sebagai ragu-ragu"}`);
  updateQuestionNavigator();
});

document.querySelector("#question-nav-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const expanded = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(expanded));
  document.querySelector("#question-nav-panel").hidden = !expanded;
});

document.querySelector("#question-map").addEventListener("click", event => {
  const button = event.target.closest(".question-map-item");
  if (!button) return;
  goToQuestion(Number(button.dataset.questionIndex));
});

document.querySelector("#previous-question").addEventListener("click", () => {
  goToQuestion(currentQuestionIndex - 1);
});

document.querySelector("#next-question").addEventListener("click", () => {
  goToQuestion(currentQuestionIndex + 1);
});

document.querySelector("#exam-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!validateEssays()) return;
  const unanswered = questions.length - questions.filter((_, index) => document.querySelector(`input[name="q${index}"]:checked`)).length;
  document.querySelector("#confirm-message").textContent = unanswered ? `Masih ada ${unanswered} soal pilihan ganda yang belum dijawab. Soal kosong bernilai 0. Tetap kumpulkan?` : "Semua pilihan ganda sudah dijawab dan setiap esai sudah dikonfirmasi.";
  document.querySelector("#confirm-dialog").showModal();
});

document.querySelector("#confirm-dialog").addEventListener("close", event => {
  if (event.target.returnValue === "submit") submitExam();
});

document.querySelector("#print-result").addEventListener("click", () => window.print());
document.querySelector("#back-to-login").addEventListener("click", () => window.location.reload());

document.querySelector("#open-teacher-unlock").addEventListener("click", () => {
  const passwordInput = document.querySelector("#teacher-password");
  passwordInput.value = "";
  passwordInput.removeAttribute("aria-invalid");
  document.querySelector("#teacher-unlock-error").hidden = true;
  teacherUnlockDialog.showModal();
  passwordInput.focus();
});

document.querySelector("#cancel-teacher-unlock").addEventListener("click", () => {
  teacherUnlockDialog.close();
});

document.querySelector("#teacher-unlock-form").addEventListener("submit", async event => {
  event.preventDefault();
  const passwordInput = document.querySelector("#teacher-password");
  const submitButton = event.currentTarget.querySelector('button[type="submit"]');
  const errorMessage = document.querySelector("#teacher-unlock-error");
  submitButton.disabled = true;

  try {
    const passwordHash = await hashTeacherPassword(passwordInput.value);
    if (passwordHash !== teacherPasswordHash) {
      passwordInput.value = "";
      passwordInput.setAttribute("aria-invalid", "true");
      errorMessage.hidden = false;
      passwordInput.focus();
      return;
    }

    try {
      localStorage.removeItem(lockoutStorageKey);
      localStorage.removeItem(violationStorageKey);
    } catch {}
    teacherUnlockDialog.close("unlocked");
    window.location.reload();
  } catch {
    errorMessage.textContent = "Tidak dapat memeriksa kata sandi di browser ini. Hubungi pengelola ujian.";
    errorMessage.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

document.addEventListener("fullscreenchange", () => {
  if (!examGuardActive) return;
  if (document.fullscreenElement) {
    fullscreenWasEntered = true;
  } else if (fullscreenWasEntered) {
    registerExamViolation("Keluar dari layar penuh");
  }
});

document.addEventListener("visibilitychange", () => {
  if (examGuardActive && document.visibilityState === "hidden") {
    registerExamViolation("Berpindah tab atau meninggalkan jendela ujian", true);
  } else if (examGuardActive && pendingViolationMessage) {
    showViolationDialog();
  }
});

window.addEventListener("keydown", event => {
  if (!examGuardActive) return;
  const key = event.key.toLowerCase();
  const controlKey = event.ctrlKey || event.metaKey;
  const navigationShortcut = controlKey && ["l", "r", "t", "w", "n"].includes(key);
  const developerShortcut = controlKey && event.shiftKey && ["i", "j", "c"].includes(key);
  const exitShortcut = event.key === "F5" || event.key === "F12" || (event.altKey && ["arrowleft", "arrowright", "f4"].includes(key));
  if (navigationShortcut || developerShortcut || exitShortcut) {
    event.preventDefault();
    registerExamViolation("Mencoba menggunakan pintasan untuk meninggalkan ujian");
  }
}, true);

window.addEventListener("beforeunload", event => {
  if (!examGuardActive) return;
  event.preventDefault();
  event.returnValue = "";
  registerExamViolation("Mencoba menutup atau memuat ulang halaman ujian", true);
});

violationDialog.addEventListener("cancel", event => event.preventDefault());
document.querySelector("#resume-exam").addEventListener("click", async () => {
  const fullscreenError = document.querySelector("#fullscreen-error");
  if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
    try {
      await document.documentElement.requestFullscreen({ navigationUI: "hide" });
      fullscreenWasEntered = true;
    } catch {
      fullscreenError.hidden = false;
      return;
    }
  }
  pendingViolationMessage = "";
  violationDialog.close("resume");
});

renderQuestions();
if (isExamLocked()) showLockoutScreen();