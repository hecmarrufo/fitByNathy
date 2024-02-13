import React, { useState, useEffect } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from 'react-icons/ai';
import Card from "../UI/Card";
import { testimonials } from "../data";
import Heart from "../images/Heart.png"
import gsap from "gsap";


const Testimonial = () => {
	const [index, setIndex] = useState(0);
	const [click__flag, setClick__flag] = useState(true);
	const { id, name, quote, job } = testimonials[index];

	const handleFlagChange = () =>{ setClick__flag(!click__flag); };
	const handleAfterTestimonial = () => {
		setIndex((prevValue) => {
			return (prevValue + 1 > testimonials.length - 1 ) ? 0 : prevValue + 1;
		});
	};

	
	useEffect(() => {
		if(document.querySelector('.testimonial')){
			const changeIndex__tl = gsap.timeline({repeat: -1, repeatDelay: 1});
			changeIndex__tl.from([".testimonial", '.testimonial__heart', '.progressBar'], {opacity:-10, duration:1.3})
			changeIndex__tl.to([".testimonial", '.testimonial__heart', '.progressBar'], {opacity:1, duration:1})
			changeIndex__tl.call(handleAfterTestimonial, [], "-=1.3")
			changeIndex__tl.to('.progressBar', {value: 100, ease: 'none', duration: 10})
		}
	},[click__flag]);


	return (
		<section className="testimonials">
			<div className="container testimonial__container">
				<SectionHead
					icon={<ImQuotesLeft />}
					title="Testimonios"
					className="testimonials__head"
				/>
				<div className="review__container"  onClick={handleFlagChange}>
					<div className="testimonial__heart">
						<img src={Heart} alt="testimonios"/>
					</div>
					<Card className={`testimonial card-${id}`}>
						<h2>{name||"Anónimo"}</h2>
						<small className="testimonial__title">{job}</small>
						<p className="testimonial__quote">{`"${quote}"`}</p>
						<div className='starRating'>
							<AiFillStar color='#f2b01e'/>
							<AiFillStar color='#f2b01e'/>
							<AiFillStar color='#f2b01e'/>
							<AiFillStar color='#f2b01e'/>
							<AiFillStar color='#f2b01e'/>
						</div>
						<progress className="progressBar" value="0" max="100"></progress>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
