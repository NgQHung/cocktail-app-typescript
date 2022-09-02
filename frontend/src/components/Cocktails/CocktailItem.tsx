import React from "react";

interface Props {
    id: number;
    name: string;
    image: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;
    return (
        <div className="bg-white rounded-lg mt-12 shadow-lg overflow-hidden mr-6">
            <img src={image} alt={name} className="w-64 h-32 sm:h-48 object-cover" />
            <div className="p-3 font-bold text-sm">{name}</div>
        </div>
    );
};

export default CocktailItem;
