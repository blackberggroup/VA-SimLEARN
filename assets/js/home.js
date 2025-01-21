
  document.addEventListener('DOMContentLoaded', () => {

    const animations = [
      {
        id: 'lottie-tour',
        path: '/assets/img/home/navigation.json',
        animation: null 
      },
      {
        id: 'lottie-course',
        path: '/assets/img/home/graduate.json',
        animation: null
      },
      {
        id: 'lottie-certified',
        path: '/assets/img/home/verified.json',
        animation: null
      }
    ];

    animations.forEach(anim => {
      anim.animation = lottie.loadAnimation({
        container: document.getElementById(anim.id),
        renderer: 'svg',
        loop: true,
        autoplay: false, 
        path: anim.path
      });
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animation = animations.find(anim => anim.id === entry.target.id);
            if (animation) {
              animation.animation.play(); 
            }
          } else {
            const animation = animations.find(anim => anim.id === entry.target.id);
            if (animation) {
              animation.animation.stop(); 
            }
          }
        });
      },
      { threshold: 0.5 } 
    );

    animations.forEach(anim => {
      const container = document.getElementById(anim.id);
      observer.observe(container);
    });
  });

