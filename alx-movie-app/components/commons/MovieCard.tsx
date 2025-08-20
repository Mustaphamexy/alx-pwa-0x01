import { MovieProps } from "@/interfaces/index";

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear}) => {
    return (
        <div className="h-[563px]">
            <div>
                <img src={posterImage} alt={title} width={100} height={100} className="w-full h-[430px]  rounded-md hover:cursor-pointer" />
            </div>
            <div className="flex justify-between py-4">
                <p className="flex justify-between py-4">{title}</p>
                <p className="text-xl text-[#E2D609]">{releaseYear}</p>
            </div>
        </div>
        
    )
}

export default MovieCard;