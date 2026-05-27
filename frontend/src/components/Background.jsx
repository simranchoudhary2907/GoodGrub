import { useEffect, useMemo, useState } from 'react'

// Eagerly import all images from src/assets/image (handle both lower/upper case)
// Supported: jpg, jpeg, png, webp
const importedLower = import.meta.glob('../assets/image/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
	eager: true,
	as: 'url',
})
const importedUpper = import.meta.glob('../assets/Image/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
	eager: true,
	as: 'url',
})

const importedImages = [
	...Object.values(importedLower),
	...Object.values(importedUpper),
]

function shuffleArray(originalArray) {
	const array = [...originalArray]
	for (let i = array.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const BackgroundSlideshow = ({ intervalMs = 6000, overlayOpacity = 0.35, transitionMs = 800 }) => {
	const images = useMemo(() => {
		const sources = importedImages.length ? shuffleArray(importedImages) : ['/1bg.jpg']
		return sources
	}, [])

	const [index, setIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		if (!images.length) return undefined
		const id = setInterval(() => {
			setIsTransitioning(true)
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % images.length)
				setIsTransitioning(false)
			}, transitionMs)
		}, intervalMs)
		return () => clearInterval(id)
	}, [images, intervalMs, transitionMs])

	if (!images.length) return null

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			{/* Current image sliding out to the left */}
			<div
				key={`current-${index}`}
				className={`absolute inset-0 bg-center bg-cover ${isTransitioning ? 'slide-out-left' : ''}`}
				style={{
					backgroundImage: `url(${images[index]})`,
					'--slide-duration': `${transitionMs}ms`,
				}}
			/>
			{/* Next image sliding in from the right */}
			<div
				key={`next-${index}`}
				className={`absolute inset-0 bg-center bg-cover ${isTransitioning ? 'slide-in-right' : 'hidden'}`}
				style={{
					backgroundImage: `url(${images[(index + 1) % images.length]})`,
					'--slide-duration': `${transitionMs}ms`,
				}}
			/>
			<div
				className="absolute inset-0"
				style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
			/>
		</div>
	)
}

export default BackgroundSlideshow


