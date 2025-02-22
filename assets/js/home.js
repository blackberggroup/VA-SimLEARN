document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);
  
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
  });

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);

  const animations = [
    {
      id: 'lottie-tour',
      path: `${assetPath}assets/img/home/navigation.json`,
      animation: null
    },
    {
      id: 'lottie-course',
      path: `${assetPath}assets/img/home/graduate.json`,
      animation: null
    },
    {
      id: 'lottie-certified',
      path: `${assetPath}assets/img/home/verified.json`,
      animation: null
    }
  ];
  
  animations.forEach((anim) => {

    anim.animation = lottie.loadAnimation({
      container: document.getElementById(anim.id),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: anim.path,
    });
  
    anim.animation.addEventListener('DOMLoaded', () => {
      const svgElement = document.getElementById(anim.id)?.querySelector('svg');
      if (svgElement) {
        const paths = svgElement.querySelectorAll('path');
        paths.forEach((path) => {
          const strokeColor = path.getAttribute('stroke');
          if (strokeColor === 'rgb(51,204,204)') {
            path.setAttribute('stroke', 'rgb(0, 80, 216)');
          }
          if (strokeColor === 'rgb(0,0,0)') {
            path.setAttribute('stroke', 'rgb(255,255,255)');
          }
        });
      }
    });
  
    const container = document.getElementById(anim.id);
    container.addEventListener('mouseenter', () => {
      anim.animation.goToAndPlay(0, true);
    });
  });
  

    gsap.to('#mouse-wheel', {
      y: 10, 
      repeat: -1,
      yoyo: true, 
      duration: 1, 
      ease: 'none', 
    });

  const images = document.querySelectorAll('.image-stack img');

  images.forEach((image, index) => {
    gsap.to(image, {
      y: (index % 2 === 0 ? -50 : 50), 
      ease: 'none', 
      scrollTrigger: {
        trigger: image, 
        start: 'top bottom',
        end: 'bottom top', 
        scrub: true, 
      },
    });
  });

const imgCardSections = document.querySelectorAll('.img-card-section');

 imgCardSections.forEach((section) => {

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function() {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false
      });
    }
  });
  
  const img = section.querySelector('.img-cover-container img');
  if (img) {
    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: '+=200%',
          scrub: true,
        },
      }
    );
  }
});


  const programCols = document.querySelectorAll('.program-col');

  gsap.fromTo(
    programCols,
    { opacity: 0, y: 0 }, 
    {
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      stagger: 0.2, 
      ease: 'power2.out', 
      scrollTrigger: {
        trigger: '.programs-section',
        start: 'top 60%', 
        end: 'top 20%', 
        once: true, 
      },
    }
  );
  
});
