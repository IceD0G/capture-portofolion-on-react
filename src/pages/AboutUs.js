import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServecesSection from '../components/ServecesSection';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
	return (
		<motion.div
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
		>
			<AboutSection />
			<ServecesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
