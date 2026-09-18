// ========================================
// ThasinVerse - Education Data
// Class 6-8 + SSC (9-10 Combined) + HSC (11-12 Combined)
// ========================================

const educationData = {
    "class6": {
        name: "ষষ্ঠ শ্রেণি",
        icon: "📚",
        type: "individual",
        subjects: {
            "science": {
                name: "বিজ্ঞান",
                icon: "🔬",
                videos: [
                    { title: "আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 01", videoId: "ba2QQRdjl4s", duration: "27:46" },
                    { title: "আলোর প্রতিফলন ও প্রতিসরণ | Lecture 02", videoId: "XrkGCqvZhcc", duration: "15:03" }
                ]
            },
            "math": { name: "গণিত", icon: "", videos: [] },
            "bangla": { name: "বাংলা", icon: "📖", videos: [] }
        }
    },
    "class7": {
        name: "সপ্তম শ্রেণি",
        icon: "",
        type: "individual",
        subjects: {
            "science": { name: "বিজ্ঞান", icon: "", videos: [] },
            "math": { name: "গণিত", icon: "", videos: [] },
            "bangla": { name: "বাংলা", icon: "", videos: [] }
        }
    },
    "class8": {
        name: "অষ্টম শ্রেণি",
        icon: "📘",
        type: "individual",
        subjects: {
            "science": { name: "বিজ্ঞান", icon: "", videos: [] },
            "math": { name: "গণিত", icon: "", videos: [] },
            "bangla": { name: "বাংলা", icon: "📖", videos: [] }
        }
    },
    "ssc": {
        name: "SSC (নবম-দশম)",
        icon: "",
        type: "combined",
        classes: {
            "class9": {
                name: "নবম শ্রেণি",
                subjects: {
                    "physics": {
                        name: "পদার্থবিজ্ঞান",
                        icon: "⚛️",
                        className: "নবম শ্রেণি",
                        videos: [
                            { title: "কাজ, ক্ষমতা ও শক্তি Final shot!  | Oneshot", videoId: "GbkZK74Hq1M", duration: "1:30:10" },
                            { title: "চলতড়িৎ সার্কিট সলভিং সিরিজ | Episode: 09", videoId: "qX2j73eeJUc", duration: "25:00" }
                        ]
                    },
                    "chemistry": {
                        name: "রসায়ন",
                        icon: "",
                        className: "নবম শ্রেণি",
                        videos: [
                            { title: "বোহারের ফর্মুলা mvr = nh/2π", videoId: "ba2QQRdjl4s", duration: "14:34" }
                        ]
                    },
                    "math": { name: "উচ্চতর গণিত", icon: "", className: "নবম শ্রেণি", videos: [] },
                    "biology": { name: "জীববিজ্ঞান", icon: "🧬", className: "নবম শ্রেণি", videos: [] }
                }
            },
            "class10": {
                name: "দশম শ্রেণি",
                subjects: {
                    "physics": { name: "পদার্থবিজ্ঞান", icon: "⚛️", className: "দশম শ্রেণি", videos: [] },
                    "chemistry": { name: "রসায়ন", icon: "🧪", className: "দশম শ্রেণি", videos: [] },
                    "math": { name: "উচ্চতর গণিত", icon: "📐", className: "দশম শ্রেণি", videos: [] },
                    "biology": { name: "জীববিজ্ঞান", icon: "", className: "দশম শ্রেণি", videos: [] }
                }
            }
        }
    },
    "hsc": {
        name: "HSC (একাদশ-দ্বাদশ)",
        icon: "📓",
        type: "combined",
        classes: {
            "class11": {
                name: "একাদশ শ্রেণি",
                subjects: {
                    "physics": { name: "পদার্থবিজ্ঞান", icon: "️", className: "একাদশ শ্রেণি", videos: [] },
                    "chemistry": { name: "রসায়ন", icon: "🧪", className: "একাদশ শ্রেণি", videos: [] },
                    "math": { name: "উচ্চতর গণিত", icon: "", className: "একাদশ শ্রেণি", videos: [] },
                    "biology": { name: "জীববিজ্ঞান", icon: "🧬", className: "একাদশ শ্রেণি", videos: [] }
                }
            },
            "class12": {
                name: "দ্বাদশ শ্রেণি",
                subjects: {
                    "physics": { name: "পদার্থবিজ্ঞান", icon: "⚛️", className: "দ্বাদশ শ্রেণি", videos: [] },
                    "chemistry": { name: "রসায়ন", icon: "", className: "দ্বাদশ শ্রেণি", videos: [] },
                    "math": { name: "উচ্চতর গণিত", icon: "📐", className: "দ্বাদশ শ্রেণি", videos: [] },
                    "biology": { name: "জীববিজ্ঞান", icon: "🧬", className: "দ্বাদশ শ্রেণি", videos: [] }
                }
            }
        }
    }
};

