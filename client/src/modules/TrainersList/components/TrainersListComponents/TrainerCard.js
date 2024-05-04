import React from 'react';
import {Button, Card} from "react-bootstrap";
import no_avatar_image from "../../../../static/no_avatar_image.jpg"
const TrainerCard = ({trainer, openInfo}) => {
    return (
        <Card className="bg-transparent w-1/3 trainer-card p-3" style={{height: "28rem"}} onClick={() => openInfo(trainer)}>
            {
                trainer.avatar ?
                <Card.Img src={"data:image/png;base64," + trainer.avatar} className="cursor-pointer">
                </Card.Img>
                    :

                    <Card.Img src={no_avatar_image} className="cursor-pointer">
                    </Card.Img>
            }

           <Card.Body className="p-3">
               <Card.Text>{trainer.name} {trainer.surname}</Card.Text>
               <Card.Text className="text-sm text-gray-400">
                   {
                       trainer.specialities.length > 1 ? trainer.specialities[0].name + " , " + trainer.specialities[1].name + " ..."
                           :  trainer.specialities[0].name
                   }

               </Card.Text>
           </Card.Body>

            <div className="flex justify-start pl-3">
                <Button type="submit" className="btn-light w-1/2" >
                    Записаться
                </Button>
            </div>

        </Card>
    );
};

export default TrainerCard;