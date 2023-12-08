import Image from 'next/image'

 const Hero = ({src,alt}) => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Image src={src} width={500} height={500} alt={alt} />
                <div>
                    <h1 className="text-5xl font-bold leading-normal">{alt}</h1>
                    <p className="py-6 ">Embark on a transformative journey with our newly added product—immerse yourself in the unrivaled experience designed to not only simplify but enhance your daily life, bringing you unparalleled ease and comfort.</p>
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    )
}
export default Hero