import React, { useState } from "react";
import ModalCharacter from "./modal";

const Person = ({
    image,
    url,
    name,
    width,
    height,
    status,
    species,
    gender,
    type,
    origin,
    location
}) => {
    const [modalShow, setModalShow] = useState(false);

    const onClick = (event) => {
        event.preventDefault();
        setModalShow(true);
    };

    if (!image) {
        image = `https://via.placeholder.com/${width}x${height}`;
    }

    return (
        <>
            <div className="col-lg-3 col-md-6 col-xs-6 mb-3">
                <a
                    onClick={onClick}
                    href={url}
                    className="text-white bg-dark d-flex flex-column text-decoration-none"
                >
                    <img
                        className="character-item__img card-img-bottom"
                        src={image}
                        alt={name}
                        width={width}
                        height={height}
                    />
                    <div className="p-3">
                        <h5 className="overflow-hidden text-nowrap">{name}</h5>
                    </div>
                </a>
            </div>
            <ModalCharacter
                image={image}
                name={name}
                show={modalShow}
                status={status}
                species={species}
                gender={gender}
                type={type}
                origin={origin}
                location={location}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

Person.defaultProps = {
    image: "https://via.placeholder.com/150"
};

export default Person;
