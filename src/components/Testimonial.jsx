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
	const { id, name, quote, job } = testimonials[index];

	const handleAfterTestimonial = () => {
		setIndex((prevValue) => {
			console.log('seveneleven1989',prevValue);
			return prevValue + 1;
		});
		if (index >= testimonials.length - 1) {
			setIndex(0);
		}
	};
	useEffect(() => {
		const interval = setInterval(() => {
			gsap.fromTo(`.card-${id}`, {
				autoAlpha: -10,
				onComplete: () => {
					/* eslint-disable no-unused-expressions */
					handleAfterTestimonial
				}
			},
			{
				duration: 0.5,
				autoAlpha: 1,
			})
		}, 2500);
		return () => clearInterval(interval); 
	// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


	return (
		<section className="testimonials">
			<div className="container testimonial__container">
				<SectionHead
					icon={<ImQuotesLeft />}
					title="Testimonios"
					className="testimonials__head"
				/>
				<div className="review__container"  onClick={handleAfterTestimonial}>
					<Card className={`testimonial cardo -${id}`}>
						<div className="testimonial__heart">
							<img src={Heart} alt="testimonios"/>
						</div>
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
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
