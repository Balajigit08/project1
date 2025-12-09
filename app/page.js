'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cardSectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  // ✅ SINGLE useEffect for ALL GSAP Animations
  useEffect(() => {
    // 1. Sakura slide animations - Left side
    gsap.fromTo(".sakura-left",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    // 2. Sakura slide animations - Right side
    gsap.fromTo(".sakura-right",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    // 3. Mount image parallax - right side
    gsap.to(".mount-parallax", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: ".mount-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    // 4. Cherry blossoms image parallax - left side
    gsap.to(".cherry-parallax", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ".cherry-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    // 5. Bottom left image parallax
    gsap.to(".bottom-left-parallax", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".bottom-left-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    // 6. Right side image parallax
    gsap.to(".right-side-parallax", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ".right-side-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    // 9. Featured Destinations images animation
    gsap.from(".destination-img-1", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".destination-img-1",
        start: "top 85%",
        end: "top 50%",
        scrub: 2
      }
    });

    gsap.from(".destination-img-2", {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".destination-img-2",
        start: "top 85%",
        end: "top 50%",
        scrub: 2
      }
    });

    gsap.from(".destination-img-3", {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".destination-img-3",
        start: "top 85%",
        end: "top 50%",
        scrub: 2
      }
    });

    // ============= CARD ANIMATIONS - ALL 5 CARDS WITH PROPER SCROLL =============

    // Create a timeline that's controlled by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardSectionRef.current,
        start: "top top",
        end: "+=5000",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    // Card 5 moves first (0-20% of scroll)
    tl.to(card5Ref.current, {
      x: -400,
      y: -800,
      rotation: -40,
      ease: "power2.inOut",
      duration: 1
    }, 0);

    // Card 4 moves second (20-40% of scroll)
    tl.to(card4Ref.current, {
      x: -400,
      y: -800,
      rotation: -40,
      ease: "power2.inOut",
      duration: 1
    }, 1);

    // Card 3 moves third (40-60% of scroll)
    tl.to(card3Ref.current, {
      x: -400,
      y: -800,
      rotation: -40,
      ease: "power2.inOut",
      duration: 1
    }, 2);

    // Card 2 moves fourth (60-80% of scroll)
    tl.to(card2Ref.current, {
      x: -400,
      y: -800,
      rotation: -40,
      ease: "power2.inOut",
      duration: 1
    }, 3);

    // Card 1 straightens at end (80-100% of scroll)
    tl.to(card1Ref.current, {
      rotation: 0,
      ease: "power2.inOut",
      duration: 1
    }, 4);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // =================food section animation========================
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".food3", {
      x: "230%",
      duration: 1,
      stagger: 1,
      rotate: 360,
      scrollTrigger: {
        trigger: ".food3",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play reverse play reverse",

      }
    });
    gsap.to(".food2", {
      x: "115%",
      duration: 1,
      stagger: 1,
      rotate: 360,
      scrollTrigger: {
        trigger: ".food2",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play reverse play reverse",

      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  // ====================culture section============================

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Culture 1 - animates first
    gsap.fromTo(".culture1",
      { width: 0 },
      {
        width: "90%",
        duration: 1,
        scrollTrigger: {
          trigger: ".culture1",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,

        }
      }
    );

    // Culture 2 - use its own trigger
    gsap.fromTo(".culture2",
      {
        width: 0,
      },
      {
        width: "90%",
        duration: 1,
        scrollTrigger: {
          trigger: ".culture2", // ← changed to .culture2
          start: "top 80%",
          end: "top 50%",
          scrub: 1,

        }
      }
    );

    // Culture 3 - use its own trigger
    gsap.fromTo(".culture3",
      { width: 0 },
      {
        width: "90%",
        duration: 1,
        scrollTrigger: {
          trigger: ".culture3", // ← changed to .culture3
          start: "top 80%",
          end: "top 50%",
          scrub: 1,

        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // ==============title animation============================
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titles = ['.title1', '.title2', '.title3'];

    titles.forEach((title) => {
      gsap.fromTo(title,
        { width: 0 },
        {
          duration: 2,
          width: '60vw',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animations
    gsap.utils.toArray('.title-animated').forEach((title) => {
      gsap.fromTo(title,
        { width: 0 },
        {
          duration: 2,
          width: '60vw',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

    // Image 1 (Left - Tokyo) - Slide in from left
    gsap.fromTo('.destination-img-1',
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.destination-img-1',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Image 2 (Top Right - Osaka) - Fade in from top
    gsap.fromTo('.destination-img-2',
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.destination-img-2',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Image 3 (Bottom - Hokkaido) - Slide in from bottom
    gsap.fromTo('.destination-img-3',
      {
        y: 150,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.destination-img-3',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1600px] m-auto overflow-hidden">

      {/* ---------------------------SAKURA SLIDE ANIMATION with GSAP - FIXED--------------------------------- */}
      <section className="relative z-50 pointer-events-none">
        {/* Decorative Sakura Elements - NOW VISIBLE */}
        <div className="sakura-left absolute top-0 left-0 w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36 pointer-events-auto">
          <img src="/images/sakura.png" alt="Sakura Left" className="w-full h-auto" />
        </div>

        <div className="sakura-right absolute top-0 right-0 w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36 pointer-events-auto">
          <img src="/images/sakura1.png" alt="Sakura Right" className="w-full h-auto" />
        </div>
      </section>

      {/*-------------------------------HEADER SECTION START with GSAP----------------------------- */}
      <section className="bg-[#152266]/50 relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 bg-[url(/images/mount1.png)] bg-center bg-cover z-10 overflow-hidden">
        <div className="relative z-10">
          <video
            src="/images/videojapan.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hero-video w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl"
          />

          <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl" />

          {/* Content wrapper with proper z-index */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <h1 className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white text-center leading-tight">
              EXPLORE THE JAPAN
            </h1>
            <p className="hero-description text-white text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 text-center max-w-[250px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              Step beyond the familiar into a world of wonder. Journey to spectacular destinations that blend peaceful retreats with exhilarating adventures and timeless memories.
            </p>
            <button className="hero-button border-2 border-white bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-md sm:rounded-lg mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 transition-all duration-300 ease-linear cursor-pointer group hover:bg-white hover:scale-105">
              <span className="text-white group-hover:text-[#152266] text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                Start Your Journey
              </span>
            </button>
          </div>
        </div>

        {/* Fish animations */}
        <img
          src="/images/fish1.png"
          alt=""
          className="hidden xl:block absolute top-80 left-0 w-16 xl:w-20 2xl:w-24 z-0 animate-move-to-right"
        />

        <img
          src="/images/fish1.png"
          alt=""
          className="hidden xl:block absolute top-80 right-40 w-16 xl:w-20 2xl:w-24 z-0 animate-move-to-right1"
        />
      </section>

      {/* ---------------------------DISCOVER JAPAN SECTION with GSAP Parallax----------------------------- */}
      <section className='py-20 bg-[#152266]/50 overflow-hidden'>
        <div className='flex flex-col justify-center items-center pt-20 px-4'>
          <div className="w-full max-w-7xl mx-auto">
            <div>
              <h1 className='text-center text-[20px] uppercase text-white font-bold'>Discover Japan</h1>
            </div>

            <div className='relative my-8'>
              <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='text-[28px] md:text-[40px] text-center max-w-[980px] relative z-20 px-4 text-white font-bold'>
                  Japan's timeless beauty unfolds in every <span className=''>moment,</span> inviting unforgettable cultural journeys
                </h1>

                {/* GSAP Parallax - Mount image */}
                <div className='hidden lg:block absolute right-0 top-10 z-10 mount-parallax'>
                  <img
                    src="/images/mount1.jpg"
                    alt=""
                    className='w-[341px] h-[216px] object-cover rounded-xl'
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 lg:flex-nowrap justify-center lg:justify-between items-center">
              {/*--------------------------------section1 - GSAP Parallax---------------------------------- */}
              <div className='relative shrink-0 mb-12 top-10 lg:mb-0'>
                <div className='cherry-parallax'>
                  <img
                    src="images/chreeey-blossoms.jpg"
                    alt=""
                    className='w-full max-w-[277px] h-[375px] object-cover rounded-2xl'
                  />
                </div>

                <div className='bottom-left-parallax'>
                  <img
                    src="images/img3.jpg"
                    alt=""
                    className='w-full max-w-[239px] h-[163px] object-cover absolute -bottom-10 left-10 sm:left-20 rounded-2xl'
                  />
                </div>
              </div>

              {/* -------------------------------section2--------------------------------------- */}
              <div className='flex flex-col justify-center items-center w-full lg:flex-1 px-4'>
                <p className='relative text-[16px] md:text-[20px] text-center max-w-[650px] text-white bottom-20'>
                  Japan blends ancient traditions with modern wonders—offering peaceful shrines, lively city streets, breathtaking landscapes, and unforgettable cultural experiences.
                </p>
                <div className=''>
                  <button className='bg-white py-4 px-8 md:py-3 md:px-5 rounded-lg text-[#152266] font-semibold hover:bg-[#152266] hover:text-white transition-all duration-300 ease-linear cursor-pointer'>
                    Discover More
                  </button>
                </div>
              </div>

              {/* --------------------------------section-3 - GSAP Parallax--------------------------------- */}
              <div className='shrink-0 relative top-35 right-side-parallax'>
                <img
                  src="images/img4.jpg"
                  alt=""
                  className='w-full max-w-[254px] h-[296px] object-cover rounded-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------CARDS SECTION with GSAP ScrollTrigger - FIXED-------------------------------- */}
      <section id="natureSection" ref={cardSectionRef} className="overflow-hidden">
        <div className='bg-[#152266]/50 p-10'>
          <div className="bg-[#A2A8C2] rounded-4xl pb-10">
            <h1 className='text-center pt-20 text-[40px] font-bold text-white'>
              Explore Japan by Category
            </h1>
            <p className='text-center w-full max-w-[80%] m-auto text-[20px] text-white mt-5'>
              Discover Japan's best food spots, iconic destinations, rich culture, inspiring travel blogs, and unforgettable experiences crafted to guide every type of traveler.
            </p>

            {/* Container with relative positioning and defined height */}
            <div className="flex justify-center items-center relative py-10 min-h-[500px]">
              <div className="relative w-[450px] h-[460px]">

                {/* CARD 5 – Front (Moves FIRST) with GSAP */}
                <div
                  ref={card5Ref}
                  className="w-full h-full bg-[#2e365a] rounded-2xl shadow-lg flex flex-col items-center p-6 absolute z-40"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <h1 className="text-2xl font-semibold text-white mb-2">Experiences</h1>
                  <p className="text-[16px] text-white mb-4">Chase moments , capture memories.</p>
                  <div className=" flex-col w-full h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
                    <img
                      src="images/exp.jpg"
                      alt="Adventure in Japan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CARD 4 (Moves SECOND) with GSAP */}
                <div
                  ref={card4Ref}
                  className="w-full h-full bg-[#4e5a8a] rounded-2xl shadow-lg flex flex-col items-center p-6 absolute z-30"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  <h1 className="text-2xl font-semibold text-white mb-2">Destinations</h1>
                  <p className="text-[16px] text-white mb-4">Explore Destinations , Popular Destinations.</p>
                  <div className="w-full h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
                    <img
                      src="images/tem1.jpg"
                      alt="Adventure in Japan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CARD 3 (Moves THIRD) with GSAP */}
                <div
                  ref={card3Ref}
                  className="w-full h-full bg-[#2e365a] rounded-2xl shadow-lg flex flex-col items-center p-6 absolute z-20"
                  style={{ transform: 'rotate(6deg)' }}
                >
                  <h1 className="text-2xl font-semibold text-white mb-2">Food</h1>
                  <p className="text-[16px] text-white mb-4">Best Japanese Foods , Popular Foods in Japan</p>
                  <div className="w-full h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
                    <img
                      src="images/food2.jpg"
                      alt="Adventure in Japan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CARD 2 (Moves FOURTH) with GSAP */}
                <div
                  ref={card2Ref}
                  className="w-full h-full bg-[#4e5a8a] rounded-2xl shadow-lg flex flex-col items-center p-6 absolute z-10"
                  style={{ transform: 'rotate(9deg)' }}
                >
                  <h1 className="text-2xl font-semibold text-white mb-2">culture</h1>
                  <p className="text-[16px] text-white mb-4">Japanese Culture , Heritage of Japan</p>
                  <div className="w-full h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
                    <img
                      src="images/tra.avif"
                      alt="Adventure in Japan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CARD 1 (Stays - Straightens) with GSAP */}
                <div
                  ref={card1Ref}
                  className="w-full h-full bg-[#2e365a] rounded-2xl shadow-lg flex flex-col items-center p-6 absolute z-0"
                  style={{ transform: 'rotate(12deg)' }}
                >
                  <h1 className="text-2xl font-semibold text-white mb-2">Blog</h1>
                  <p className="text-[16px] text-white mb-4">Journeys Through Japan , Stories from Japan</p>
                  <div className="w-full h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
                    <img
                      src="images/tokoyo.jpg"
                      alt="Adventure in Japan"
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================FEATURED DESTINATION with GSAP=========================== */}
      <section
        className='bg-cover bg-center relative overflow-hidden'
        style={{ backgroundImage: "url('/images/tokoyo-bg.jpg')" }}
      >
        <div className='absolute inset-0 bg-linear-to-b from-[#8990b2] to-[#ffffff]/50 pointer-events-none'></div>

        <div className='flex justify-center'>
          <h1 className='title1 w-full relative z-20 text-center text-7xl font-bold text-white pt-10 mb-10 whitespace-nowrap overflow-hidden'>
            Featured Destinations
          </h1>
        </div>

        <div className='relative z-20 container px-4'>
          <div className='flex mt-20 gap-10 px-10 flex-wrap lg:flex-nowrap pb-20'>
            {/* Left Image - GSAP animation */}
            <div className='mt-20 shrink-0 destination-img-1'>
              <img
                src="images/tokoyo45.jpg"
                alt="Tokyo"
                className='w-[306px] h-[421px] object-cover rounded-lg'
              />
            </div>

            {/* Right Section */}
            <div className='flex-1'>
              {/* Top Row - Osaka Image + Text */}
              <div className='flex gap-10 items-start flex-wrap lg:flex-nowrap'>
                <div className='shrink-0 destination-img-2'>
                  <img
                    src="images/osaka.jpg"
                    alt="Osaka"
                    className='w-[332px] h-[222px] object-cover rounded-lg'
                  />
                </div>
                <div className='flex-1 mt-0 lg:mt-0'>
                  <p className='text-lg leading-relaxed text-white'>
                    Explore Japan's top destinations—each offering its own unique charm. Experience the vibrant energy and modern wonders of Tokyo, the breathtaking natural landscapes and snow-filled adventures of Hokkaido, and the lively food culture and historical sights of Osaka. These destinations capture the true essence of Japan, inviting every traveler to discover unforgettable moments.
                  </p>
                  <button className="border-2 border-white bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-md sm:rounded-lg mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 transition-all duration-300 ease-linear cursor-pointer group hover:bg-white hover:scale-105">
                    <span className="text-white group-hover:text-[#152266] text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                      Explore Destinations
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Row - Hokkaido Image */}
              <div className='flex gap-6 mt-10'>
                <div className='shrink-0 destination-img-3'>
                  <img
                    src="images/Hokkaido.avif"
                    alt="Hokkaido"
                    className='w-full max-w-[496px] h-[293px] object-cover rounded-lg'
                  />
                </div>
                <div className='flex-1 flex items-center'>
                  {/* Empty space */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================experience section=================================== */}
      <section className="bg-[#8a8cc1] flex flex-col">
        <div className='flex justify-center'>
          <h1 className='title2 w-full relative z-20 text-center text-7xl font-bold text-white pt-10 mb-10 whitespace-nowrap overflow-hidden'>
            Japan Foods
          </h1>
        </div>
        <div className='flex gap-20 m-5 relative min-h-[80vh]'>
          {/* Sushi Card */}
          <div className="food1 bg-[#152266] w-[30%] h-[70vh] mt-10 rounded-lg overflow-hidden shadow-2xl">
            <div className="h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800')" }}>
            </div>
            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold mb-3">Sushi</h2>
              <p className="text-gray-200 leading-relaxed">
                Sushi is Japan's most iconic dish, featuring vinegared rice paired with fresh raw fish, vegetables, and seaweed. From delicate nigiri to creative rolls, sushi represents centuries of culinary precision and the Japanese philosophy of respecting natural flavors.
              </p>
            </div>
          </div>

          {/* Ramen Card */}
          <div className="food2 bg-[#152266] w-[30%] h-[70vh] mt-10 absolute left-0 rounded-lg overflow-hidden shadow-2xl">
            <div className="h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800')" }}>
            </div>
            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold mb-3">Ramen</h2>
              <p className="text-gray-200 leading-relaxed">
                A beloved comfort food, ramen features wheat noodles in a rich, flavorful broth topped with sliced pork, soft-boiled eggs, and green onions. Each region has its own signature style, from creamy Tonkotsu to salty Shoyu variations.
              </p>
            </div>
          </div>

          {/* Tempura Card */}
          <div className="food3 bg-[#152266] w-[30%] h-[70vh] mt-10 absolute left-0 rounded-lg overflow-hidden shadow-2xl">
            <div className="h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800')" }}>
            </div>
            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold mb-3">Tempura</h2>
              <p className="text-gray-200 leading-relaxed">
                Tempura showcases Japan's mastery of frying techniques with lightly battered seafood and vegetables fried to crispy perfection. The delicate coating allows the natural flavors to shine through, served with a savory dipping sauce and grated daikon.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center p-10'>
          <button className='bg-white py-4 px-8  rounded-lg text-[#152266] font-semibold hover:bg-[#152266] hover:text-white transition-all duration-300 ease-linear cursor-pointer'>
            Explore Food
          </button>
        </div>
      </section>

      {/* --------------------culture-------------------------------- */}

      <section className='bg-[#444565] pb-20 flex flex-col justify-center'>
        <div className='flex justify-center'>
          <h1 className='title3 w-full relative z-20 text-center text-7xl font-bold text-white pt-10 mb-10 whitespace-nowrap overflow-hidden'>
            Japan Culture
          </h1>
        </div>
        <div className='flex flex-col gap-8 m-5 px-10'>
          {/* Tea Ceremony - Image Left */}
          <div className="culture1 bg-[#152266] h-[70vh] rounded-lg overflow-hidden shadow-2xl flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800"
              alt="Tea Ceremony"
              className="w-1/2 object-cover"
            />
            <div className="p-8 text-white flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Tea Ceremony</h2>
              <p className="text-gray-200 leading-relaxed">
                The Japanese tea ceremony, or Chanoyu, is a choreographed ritual of preparing and serving matcha green tea. This practice embodies harmony, respect, purity, and tranquility, reflecting Zen Buddhist philosophy through every precise movement.
              </p>
            </div>
          </div>

          {/* Cherry Blossoms - Image Right */}
          <div className="culture2 bg-[#152266] h-[70vh] rounded-lg overflow-hidden shadow-2xl flex flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800"
              alt="Cherry Blossoms"
              className="w-1/2 object-cover"
            />
            <div className="p-8 text-white flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Hanami (Cherry Blossoms)</h2>
              <p className="text-gray-200 leading-relaxed">
                Hanami is the centuries-old tradition of appreciating the fleeting beauty of cherry blossoms. Families and friends gather under blooming sakura trees for picnics, celebrating the transient nature of life.
              </p>
            </div>
          </div>

          {/* Martial Arts - Image Left */}
          <div className="culture3 bg-[#152266] h-[70vh] rounded-lg overflow-hidden shadow-2xl flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800"
              alt="Martial Arts"
              className="w-1/2 object-cover"
            />
            <div className="p-8 text-white flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Martial Arts</h2>
              <p className="text-gray-200 leading-relaxed">
                Japanese martial arts like Judo, Karate, and Kendo blend physical discipline with spiritual development. These practices teach respect, self-control, and perseverance.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Culture Button */}
        <div className='flex justify-center p-10'>
          <button className='bg-white py-4 px-8 rounded-lg text-[#152266] font-semibold hover:bg-[#152266] hover:text-white transition-all duration-300 ease-linear cursor-pointer'>
            Explore Culture
          </button>
        </div>
      </section>
    </div>
  );
}