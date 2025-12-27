
// "use client";

// import { ReactNode, useEffect, useRef } from "react";
// import Lenis from "lenis";

// interface SmoothScrollProps {
//     children: ReactNode;
// }

// export default function SmoothScroll({ children }: SmoothScrollProps) {
//     const lenisRef = useRef<Lenis | null>(null);

//     useEffect(() => {
//         // 1. Initialize Lenis
//         const lenis = new Lenis({
//             duration: 1.2,
//             easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard "out-expo" easing
//             orientation: 'vertical',
//             gestureOrientation: 'vertical',
//             smoothWheel: true,
//             wheelMultiplier: 1,
//             touchMultiplier: 2,
//             infinite: false,
//         });

//         lenisRef.current = lenis;

//         // 2. Optimized RAF loop
//         function raf(time: number) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }

//         const rafId = requestAnimationFrame(raf);

//         // 3. Optional: Sync with GSAP if you use it for your 3D Carousel
//         // lenis.on('scroll', ScrollTrigger.update) 

//         return () => {
//             cancelAnimationFrame(rafId);
//             lenis.destroy();
//         };
//     }, []);

//     return <>{children}</>;
// }


'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // useEffect(() => {

    //     if (typeof window === 'undefined') return
    //     if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    //         return
    //     }

    //     let lenis: any
    //     let rafId: number

    //         ; (async () => {
    //             try {
    //                 const { default: Lenis } = await import('lenis')
    useEffect(() => {
        if (typeof window === 'undefined') return
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }

        // Fixed type declarations
        let lenis: InstanceType<typeof import('lenis').default> | undefined
        let rafId: number | undefined

        (async () => {
            try {
                const { default: Lenis } = await import('lenis')
                // Add helper classes for CSS control
                const htmlEl = document.documentElement
                htmlEl.classList.add('lenis', 'lenis-smooth')

                lenis = new Lenis({
                    // Tuned for a "Tesla-like" smooth feel
                    duration: 1.2, // seconds based, keeps inertia pleasant
                    easing: (t: number) => 1 - Math.pow(1 - t, 3), // cubic easeOut
                    smoothWheel: true,
                    wheelMultiplier: 1.0,
                    touchMultiplier: 1.0,
                    autoRaf: false,
                })

                // const raf = (time: number) => {
                //     lenis.raf(time)
                //     rafId = requestAnimationFrame(raf)
                // }
                const raf = (time: number) => {
                    // Add the '?' before the dot
                    lenis?.raf(time)
                    rafId = requestAnimationFrame(raf)
                }
                rafId = requestAnimationFrame(raf)
            } catch (e) {
                console.warn('[Lenis] not installed or failed to load. Skipping smooth scroll.', e)
            }
        })()

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
            if (lenis) lenis.destroy()
            const htmlEl = document.documentElement
            htmlEl.classList.remove('lenis', 'lenis-smooth')
        }
    }, [])

    return <>{children}</>
}
