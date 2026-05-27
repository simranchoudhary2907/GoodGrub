const Logo = ({ className = 'h-8 w-auto' }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 120 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Food Rescue Hub"
			role="img"
		>
			<defs>
				<radialGradient id="heartGrad" cx="25%" cy="20%" r="85%">
					<stop offset="0%" stopColor="#ff7b7b"/>
					<stop offset="100%" stopColor="#c84b4b"/>
				</radialGradient>
				<linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
					<stop offset="100%" stopColor="#000000" stopOpacity="0.45"/>
				</linearGradient>
				<linearGradient id="zigGrad" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
					<stop offset="100%" stopColor="#000000" stopOpacity="0.45"/>
				</linearGradient>
				<filter id="barBlur" x="-20%" y="-50%" width="140%" height="200%">
					<feGaussianBlur stdDeviation="1.8" />
				</filter>
				<filter id="heartShadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.25"/>
				</filter>
			</defs>

			{/* side bars */}
			<rect x="6" y="50" width="26" height="10" rx="5" fill="url(#barGrad)" filter="url(#barBlur)" />
			<rect x="88" y="50" width="26" height="10" rx="5" fill="url(#barGrad)" filter="url(#barBlur)" />

			{/* heart */}
			<g transform="translate(36,12) scale(2)">
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
					fill="url(#heartGrad)"
					filter="url(#heartShadow)"
				/>
			</g>

			{/* heartbeat line */}
			<path
				d="M10 55 H36 L48 43 L60 67 H82 H110"
				stroke="url(#zigGrad)"
				strokeWidth="8"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				filter="url(#barBlur)"
			/>
		</svg>
	)
}

export default Logo


