import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  pageKey: string;
  children: ReactNode;
}

const pageVariants = {
  hidden: {
    opacity: 0.88,
    y: 12,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0.88,
    y: -8,
    filter: "blur(2px)",
  },
};

export function PageTransition({ pageKey, children }: PageTransitionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const addMotionClass = (selector: string, className: string) => {
      container
        .querySelectorAll<HTMLElement>(selector)
        .forEach((target) => target.classList.add(className));
    };

    addMotionClass("h1, h2, h3", "site-motion-heading");
    addMotionClass("button, a[href], [role='button']", "site-motion-action");
    addMotionClass(
      "img:not([alt*='logo' i]):not([src*='logo' i])",
      "site-motion-media",
    );
    addMotionClass("input, textarea, select", "site-motion-field");
    addMotionClass(
      "[class*='rounded-2xl'][class*='bg-white'], [class*='rounded-3xl'][class*='bg-white'], [class*='rounded-xl'][class*='bg-white'], [class*='shadow-lg'], [class*='shadow-md']",
      "site-motion-card",
    );
    addMotionClass(
      "[class*='rounded-full'][class*='text-'], [class*='rounded-full'][class*='bg-']",
      "site-motion-pill",
    );
    addMotionClass("li, article", "site-motion-list-item");

    const revealTargets = Array.from(
      container.querySelectorAll<HTMLElement>(
        "section, article, form, [data-page-reveal], .site-motion-card",
      ),
    );

    if (shouldReduceMotion) {
      revealTargets.forEach((target) => target.classList.add("page-reveal"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("is-pending");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("page-reveal");
      target.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 70, 280)}ms`,
      );

      const { top } = target.getBoundingClientRect();
      if (top < window.innerHeight * 1.1) {
        target.classList.add("is-visible");
        return;
      }

      target.classList.add("is-pending");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pageKey, shouldReduceMotion]);

  return (
    <motion.main
      key={pageKey}
      ref={containerRef}
      className="page-transition"
      variants={shouldReduceMotion ? undefined : pageVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      exit={shouldReduceMotion ? undefined : "exit"}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.main>
  );
}
