interface CardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export const Card = ({ title, description, image, link = "" }: CardProps) => {
    return (
        <div className="group relative bg-gray-800 pb-4 dark:bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
            <a href={(link) ? link : "#"} target={(link) ? "_blank" : "_self"}>
                <img src={image} alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="m-4">
                    <h2 className="text-xl font-semibold text-white dark:text-gray-100">{title}</h2>
                    <p className="text-gray-400 dark:text-gray-500">{description}</p>
                </div>

            </a>
        </div>
    )
}