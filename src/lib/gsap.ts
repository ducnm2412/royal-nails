'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/** Đăng ký plugin đúng một lần; mọi component motion import từ đây (theo skill gsap-core / gsap-scrolltrigger). */
gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
