const educationData = {
    "class6": {
        name: "ষষ্ঠ শ্রেণি", icon: "📚", type: "individual",
        subjects: {
            "science": { name: "বিজ্ঞান", icon: "🔬", videos: [
                { title: "আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 01", videoId: "qX2j73eeJUc", duration: "27:46" },
                { title: "💎 আলোর প্রতিফলন🔮 আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 02", videoId: "jwA1Gpve3eE", duration: "15:03" },
                { title: "আলোর প্রতিসরণ | আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 03", videoId: "sDnBbMbcZ1c", duration: "11:33" }
            ]},
            "math": { name: "গণিত", icon: "🔢", videos: [] }
        }
    },
    "class7": {
        name: "সপ্তম শ্রেণি", icon: "📗", type: "individual",
        subjects: { "science": { name: "বিজ্ঞান", icon: "🔬", videos: [] }, "math": { name: "গণিত", icon: "🔢", videos: [] } }
    },
    "class8": {
        name: "অষ্টম শ্রেণি", icon: "📘", type: "individual",
        subjects: { "science": { name: "বিজ্ঞান", icon: "🔬", videos: [] }, "math": { name: "গণিত", icon: "🔢", videos: [] } }
    },
    "ssc": {
        name: "SSC (নবম-দশম)", icon: "🎓", type: "combined-direct",
        classes: {
            "class9": { name: "নবম শ্রেণি", subjects: {
                "physics": { name: "পদার্থবিজ্ঞান", videos: [
                    { title: "🔹 ৭৬ cm পারদ = ১ atm কেন? | Atmospheric Pressure", videoId: "KtaCP4xhFrA", duration: "10:15" },
                    { title: "ফিজিক্স ৭ অধ্যায়ের Final shot! 😳 | তরঙ্গ ও শব্দ Oneshot", videoId: "GbkZK74Hq1M", duration: "45:20" },
                    { title: "কাজ, ক্ষমতা ও শক্তি Final shot! 😳 | Oneshot", videoId: "XrkGCqvZhcc", duration: "50:10" },
                    { title: "স্থির বিদ্যুৎ Final shot! 😳 | Chapter 10 Oneshot", videoId: "ba2QQRdjl4s", duration: "1:30:10" },
                    { title: "💭 বিভব পার্থক্য বুঝতে কষ্ট হয়? মাত্র ৫ মিনিটে 🕐", videoId: "km6IZuxZXyQ", duration: "05:00" }
                ]},
                "chemistry": { name: "রসায়ন", videos: [
                    { title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", videoId: "SGTDSkbarSk", duration: "14:34" },
                    { title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা সহজ ব্যাখ্যা", videoId: "Q8nRvIInk-4", duration: "12:20" }
                ]},
                "higher_math": { name: "উচ্চতর গণিত", videos: [
                    { title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", videoId: "P07K4MigUXk", duration: "18:30" },
                    { title: "📘 SSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", videoId: "bgMRUmhwRyI", duration: "22:15" },
                    { title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ | সহজ ব্যাখ্যা", videoId: "aafAMZiQGkQ", duration: "15:45" }
                ]},
                "general_math": { name: "সাধারণ গণিত", videos: [] },
                "biology": { name: "জীববিজ্ঞান", videos: [] }
            }},
            "class10": { name: "দশম শ্রেণি", subjects: {
                "physics": { name: "পদার্থবিজ্ঞান", videos: [] }, "chemistry": { name: "রসায়ন", videos: [] },
                "higher_math": { name: "উচ্চতর গণিত", videos: [] }, "general_math": { name: "সাধারণ গণিত", videos: [] },
                "biology": { name: "জীববিজ্ঞান", videos: [] }
            }}
        }
    },
    "hsc": {
        name: "HSC (একাদশ-দ্বাদশ)", icon: "📓", type: "combined-direct",
        classes: {
            "class11": { name: "একাদশ শ্রেণি", subjects: {
                "physics": { name: "পদার্থবিজ্ঞান", videos: [
                    { title: "💭 বিভব পার্থক্য বুঝতে কষ্ট হয়? মাত্র ৫ মিনিটে 🕐", videoId: "km6IZuxZXyQ", duration: "05:00" },
                    { title: "🔹 ৭৬ cm পারদ = ১ atm কেন? | Atmospheric Pressure", videoId: "KtaCP4xhFrA", duration: "10:15" }
                ]},
                "chemistry": { name: "রসায়ন", videos: [
                    { title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", videoId: "SGTDSkbarSk", duration: "14:34" },
                    { title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা সহজ ব্যাখ্যা", videoId: "Q8nRvIInk-4", duration: "12:20" }
                ]},
                "higher_math": { name: "উচ্চতর গণিত", videos: [
                    { title: "Matrix ও Determinant-এর গুণ একবারেই পরিষ্কার", videoId: "RjN7vuQLQAA", duration: "20:10" },
                    { title: "দুইটি সরলরেখার মধ্যবর্তী কোণ নির্ণয় | Easy Explanation", videoId: "m-3a_Gs56SE", duration: "18:45" },
                    { title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", videoId: "P07K4MigUXk", duration: "18:30" },
                    { title: "📘 HSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", videoId: "bgMRUmhwRyI", duration: "22:15" },
                    { title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ | সহজ ব্যাখ্যা", videoId: "aafAMZiQGkQ", duration: "15:45" }
                ]},
                "biology": { name: "জীববিজ্ঞান", videos: [
                    { title: "HSC 2027 Translation | mRNA থেকে Protein কীভাবে তৈরি হয়?", videoId: "wX-LK8ou0W8", duration: "25:30" }
                ]}
            }},
            "class12": { name: "দ্বাদশ শ্রেণি", subjects: {
                "physics": { name: "পদার্থবিজ্ঞান", videos: [] }, "chemistry": { name: "রসায়ন", videos: [] },
                "higher_math": { name: "উচ্চতর গণিত", videos: [] }, "biology": { name: "জীববিজ্ঞান", videos: [] }
            }}
        }
    }
};

let currentLevel = 'classes';
let selectedClass = null;

window.onload = function() { showClasses(); };

function scrollToClasses() { document.getElementById('classes').scrollIntoView({ behavior: 'smooth' }); }

function showClasses() {
    currentLevel = 'classes'; selectedClass = null;
    document.querySelector('.back-btn').style.display = 'none';
    let html = '<div class="grid">';
    for (let key in educationData) {
        let data = educationData[key];
        html += `<div class="card" onclick="handleClassClick('${key}')">
            <div class="card-image">${data.icon}</div>
            <div class="card-content">
                <div class="card-title">${data.name}</div>
                <div class="card-desc">${data.type === 'combined-direct' ? 'ক্লিক করে সকল ভিডিও দেখুন' : 'ক্লিক করে বিষয়সমূহ দেখুন'}</div>
            </div>
        </div>`;
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function handleClassClick(key) {
    let data = educationData[key];
    if (data.type === 'combined-direct') { showAllCombinedVideosDirectly(key); } 
    else { showSubjects(key); }
}

function showAllCombinedVideosDirectly(groupKey) {
    currentLevel = 'combined-direct-videos';
    document.querySelector('.back-btn').style.display = 'inline-flex';
    let groupData = educationData[groupKey];
    let allVideos = [];
    for (let classKey in groupData.classes) {
        let classData = groupData.classes[classKey];
        for (let subjKey in classData.subjects) {
            let subject = classData.subjects[subjKey];
            subject.videos.forEach(video => {
                allVideos.push({ ...video, subjectName: subject.name, className: classData.name });
            });
        }
    }
    let html = `<div class="section-header"><h2 class="section-title">${groupData.name} - সকল ভিডিও</h2>
        <p class="section-subtitle">এই বিভাগের সকল ভিডিও একসাথে</p></div><div class="video-grid">`;
    if (allVideos.length === 0) {
        html += `<div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 16px; border: 2px dashed var(--primary-blue);">
            <div style="font-size: 4em; margin-bottom: 20px;">🎬</div>
            <h3 style="color: var(--black); margin-bottom: 10px;">শীঘ্রই আসছে</h3>
            <p style="color: var(--gray);">খুব শীঘ্রই এই বিভাগে ভিডিও যুক্ত করা হবে</p></div>`;
    } else {
        allVideos.forEach((video, index) => {
            html += `<div class="video-card">
                <div class="video-thumbnail" onclick="playVideo('${video.videoId}')">
                    <img src="https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg" alt="${video.title}">
                    <div class="play-button">▶</div>
                </div>
                <div class="video-info">
                    <div class="video-title">${index + 1}. ${video.title}</div>
                    <div class="video-meta"><span><i class="far fa-clock"></i> ${video.duration}</span>
                    <span> | <i class="fas fa-book-open"></i> ${video.subjectName} (${video.className})</span></div>
                </div>
            </div>`;
        });
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function showSubjects(className) {
    currentLevel = 'subjects'; selectedClass = className;
    document.querySelector('.back-btn').style.display = 'inline-flex';
    let classData = educationData[className];
    let html = `<div class="section-header"><h2 class="section-title">${classData.name}</h2>
        <p class="section-subtitle">আপনার পছন্দের বিষয় নির্বাচন করুন</p></div><div class="grid">`;
    for (let subj in classData.subjects) {
        let subject = classData.subjects[subj];
        html += `<div class="card" onclick="showIndividualVideos('${className}', '${subj}')">
            <div class="card-image">${subject.icon || '📖'}</div>
            <div class="card-content">
                <div class="card-title">${subject.name}</div>
                <div class="card-desc">${subject.videos.length}টি ভিডিও লেকচার</div>
            </div>
        </div>`;
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function showIndividualVideos(className, subjectName) {
    currentLevel = 'individual-videos'; selectedClass = className;
    let classData = educationData[className];
    let subject = classData.subjects[subjectName];
    let html = `<div class="section-header"><h2 class="section-title">${className} - ${subject.name}</h2>
        <p class="section-subtitle">ভিডিওতে ক্লিক করে দেখুন</p></div><div class="video-grid">`;
    if (subject.videos.length === 0) {
        html += `<div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 16px; border: 2px dashed var(--primary-blue);">
            <div style="font-size: 4em; margin-bottom: 20px;">🎬</div>
            <h3 style="color: var(--black); margin-bottom: 10px;">শীঘ্রই আসছে</h3>
            <p style="color: var(--gray);">খুব শীঘ্রই এই বিষয়ে ভিডিও যুক্ত করা হবে</p></div>`;
    } else {
        subject.videos.forEach((video, index) => {
            html += `<div class="video-card">
                <div class="video-thumbnail" onclick="playVideo('${video.videoId}')">
                    <img src="https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg" alt="${video.title}">
                    <div class="play-button">▶</div>
                </div>
                <div class="video-info">
                    <div class="video-title">${index + 1}. ${video.title}</div>
                    <div class="video-meta"><i class="far fa-clock"></i> ${video.duration}</div>
                </div>
            </div>`;
        });
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function playVideo(videoId) {
    document.getElementById('youtubeFrame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    document.getElementById('videoModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('youtubeFrame').src = '';
    document.body.style.overflow = 'auto';
}

function goBack() {
    if (currentLevel === 'combined-direct-videos' || currentLevel === 'individual-videos' || currentLevel === 'subjects') {
        showClasses();
    }
}

window.onclick = function(event) { if (event.target == document.getElementById('videoModal')) { closeModal(); } }
document.addEventListener('keydown', function(event) { if (event.key === 'Escape') { closeModal(); } });
