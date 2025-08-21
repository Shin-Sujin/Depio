// 첫 화면 진입 시 페이드 인
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          hero.classList.add("is-visible");
          io.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );

  io.observe(hero);
})();
