import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { format } from "date-fns";
import FormDialog from "./dialog";

export default function Comp(props){
    const [open, setOpen] = React.useState(false);
    var data = new Date(props.date);
    // var formattedDate = format(data, "MMMM do, yyyy H:mma");
    var formattedDate = format(data, "dd/MM/yyyy");
    var dataEUA = format(data, "yyyy/MM/dd");
    return(

        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                compromisso={props.compromisso}
                informacoes={props.informacoes}
                date={dataEUA}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />

            <div className="Container" onClick={() => setOpen(true)}>
                <Container>
                    <Row>
                    <Col><h1>{props.compromisso}</h1></Col>
                    <Col><p>{props.informacoes}</p></Col>
                    <Col><p>{formattedDate}</p></Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}