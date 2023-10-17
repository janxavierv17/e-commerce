"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
	const pathname = usePathname();

	return (
		<section>
			<nav className="flex flex-row justify-between justify-items-center items-center">
				<div>
					<ul className="flex flex-row justify-items-center items-center p-4">
						<li className="pr-7">
							<Link href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 90 40"
									width="90"
									height="40"
									role="img"
									aria-label="ユニクロ｜UNIQLO"
								>
									<title>ユニクロ｜UNIQLO</title>
									<path
										fill="red"
										d="M50 0h40v40H50zM0 0h40v40H0z"
									></path>
									<g fill="#fff">
										<path d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z"></path>
										<g>
											<path d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z"></path>
										</g>
									</g>
								</svg>
							</Link>
						</li>
						<li className={`pl-4 pr-4 font-bold `}>
							<Link
								className={`link${
									pathname === "/au/women"
										? "active:border-4 border-b-4 border-b-slate-700"
										: ""
								}`}
								href="/au/women"
							>
								Women
							</Link>
						</li>
						<li className="pl-4 pr-4 font-bold">
							<Link
								className={`link${
									pathname === "/au/men"
										? "active:border-4 border-b-4 border-b-slate-700"
										: ""
								}`}
								href="/au/men"
							>
								Men
							</Link>
						</li>
						<li className="pl-4 pr-4 font-bold">
							<Link
								className={`link${
									pathname === "/au/kids"
										? "active:border-4 border-b-4 border-b-slate-700"
										: ""
								}`}
								href="/au/kids"
							>
								Kids
							</Link>
						</li>
						<li className="pl-4 pr-4 font-bold">
							<Link
								className={`link${
									pathname === "/au/baby"
										? "active:border-4 border-b-4 border-b-slate-700"
										: ""
								}`}
								href="/au/baby"
							>
								Baby
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul className="flex flex-row justify-items-end items-center p-4">
						<li className="pr-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
							>
								<path
									d="M3.4,21.9v-1.1c0-2.4,0.7-4.4,2.2-5.8C6.2,14.2,7,13.7,8,13.2l0.2-0.1L8,13.1c-1.6-1.3-2.4-3.3-2.2-5.4 c0.3-3.2,3-5.6,6.2-5.6c0.2,0,0.4,0,0.6,0c1.7,0.2,3.1,1,4.2,2.2s1.5,2.9,1.4,4.5C18,10.5,17.2,12,16,13l-0.1,0.1l0.2,0.1 c1,0.4,1.8,1,2.5,1.7c1.4,1.5,2.1,3.5,2.1,5.8v1.1L3.4,21.9L3.4,21.9z M12,14.5c-2.4,0-4.2,0.6-5.4,1.9c-0.7,0.7-1.2,1.9-1.5,3.5 l0,0.1h13.8l0-0.1c-0.3-1.7-0.7-2.8-1.4-3.6C16.2,15.1,14.4,14.5,12,14.5z M12,3.9c-2.3,0-4.2,1.7-4.4,4c-0.1,1.2,0.2,2.3,1,3.2 s1.8,1.5,3,1.6c0.2,0,0.3,0,0.4,0c2.3,0,4.2-1.7,4.4-4c0.1-1.2-0.2-2.3-1-3.2c-0.8-0.9-1.8-1.5-3-1.6C12.3,3.9,12.1,3.9,12,3.9z"
									fill="black"
									fillRule="evenodd"
								></path>
							</svg>
						</li>
						<li className="pr-7">
							<Link href="/au/profile">
								<span
									role="img"
									aria-label="Wish list"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
									>
										<path
											d="M12,22.5c-0.2,0-0.4-0.1-0.6-0.2L9.9,21c-3.6-3.2-7.3-6.6-8.4-10.1c-1.3-4.1,0.4-8,4-9.2 c2.3-0.8,4.7,0,6.5,1.8c1.8-1.9,4.2-2.6,6.5-1.8c3.6,1.2,5.3,5.1,4,9.2c-1.1,3.5-4.8,6.9-8.4,10.1l-1.5,1.3 C12.4,22.5,12.2,22.5,12,22.5z M7.4,3.2C7,3.2,6.5,3.3,6.1,3.4c-2.6,0.9-3.8,3.8-2.9,6.9c1,3,4.5,6.2,7.9,9.3l0.8,0.8l0.8-0.8 c3.4-3.1,7-6.3,7.9-9.3c1-3.1-0.2-6.1-2.9-6.9c-2.8-0.9-4.7,1.4-5.2,2.1c-0.2,0.2-0.4,0.4-0.7,0.4l0,0c-0.3,0-0.6-0.1-0.7-0.4 C10.8,4.9,9.4,3.2,7.4,3.2z"
											fill="black"
											fillRule="evenodd"
										></path>
									</svg>
								</span>
							</Link>
						</li>
						<li className="pr-7">
							<Link href="/au/cart">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path
										fill="black"
										d="M18.1,22.5c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H9.5l0,0.1c0.1,0.3,0.2,0.6,0.2,0.9 c0,1.4-1.2,2.6-2.6,2.6c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H4.5l-0.1,0c-1.3-0.1-2.3-1.3-2.3-2.6s1-2.4,2.3-2.6l0.1,0 V3.1H0.9V1.5h5.2V4l16.3,1.2c0.2,0,0.5,0.1,0.6,0.3c0.1,0.2,0.2,0.4,0.1,0.7l-2.4,8.5c-0.1,0.3-0.4,0.6-0.8,0.6H4.7 c-0.6,0-1,0.5-1,1s0.5,1,1,1h13.6l0.1,0c1.3,0.1,2.3,1.3,2.3,2.6C20.7,21.3,19.5,22.5,18.1,22.5z M18.1,18.9c-0.6,0-1,0.5-1,1 s0.5,1,1,1s1-0.5,1-1S18.6,18.9,18.1,18.9z M7.1,18.9c-0.6,0-1,0.5-1,1s0.5,1,1,1s1-0.5,1-1S7.7,18.9,7.1,18.9z M6.1,13.6h13.2l2-7 L6.1,5.6V13.6z"
									></path>
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
};