let currentLevel = 'classes';
let selectedClass = null;
let selectedGroup = null;

window.onload = function() { 
    showClasses(); 
};

function scrollToClasses() {
    document.getElementById('classes').scrollIntoView({ behavior: 'smooth' });
}

function showClasses() {
    currentLevel = 'classes';
    selectedClass = null;
    selectedGroup = null;
    document.querySelector('.back-btn').style.display = 'none';
    
    let html = '<div class="grid">';
    for (let key in educationData) {
        let data = educationData[key];
        html += `
            <div class="card" onclick="handleClassClick('${key}')">
                <div class="card-image">${data.icon}</div>
                <div class="card-content">
                    <div class="card-title">${data.name}</div>
                    <div class="card-desc">${data.type === 'combined' ? 'ক্লিক করে সব ভিডিও দেখুন' : 'ক্লিক করে বিষয়সমূহ দেখুন'}</div>
                </div>
            </div>
        `;
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function handleClassClick(key) {
    let data = educationData[key];
    if (data.type === 'combined') {
        showCombinedVideos(key);
    } else {
        showSubjects(key);
    }
}

function showCombinedVideos(groupKey) {
    currentLevel = 'combined-videos';
    selectedGroup = groupKey;
    document.querySelector('.back-btn').style.display = 'inline-block';
    
    let groupData = educationData[groupKey];
    
    // Combine all subjects from both classes
    let combinedSubjects = {};
    
    for (let classKey in groupData.classes) {
        let classData = groupData.classes[classKey];
        for (let subjKey in classData.subjects) {
            let subject = classData.subjects[subjKey];
            
            if (!combinedSubjects[subjKey]) {
                combinedSubjects[subjKey] = {
                    name: subject.name,
                    icon: subject.icon,
                    videos: [],
                    type: 'combined'
                };
            }
            
            // Add videos with class name
            subject.videos.forEach(video => {
                combinedSubjects[subjKey].videos.push({
                    ...video,
                    className: subject.className || classData.name
                });
            });
        }
    }
    
    let html = `
        <div class="section-header">
            <h2 class="section-title">${groupData.name} - সব বিষয়</h2>
            <p class="section-subtitle">সকল শ্রেণির ভিডিও একসাথে</p>
        </div>
        <div class="grid">
    `;
    
    for (let subjKey in combinedSubjects) {
        let subject = combinedSubjects[subjKey];
        let videoCount = subject.videos.length;
        html += `
            <div class="card" onclick="showCombinedSubjectVideos('${groupKey}', '${subjKey}')">
                <div class="card-image">${subject.icon}</div>
                <div class="card-content">
                    <div class="card-title">${subject.name}</div>
                    <div class="card-desc">${videoCount}টি ভিডিও লেকচার</div>
                </div>
            </div>
        `;
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function showCombinedSubjectVideos(groupKey, subjectKey) {
    currentLevel = 'combined-subject-videos';
    selectedGroup = groupKey;
    
    let groupData = educationData[groupKey];
    let subjectVideos = [];
    let subjectName = '';
    let subjectIcon = '';
    
    // Collect all videos for this subject from both classes
    for (let classKey in groupData.classes) {
        let classData = groupData.classes[classKey];
        if (classData.subjects[subjectKey]) {
            let subject = classData.subjects[subjectKey];
            subjectName = subject.name;
            subjectIcon = subject.icon;
            
            subject.videos.forEach(video => {
                subjectVideos.push({
                    ...video,
                    className: classData.name
                });
            });
        }
    }
    
    let html = `
        <div class="section-header">
            <h2 class="section-title">${subjectName} - সকল শ্রেণি</h2>
            <p class="section-subtitle">ভিডিওতে ক্লিক করে দেখুন</p>
        </div>
        <div class="video-grid">
    `;
    
    if (subjectVideos.length === 0) {
        html += `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 12px; border: 2px dashed #0056D2;">
                <div style="font-size: 4em; margin-bottom: 20px;"></div>
                <h3 style="color: #111; margin-bottom: 10px;">শীঘ্রই আসছে</h3>
                <p style="color: #555;">খুব শীঘ্রই এই বিষয়ে ভিডিও যুক্ত করা হবে</p>
            </div>
        `;
    } else {
        subjectVideos.forEach((video, index) => {
            html += `
                <div class="video-card">
                    <div class="video-thumbnail" onclick="playVideo('${video.videoId}')">
                        <img src="https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg" alt="${video.title}">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <div class="video-title">${index + 1}. ${video.title}</div>
                        <div class="video-meta">
                            <span>️ ${video.duration}</span>
                            <span> | ${video.className}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function showSubjects(className) {
    currentLevel = 'subjects';
    selectedClass = className;
    document.querySelector('.back-btn').style.display = 'inline-block';
    
    let classData = educationData[className];
    let html = `
        <div class="section-header">
            <h2 class="section-title">${classData.name}</h2>
            <p class="section-subtitle">আপনার পছন্দের বিষয় নির্বাচন করুন</p>
        </div>
        <div class="grid">
    `;
    
    for (let subj in classData.subjects) {
        let subject = classData.subjects[subj];
        let videoCount = subject.videos.length;
        html += `
            <div class="card" onclick="showIndividualVideos('${className}', '${subj}')">
                <div class="card-image">${subject.icon}</div>
                <div class="card-content">
                    <div class="card-title">${subject.name}</div>
                    <div class="card-desc">${videoCount}টি ভিডিও লেকচার</div>
                </div>
            </div>
        `;
    }
    html += '</div>';
    document.getElementById('content').innerHTML = html;
}

function showIndividualVideos(className, subjectName) {
    currentLevel = 'individual-videos';
    selectedClass = className;
    
    let classData = educationData[className];
    let subject = classData.subjects[subjectName];
    
    let html = `
        <div class="section-header">
            <h2 class="section-title">${className} - ${subject.name}</h2>
            <p class="section-subtitle">ভিডিওতে ক্লিক করে দেখুন</p>
        </div>
        <div class="video-grid">
    `;
    
    if (subject.videos.length === 0) {
        html += `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 12px; border: 2px dashed #0056D2;">
                <div style="font-size: 4em; margin-bottom: 20px;"></div>
                <h3 style="color: #111; margin-bottom: 10px;">শীঘ্রই আসছে</h3>
                <p style="color: #555;">খুব শীঘ্রই এই বিষয়ে ভিডিও যুক্ত করা হবে</p>
            </div>
        `;
    } else {
        subject.videos.forEach((video, index) => {
            html += `
                <div class="video-card">
                    <div class="video-thumbnail" onclick="playVideo('${video.videoId}')">
                        <img src="https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg" alt="${video.title}">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <div class="video-title">${index + 1}. ${video.title}</div>
                        <div class="video-meta">⏱️ ${video.duration}</div>
                    </div>
                </div>
            `;
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
    if (currentLevel === 'combined-subject-videos' || currentLevel === 'combined-videos') {
        showClasses();
    } else if (currentLevel === 'individual-videos') {
        showSubjects(selectedClass);
    } else if (currentLevel === 'subjects') {
        showClasses();
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) { 
        closeModal(); 
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});