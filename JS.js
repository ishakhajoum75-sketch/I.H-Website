document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // التأكد من مراقبة الأقسام الصحيحة
    document.querySelectorAll('.sec, .sec-links').forEach(section => {
        observer.observe(section);
    });
});
    function showSection(id) {
      // إخفاء كل الأقسام
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

      // إزالة التحديد من الروابط
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

      // إظهار القسم المطلوب
      document.getElementById(id).classList.add('active');

      // تحديد الرابط النشط
      event.target.classList.add('active');
    }