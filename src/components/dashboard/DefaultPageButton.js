import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";



  const DefaultPageButton = () => {

    return (
        <div>
            <Row>
            <Col xs="12" md="6">
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                기존메뉴들 이동 버튼
                </CardTitle>
                <CardBody className="">
                <div className="button-group">
                    <Button className="btn" color="secondary" size="md" block href="/#/starter">
                    Dashboard
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/alerts">
                    Alert
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/badges">
                    Badegs
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/buttons">
                    Buttons
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/cards">
                    Cards
                    </Button>
                </div>
                </CardBody>
            </Card>
            </Col>
            <Col xs="12" md="6">
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                기존메뉴들 이동 버튼
                </CardTitle>
                <CardBody className="">
                <div className="button-group">
                    <Button className="btn" color="secondary" size="md" block href="/#/grid">
                    Grid
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/table">
                    Table
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/forms">
                    Forms
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/breadcrumbs">
                    Breadcrums
                    </Button>
                    <Button className="btn" color="secondary" size="md" block href="/#/about">
                    About
                    </Button>
                </div>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </div>
    );



  };

  export default DefaultPageButton;