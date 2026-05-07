/* ========================================
   Barley Hair Transplant - Main JavaScript
   ======================================== */

        // Helper function to shuffle array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Hero images
        const heroImages = [];
        for (let i = 1; i <= 23; i++) {
            heroImages.push(`Banner/hero-${i}.jpg`);
        }
        const heroTexts = [
            { title: "中國植髮", subtitle: "體驗世界級的頭髮修復 - 自2006年以來，中國微針植髮技術的先驅與領導者。" },
            { title: "自然持久的效果", subtitle: "擁有30多家直營診所、10多項專利技術，以及Sullivan認證的卓越品質，為全球患者帶來改變人生的效果。" },
            { title: "立即改變您的外觀", subtitle: "提供英文免費諮詢！立即聯繫我們，展開您的植髮之旅。" },
            { title: "微針技術領導者", subtitle: "我們革命性的種植筆確保360度旋轉，實現自然方向，創傷最小。" },
            { title: "18年以上的卓越經驗", subtitle: "信賴中國微針植髮的先驅與領導者。" }
        ];

        // Before & After images
        const beforeAfterImages = [];
        for (let i = 1; i <= 5; i++) beforeAfterImages.push({ path: `Beard/Beard-${i}.jpg`, type: '鬍子' });
        for (let i = 1; i <= 2; i++) beforeAfterImages.push({ path: `Eyebrow/Eyebrow-${i}.jpg`, type: '眉毛' });
        for (let i = 1; i <= 26; i++) beforeAfterImages.push({ path: `manBald/manBald-${i}.jpg`, type: '男性禿頭' });
        for (let i = 1; i <= 35; i++) beforeAfterImages.push({ path: `manHairline/manHairline-${i}.jpg`, type: '男性髮際線' });
        for (let i = 1; i <= 33; i++) beforeAfterImages.push({ path: `women/women-${i}.jpg`, type: '女性頭髮' });

        const beforeAfterCaptions = [
            { title: "驚人轉變", desc: "前後對比" },
            { title: "自然效果", desc: "真實患者轉變" },
            { title: "轉變完成", desc: "改變人生的效果" },
            { title: "戲劇性改善", desc: "前後照片" },
            { title: "自然外觀", desc: "專業植髮" },
            { title: "完美密度", desc: "優異效果" },
            { title: "顯著轉變", desc: "前後對比" },
            { title: "新外觀，新生活", desc: "患者成功故事" },
            { title: "改變人生的效果", desc: "真實患者照片" },
            { title: "極佳效果", desc: "前後對比" }
        ];



        // Doctor Patient Photos
        const doctorPatientPhotos = [];
        for (let i = 1; i <= 76; i++) {
            doctorPatientPhotos.push(`Photos/Photos-${i}.jpg`);
        }
        const photoCaptions = [
            { title: "開心的患者", desc: "成功手術後與醫療團隊合影" },
            { title: "感恩的患者", desc: "與醫生慶祝絕佳效果" },
            { title: "成功案例", desc: "又一位滿意患者分享喜悅" },
            { title: "重拾笑容", desc: "出院前與專家合影" },
            { title: "恢復自然外觀", desc: "治療後與陳醫生開心合影" },
            { title: "改變人生", desc: "興奮的患者展示新樣貌" },
            { title: "感激的患者", desc: "與植髮專家合影的感恩患者" },
            { title: "新旅程", desc: "患者慶助手術成功完成" },
            { title: "團隊照片", desc: "我們的專家團隊與非常開心的患者" },
            { title: "開心時刻", desc: "患者和醫生慶祝驚人效果" },
            { title: "感恩的患者", desc: "與醫療人員分享喜悅" },
            { title: "成功慶祝", desc: "開心的患者與團隊在一起" }
        ];

        // Hospital Environment
        const hospitalImages = [];
        for (let i = 1; i <= 73; i++) {
            hospitalImages.push(`Hospital/Hospital-${i}.jpg`);
        }
        const hospitalCaptions = [
            { title: "現代診所", desc: "我們先進的設施" },
            { title: "舒適等候區", desc: "在我們的尊貴休息室放鬆" },
            { title: "手術室", desc: "無菌與先進" },
            { title: "諮詢室", desc: "隱私與專業" },
            { title: "恢復區", desc: "舒適的術後空間" },
            { title: "接待處", desc: "溫馨的入口" },
            { title: "治療室", desc: "設備完善且乾淨" },
            { title: "醫生辦公室", desc: "專業的工作空間" },
            { title: "診所內部", desc: "現代且溫馨" },
            { title: "現代設施", desc: "為您的舒適而設計" }
        ];

        // Testimonials
        const testimonialsData = [
            { name: "James Wilson", country: "美國", text: "驚人效果！大麥的團隊非常專業，效果超出了我所有的期望。強烈推薦給任何考慮植髮的人。", initials: "JW" },
            { name: "Sarah Chen", country: "加拿大", text: "從頭到尾，體驗都很棒。醫生非常知識淵博，工作人員的英語也很好。我的頭髮看起來完全自然！", initials: "SC" },
            { name: "Michael Brown", country: "英國", text: "我從倫敦到上海做手術，每一段旅程都值得。微針技術令人難以置信，恢復速度比我預期的快得多。", initials: "MB" },
            { name: "David Kim", country: "韓國", text: "專業、友善，效果說明一切。我很高興選擇了大麥。術後護理也很棒！", initials: "DK" },
            { name: "Emma Johnson", country: "澳洲", text: "最好的決定！團隊在整個過程中讓我感到非常舒適。我的髮際線看起來很棒，我感覺更有自信了。", initials: "EJ" },
            { name: "Robert Taylor", country: "德國", text: "從開始到結束的服務都非常出色。醫生是該領域的真正專家。我對結果非常滿意！", initials: "RT" }
        ];

        // FAQ Data
        const faqData = [
            { q: "植髮手術需要多長時間？", a: "時間取決於所需的毛囊數量。通常，手術需要4-8小時。我們的團隊將在您的諮詢期間為您提供精確的時間表。" },
            { q: "什麼時候能看到效果？", a: "您會在3-4個月開始看到新的頭髮生長。隨著頭髮繼續變濃和成熟，最大效果通常在術後12-18個月顯現。" },
            { q: "手術會痛嗎？", a: "我們使用局部麻醉確保您在整個手術過程中感到舒適。大多數患者報告說不適感很小，可以在治療期間看電影或聽音樂。" },
            { q: "多久可以返回工作？", a: "大多數患者可以在2-3天內回到辦公室工作。對於更體力的工作，我們建議等待7-10天。我們的團隊將提供具體的術後護理說明。" },
            { q: "效果是永久的嗎？", a: "是的！移植的頭髮取自捐贈區域（後腦勺），該區域的毛囊對DHT和掉髮具有基因抗性。這些頭髮將會終生自然生長。" },
            { q: "你們提供英文諮詢嗎？", a: "絕對！我們有會說英語的工作人員在您的整個治療過程中提供諮詢，以確保清晰的溝通。" },
            { q: "什麼是微針植髮？", a: "微針植髮使用專門的種植筆，可以360度旋轉以配合自然頭髮方向。它帶來更小的切口（0.6-1.0毫米）、更快的恢復和更高的密度。" },
            { q: "手術後可以洗頭嗎？", a: "可以！使用我們的微針技術，大多數患者可以在24小時內輕柔洗頭。我們將為您提供詳細的正確護理說明。" },
            { q: "植髮的費用是多少？", a: "費用取決於所需的毛囊數量和具體手術。我們提供有競爭力的價格和靈活的付款方式。聯繫我們獲取個人化報價。" },
            { q: "你們在其他城市有診所嗎？", a: "是的！我們在中國主要城市有30多家直營診所，包括北京、上海、深圳、廣州、成都等。" }
        ];

        // Initialize Hero
        let currentSlide = 0;
        const selectedHeroes = shuffleArray(heroImages).slice(0, 3);
        
        function renderHero() {
            const slidesContainer = document.getElementById('heroSlides');
            if (!slidesContainer) return;
            
            // 检查是否有静态内容 - 如果有，只替换图片src
            const existingSlides = slidesContainer.querySelectorAll('.hero-slide');
            if (existingSlides.length > 0) {
                // 只替换图片，保留文案
                existingSlides.forEach((slide, index) => {
                    const img = slide.querySelector('img');
                    if (img && selectedHeroes[index]) {
                        img.src = selectedHeroes[index];
                    }
                });
                return;
            }
            
            // 如果没有静态内容，就生成完整的hero
            slidesContainer.innerHTML = selectedHeroes.map((img, index) => {
                const text = heroTexts[index % heroTexts.length];
                return `
                    <div class="hero-slide">
                        <img src="${img}" alt="Hero ${index + 1}">
                        <div class="hero-overlay">
                            <div class="hero-content">
                                <h1>${text.title}</h1>
                                <p>${text.subtitle}</p>
                                <a href="contact.html" class="btn">預約免費諮詢</a>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        function goToSlide(index) {
            const heroSlides = document.getElementById('heroSlides');
            if (!heroSlides) return;
            
            const slides = heroSlides.querySelectorAll('.hero-slide');
            if (slides.length === 0) return;
            
            currentSlide = index;
            heroSlides.style.transform = `translateX(-${index * 100}%)`;
            document.querySelectorAll('.hero-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        function nextSlide() {
            const heroSlides = document.getElementById('heroSlides');
            if (!heroSlides) return;
            
            const slides = heroSlides.querySelectorAll('.hero-slide');
            if (slides.length === 0) return;
            
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        }
        
        // Initialize Before & After
        function renderBeforeAfter() {
            const container = document.getElementById('beforeAfterGallery');
            if (!container) return;
            
            // Always regenerate on refresh, even if static content exists
            const selected = shuffleArray([...beforeAfterImages]).slice(0, 6);
            
            container.innerHTML = selected.map((item, index) => {
                const caption = beforeAfterCaptions[index % beforeAfterCaptions.length];
                return `
                    <div class="gallery-item">
                        <img src="${item.path}" alt="${item.type}">
                        <div class="gallery-overlay">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Initialize Doctor Patient Photos
        function renderDoctorPatientPhotos() {
            const container = document.getElementById('doctorPatientPhotos');
            if (!container) return;
            
            // Always regenerate on refresh, even if static content exists
            const selected = shuffleArray([...doctorPatientPhotos]).slice(0, 6);
            
            container.innerHTML = selected.map((path, index) => {
                const caption = photoCaptions[index % photoCaptions.length];
                return `
                    <div class="photo-item">
                        <img src="${path}" alt="Patient Photo ${index + 1}">
                        <div class="photo-caption">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Initialize Testimonials
        function renderTestimonials() {
            const container = document.getElementById('testimonials');
            if (!container) return;
            
            // Check if there are static testimonials - if yes, don't overwrite
            if (container.querySelector('.testimonial-card')) {
                return;
            }
            
            container.innerHTML = testimonialsData.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">"${t.text}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${t.initials}</div>
                        <div class="testimonial-info">
                            <h4>${t.name}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${t.country}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // Initialize Hospital Gallery
        function renderHospitalGallery() {
            const container = document.getElementById('hospitalGallery');
            if (!container) return;
            
            // Always regenerate on refresh, even if static content exists
            const selected = shuffleArray([...hospitalImages]).slice(0, 6);
            
            container.innerHTML = selected.map((path, index) => {
                const caption = hospitalCaptions[index % hospitalCaptions.length];
                return `
                    <div class="hospital-item">
                        <img src="${path}" alt="Hospital ${index + 1}">
                        <div class="hospital-caption">
                            <h4>${caption.title}</h4>
                            <p>${caption.desc}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Initialize FAQ
        function renderFAQ() {
            const container = document.getElementById('faqContainer');
            if (!container) return;
            
            // Check if there are static FAQ items - if yes, don't overwrite
            if (container.querySelector('.faq-item')) {
                return;
            }
            
            container.innerHTML = faqData.map((faq, index) => `
                <div class="faq-item ${index === 0 ? 'active' : ''}">
                    <div class="faq-question" onclick="toggleFAQElement(this)">
                        <span>${faq.q}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        ${faq.a}
                    </div>
                </div>
            `).join('');
        }
        
        function toggleFAQ(element) {
            // 处理传入 element 的情况（faq.html 中使用）
            const faqItem = element.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
                return;
            }
            
            // 处理传入 index 的情况（其他页面）
            const items = document.querySelectorAll('.faq-item');
            if (!items[element]) return;
            items[element].classList.toggle('active');
        }
        
        function toggleFAQElement(element) {
            const faqItem = element.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
            }
        }
        
        // Copy to clipboard function
        function copyToClipboard(text, label) {
            navigator.clipboard.writeText(text).then(function() {
                // 显示成功提示，可以创建一个临时的提示元素
                showCopySuccess(label);
            }).catch(function(err) {
                // 降级方案：使用传统的 document.execCommand
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    showCopySuccess(label);
                } catch (e) {
                    console.error('Copy failed:', e);
                }
                document.body.removeChild(textarea);
            });
        }
        
        function showCopySuccess(label) {
            // 创建临时的成功提示
            const toast = document.createElement('div');
            toast.className = 'copy-toast';
            toast.innerHTML = `<i class="fas fa-check"></i> ${label} 已複製！`;
            document.body.appendChild(toast);
            
            // 添加动画类
            setTimeout(() => toast.classList.add('show'), 10);
            
            // 2秒后移除
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }
        
        // Initialize FAQ Category Tabs
        function initFAQCategories() {
            const tabs = document.querySelectorAll('.category-tab');
            const categories = document.querySelectorAll('.faq-category');
            
            if (tabs.length === 0 || categories.length === 0) return;
            
            // 初始显示所有分类
            categories.forEach(cat => cat.classList.add('active'));
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const categoryId = this.getAttribute('data-category');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active category
                    if (categoryId === 'all') {
                        // 显示所有分类
                        categories.forEach(cat => cat.classList.add('active'));
                    } else {
                        // 只显示选中的分类
                        categories.forEach(cat => cat.classList.remove('active'));
                        const targetCategory = document.getElementById(categoryId);
                        if (targetCategory) {
                            targetCategory.classList.add('active');
                        }
                    }
                });
            });
        }

        // Hamburger Menu Toggle
        function toggleHamburger() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');
            
            if (hamburger && nav) {
                hamburger.classList.toggle('active');
                nav.classList.toggle('active');
                
                // Prevent scrolling when menu is open
                document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
            }
        }
        
        // Back to Top Button
        function initBackToTop() {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(backToTopBtn);
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Initialize all
        document.addEventListener('DOMContentLoaded', function() {
            renderHero();
            renderBeforeAfter();
            renderDoctorPatientPhotos();
            renderTestimonials();
            renderHospitalGallery();
            renderFAQ();
            initFAQCategories();
            initBackToTop();
            
            // Add hamburger click listener
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.addEventListener('click', toggleHamburger);
            }
            
            // Close menu when clicking a link
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function() {
                    const hamburger = document.querySelector('.hamburger');
                    const nav = document.querySelector('nav');
                    if (hamburger && nav) {
                        hamburger.classList.remove('active');
                        nav.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        });
        
        // Auto-rotate hero (temporarily disabled)
        // setInterval(nextSlide, 5000);
    