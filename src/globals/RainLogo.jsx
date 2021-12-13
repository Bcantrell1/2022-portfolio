import React, { useRef, useEffect } from 'react';

const RainLogo = (props) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const backgroundImage = new Image();
		backgroundImage.src =
			'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MDAgMzEzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDAgMzEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIyODJCO30NCgkuc3Qxe2ZpbGw6I0NDQkFBMztzdHJva2U6I0ZGOTkwMDtzdHJva2Utd2lkdGg6MS42O30NCjwvc3R5bGU+DQo8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMxMyIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTc2LjYsNDEuNWMtNi40LDMuMS0xMy43LDEwLjQtMTkuMSwxOUM1MS45LDY5LjQsNDQsODYuMSw0MC4zLDk2LjhsLTIuOCw4LjJoLTcuMWMtOC43LDAtMTEuNiwxLjgtMTUsOS43DQoJQzkuOCwxMjcuMiwxNCwxNDAsMjMuNSwxNDBoNC4ybC0xLjMsNWMtMS45LDcuNS01LjIsMjcuMy02LjUsMzkuOWMtMS44LDE3LjctMC43LDQyLjMsMi41LDU0LjZjMy40LDEzLDcuOCwyMS44LDE0LDI4LjENCgljNy40LDcuMyw5LDcuNiw0MSw3LjJsMjYuOC0wLjNsMy43LTQuMmwzLjctNC4xbDEuMywyLjljMi4zLDUuMyw1LDUuOSwyNiw1LjloMTlsMi43LTMuNWMyLjItMi45LDMuOC04LjYsOS40LTMzLjgNCgljMy43LTE2LjYsNy44LTMyLjQsOS0zNWMzLjYtNy43LDguNS05LjksMTEuNi01LjJjMi4xLDMuMiwxLjgsNS40LTMuNiwyOS42Yy02LjUsMjktNi40LDM4LjQsMC42LDQ1bDIuNiwyLjRsMjkuMSwwLjMNCgljMTkuMSwwLjIsMzAuNS0wLjEsMzIuOS0wLjhjMi4zLTAuNiw0LjgtMi40LDYuNS00LjdjMi40LTMuMiwyLjgtNC43LDMuMi0xMS45YzAuMy04LjIsMC4yLTguNC0yLjctMTEuNGMtMi43LTIuNy0zLjctMy05LjEtMw0KCWMtMy40LDAtNi4xLTAuMy02LjEtMC42YzAtMC45LDguOS00MS4zLDkuNy00My44YzAuNS0xLjgsMS4zLTEuOCwxMi4yLTEuM2M2LjQsMC40LDE1LjUsMC43LDIwLjIsMC43aDguN2wtMy44LDguNw0KCWMtNS40LDEyLjctNywyMC4yLTcsMzIuOWMwLDE4LDQuNSwyOS41LDEzLjIsMzRjNC4xLDIuMSwyMC4zLDEuOSwyNC44LTAuNGM1LjUtMi43LDguMi04LjksNy44LTE4LjFjLTAuMy02LjYtMC42LTcuNi0zLjEtOS43DQoJYy0yLjQtMi4xLTMuOC0yLjQtMTAuMy0yLjRjLTYuNiwwLTcuOC0wLjMtOS45LTIuNWMtNC45LTQuOC0yLjctMTguOSw1LjQtMzQuNWMzLjktNy42LDQuMy04LDkuOS0xMC4xYzQuNy0xLjcsNy40LTcuNSw3LjYtMTUuOQ0KCWMwLTctMS45LTEyLjEtNS4xLTEzLjZjLTEtMC40LTcuNi0xLTE0LjgtMS4zbC0xMy0wLjZsLTEuMy02LjVjLTMuNS0xNy45LTEzLjctMTUuMy0xNy43LDQuNWwtMC41LDNsLTgtMC4zYy00LjQtMC4yLTgtMC41LTgtMC43DQoJczAuOS00LjMsMi05YzIuMi05LjUsMi42LTE4LjUsMC45LTIxLjhjLTEuOS0zLjYtNS4xLTYuNy03LTYuN2MtMi43LDAtNy4zLDQuNC05LjIsOC43Yy0xLjcsNC02LjcsMjQuMi02LjcsMjcuMw0KCWMwLDEuMy0xLDEuOS00LjIsMi4zYy04LjUsMS4xLTEyLjgsNy4yLTEyLjgsMThjMCw4LjQsMS45LDEyLjUsNi4xLDEzLjRjMi44LDAuNSwyLjksMC44LDIuNCwzLjdjLTIsOS41LTcuNywzNS42LTguNiwzOC44bC0xLDMuOA0KCWgtOS41Yy04LjYsMC05LjUtMC4yLTktMS44YzAuMy0wLjksMi40LTEwLDQuNy0yMC4yYzYuNy0yOS45LDYuNC00Mi40LTEuNi01MS43Yy02LjctNy45LTEzLjYtNy44LTIxLjUsMC4ybC00LjQsNC41bC0yLjEtMy44DQoJYy0yLjgtNS02LjYtNi4zLTEwLjMtMy41Yy0xLjUsMS4xLTMuNSwzLjMtNC40LDQuOWMtMC45LDEuNi00LjksMTcuNS04LjgsMzUuNGMtMy45LDE3LjktNy40LDMzLjMtNy42LDM0LjINCgljLTAuNSwxLjYtMS45LDEuOC0xMS41LDEuOGMtMTAsMC0xMS0wLjItMTAuNS0xLjhjMi4yLTcuMSwxMS45LTU0LDEyLjMtNTkuMmMwLjYtNy42LTEuMS0xMi45LTUuMS0xNS41Yy0zLjYtMi40LTcuOS0wLjUtMTEsNC43DQoJbC0yLjMsMy45TDExOSwxNzJjLTAuNy0xLjctMi41LTQuMS00LjEtNS40Yy02LjQtNS40LTE0LjQtNC4yLTIyLjEsMy41Yy02LjIsNi4yLTEzLjksMjEuOC0xNi43LDMzLjljLTIuMyw5LjktNC41LDMwLjEtMy43LDMzLjYNCglMNzMsMjQwaC05LjFjLTEwLjgsMC0xNC45LTEuNi0xOC41LTdjLTguMi0xMi4zLTYuOC01Ni45LDIuOC04OS4xbDEuMS0zLjdsMTUuMS0wLjVjMTguNi0wLjUsMjMuNC0xLjksMzAuOC04LjYNCgljNi4yLTUuNyw5LjctMTEuNiwxMy0yMi4xYzItNi42LDIuMy05LjQsMi4yLTIzLjVjMC0xNC42LTAuMi0xNi43LTIuNy0yNEMxMDMuMSw0Ny44LDk0LjQsMzksODUuNSwzOQ0KCUM4My4zLDM5LjEsNzkuMyw0MC4xLDc2LjYsNDEuNXogTTg3LjUsNzUuN2M0LDMuOSw0LjcsMTQsMS41LDIxLjFjLTIuOCw2LjMtOC4xLDguNC0xOS45LDhsLTktMC4zbDUtMTAuNA0KCUM3My4xLDc3LjcsODIuMSw3MC4zLDg3LjUsNzUuN3ogTTEwOS41LDE5My42YzIuOSwxLjIsNC43LDYuMiw0LDExLjNjLTEuNSwxMC41LTcuNiwzNC42LTkuMSwzNi4zYy0yLjEsMi4zLTguNiwyLjQtMTAuNSwwLjINCgljLTItMi41LTIuNC0xNy43LTAuNS0yNS41YzEuOS04LjEsNS45LTE3LDkuMy0yMC40QzEwNS4zLDE5Mi45LDEwNi43LDE5Mi41LDEwOS41LDE5My42TDEwOS41LDE5My42eiBNNDM5LDgxLjMNCgljLTYsMi45LTYuMyw0LTMzLjYsMTI5LjJjLTMuNiwxNi41LTYuNywzMC42LTcsMzEuM2MtMC4zLDEtNC40LDEuMy0xOS40LDFjLTIwLjgtMC4zLTIxLjQtMC41LTIyLjYtNi42bC0wLjYtMy4yaDEwLjENCgljNi4zLDAsMTEuNC0wLjUsMTMuNC0xLjRjMTguMy03LjYsMTkuNi01Mi41LDEuOC02NS4xYy0zLjUtMi41LTUuMi0zLTkuOS0yLjljLTMuMiwwLTcsMC43LTguNywxLjZjLTguNyw0LjctMTguNSwyMC40LTIyLjUsMzYuMg0KCWMtMywxMS45LTQuMiwyNy42LTMsMzkuMmMxLjMsMTIuOSw0LjEsMjEuMSw5LjEsMjYuN2M2LjksNy45LDQuNSw3LjcsNzcuNCw3LjdoNjQuMmwzLjQtMi4zYzUtMy4zLDYuOS03LjksNi45LTE2LjQNCgljMC02LjItMC4zLTcuNS0yLjYtMTAuMmwtMi42LTMuMWgtMTUuOWMtOS42LDAtMTUuOS0wLjQtMTUuOS0xYzAtMC41LDIuNy0xMyw2LTI3LjdjMjAuMi05MC43LDI1LTExMy43LDI1LTExOS40DQoJYzAtMTcuOC0xMy42LTE5LjYtMTguNS0yLjVjLTEuMiw0LjMtMTUuNCw2OC4xLTI4LDEyNS42Yy0yLDkuMS00LjEsMTguNC00LjcsMjAuOGwtMSw0LjJoLTEwLjRjLTUuNywwLTEwLjQtMC4yLTEwLjQtMC40DQoJczYuOS0zMS44LDE1LjQtNzAuMnMxNS43LTcyLDE2LjEtNzQuNUM0NTIuMSw4Ny4xLDQ0NS44LDc4LDQzOSw4MS4zTDQzOSw4MS4zeiBNMzczLDE5NWMxLjEsMS4xLDIsMy4zLDIsNC45YzAsNC42LTIuMyw2LjEtOS4xLDYuMQ0KCWMtMy4yLDAtNS45LTAuMi01LjktMC41YzAtMi4yLDQuOC05LjgsNi45LTExQzM3MC4zLDE5Mi42LDM3MC43LDE5Mi43LDM3MywxOTV6Ii8+DQo8L3N2Zz4NCg==';

		backgroundImage.addEventListener('load', () => {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext('2d');

			let particlesArray = [];
			const numberOfParticles = 1000;
			const detail = 1;

			canvas.style.width = backgroundImage.width =
				window.innerWidth + 'px';
			canvas.style.height = backgroundImage.height =
				window.innerHeight + 'px';

			ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
			const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let grid = [];
			for (let y = 0; y < canvas.height; y++) {
				let row = [];
				for (let x = 0; x < canvas.width; x++) {
					const red = pixels.data[y * 4 * pixels.width + x * 4];
					const green =
						pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
					const blue =
						pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
					const brightness =
						calculateRelativeBrightness(red, green, blue) / 250;
					const cell = [brightness];
					row.push(cell);
				}
				grid.push(row);
			}

			class Particle {
				constructor() {
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
					this.speed = 0;
					this.velocity = Math.random() * 0.3;
					this.size = Math.random() * 2 + 0.1;
				}
				update() {
					this.speed =
						grid[Math.floor(this.y / detail)][
							Math.floor(this.x / detail)
						];
					let movement = 1.1 - this.speed + this.velocity;

					this.y += movement - 0.2;
					if (this.y >= canvas.height) {
						this.y = 0;
						this.x = Math.random() * canvas.width;
					}
				}
				draw() {
					ctx.beginPath();
					ctx.fillStyle = '#B0CAEA';
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			function init() {
				for (let i = 0; i < numberOfParticles; i++) {
					particlesArray.push(new Particle());
				}
			}
			init();

			function animate() {
				ctx.globalAlpha = 0.05;
				ctx.fillStyle = 'rgb(0,0,0)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.globalAlpha = 0.2;
				for (let i = 0; i < particlesArray.length; i++) {
					particlesArray[i].update();
					ctx.globalAlpha = particlesArray[i].speed * 0.5;
					particlesArray[i].draw();
				}
				requestAnimationFrame(animate);
			}
			animate();

			function calculateRelativeBrightness(red, green, blue) {
				return Math.sqrt(
					red * red * 0.299 +
						green * green * 0.587 +
						blue * blue * 0.114
				);
			}

			const resizeCanvas = () => {
				canvas.style.width = window.innerWidth + 'px';
				setTimeout(() => {
					canvas.style.height = window.innerHeight + 'px';
				}, 0);
			};

			window.onresize = resizeCanvas;
		});
	}, []);

	return <canvas ref={canvasRef} {...props} />;
};

export default RainLogo;
