import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Box = styled.div`
	position: absolute;
	top: 0px;
	width: 100%;
	height: 100%;
	pointer-events: initial;
`;

const ArcText = (props) => {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);

	let mouse = {
		x: null,
		y: null,
		radius: 60,
	};

	function mouseEvent(event) {
		mouse.x = event.x;
		mouse.y = event.y;
		mouse.radius = 100;
	}

	function resizeCanvas(canvas) {
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;
	}
	useEffect(() => {
		if (canvasRef.current) {
			let canvas = canvasRef.current;
			//Variable to store particles in
			canvas.width = window.innerWidth * 2;
			canvas.height = window.innerHeight * 2;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;

			let ctx = canvas.getContext('2d');
			// ctx.textBaseline = 'top';
			ctx.scale(2, 2);
			ctxRef.current = ctx;

			//Custom Particle object
			class Particle {
				//Values specific to particle
				constructor(x, y) {
					this.x = x;
					this.y = y;
					this.size = 2.89;
					this.baseX = this.x - 100;
					this.baseY = this.y - 100;
					this.weight = Math.random() * 6 + 8;
				}
				//What particle looks like
				draw() {
					ctx.fillStyle = 'black';
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fill();
				}
				//How particles interact
				update() {
					//How far the mouse is from X and Y
					let dx = mouse.x - this.x;
					let dy = mouse.y - this.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					let newDirectionX = dx / distance;
					let newDirectionY = dy / distance;
					let maxDistance = mouse.radius;
					let force = (maxDistance - distance) / maxDistance;
					let directionX = newDirectionX * force * this.weight;
					let directionY = newDirectionY * force * this.weight;
					if (distance < mouse.radius) {
						this.x -= directionX;
						this.y -= directionY;
					} else {
						if (this.x !== this.baseX) {
							let dx = this.x - this.baseX;
							this.x -= dx / 10;
						}
						if (this.y !== this.baseY) {
							let dy = this.y - this.baseY;
							this.y -= dy / 10;
						}
					}
				}
			}

			//Adding Particles to array to be used in animate loop below
			let particleArray = [];
			function init() {
				canvas = canvasRef.current;
				ctx = canvas.getContext('2d');

				//Draw Letters
				ctx.fillStyle = 'black';
				ctx.font = `${window.innerWidth / 70}px Brush Script MT`;
				ctx.fillText('Knowledge', 0, 30);
				const imageData = ctx.getImageData(
					0,
					0,
					parseFloat(canvas.style.width),
					parseFloat(canvas.style.height)
				);

				for (let y = 0, y2 = imageData.height; y < y2; y++) {
					for (let x = 0, x2 = imageData.width; x < x2; x++) {
						if (
							imageData.data[
								y * 4 * imageData.width + x * 4 + 3
							] > 128
						) {
							let positionX = x + 40;
							let positionY = y + 12;
							particleArray.push(
								new Particle(positionX * 5, positionY * 8)
							);
						}
					}
				}
				animate();
			}
			//Draw canvas for every frame
			function animate() {
				ctx.globalOpacity = 0.003;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				for (let i = 0; i < particleArray.length; i++) {
					particleArray[i].draw();
					particleArray[i].update();
				}
				requestAnimationFrame(animate);
			}

			init();
			window.addEventListener('mousemove', mouseEvent);
			window.addEventListener('resize', resizeCanvas(canvas));
			return () => {
				canvas.removeEventListener('mousedown', mouseEvent);
				canvas.removeEventListener('resize', resizeCanvas(canvas));
			};
		}
	});

	return (
		<Box>
			<canvas
				ref={canvasRef}
				width={window.innerWidth}
				height={window.innerHeight}
			/>
		</Box>
	);
};

export default ArcText;
