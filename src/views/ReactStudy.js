import { Row, Col, Card, Button, CardTitle, CardText
} from "reactstrap";



const BasicHooks = [
    {
      title: "useState",
      description:"",
      href: "https://reactjs.org/docs/hooks-reference.html#usestate",
      btnbg: "secondary",
    },
    {
      title: "useEffect",
      description:"",
      href: "https://reactjs.org/docs/hooks-reference.html#useeffect",
      btnbg: "secondary",
    },
    {
      title: "useContext",
      description:"",
      href: "https://reactjs.org/docs/hooks-reference.html#usecontext",
      btnbg: "secondary",
    },
  ];

const AdditionalHooks = [
    {
        title: "useReducer",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usereducer",
        btnbg: "secondary",
    },
    {
        title: "useCallback",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usecallback",
        btnbg: "secondary",
    },
    {
        title: "useMemo",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usememo",
        btnbg: "secondary",
    },
    {
        title: "useRef",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#useref",
        btnbg: "secondary",
    },
    {
        title: "useImperativeHandle",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#useimperativehandle",
        btnbg: "secondary",
    },
    {
        title: "useLayoutEffect",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#uselayouteffect",
        btnbg: "secondary",
    },
    {
        title: "useDebugValue",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usedebugvalue",
        btnbg: "secondary",
    },
    {
        title: "useDeferredValue",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usedeferredvalue",
        btnbg: "secondary",
    },
    {
        title: "useTransition",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#usetransition",
        btnbg: "secondary",
    },
    {
        title: "useId",
        description:"",
        href: "https://reactjs.org/docs/hooks-reference.html#useid",
        btnbg: "secondary",
    },
  ];


const ReactIntro = () => {
    return (
        <div>
            <Row className="p-4">
                <h2><i className="bi bi-patch-check-fill"></i> React Hooks</h2>
            </Row>
            <Row className="p-2">
                <h4>Basic Hooks</h4>
            </Row>
            <Row>
                {BasicHooks.map((bhs, index) => (
                <Col md="6" lg="3" key={index}>
                    <Card body color="white">
                        <CardTitle tag="h5">{bhs.title}</CardTitle>
                        <CardText>
                            {bhs.description}
                        </CardText>
                        <a href={bhs.href} target="_blank">
                            <Button color={bhs.btnbg}>more</Button>
                        </a>
                    </Card>
                </Col>
                ))}
            </Row>
            <Row className="p-2">
                <h4>Additional Hooks</h4>
            </Row>
            <Row>
                {AdditionalHooks.map((ahs, index) => (
                <Col md="6" lg="3" key={index}>
                    <Card body color="white">
                        <CardTitle tag="h5">{ahs.title}</CardTitle>
                        <CardText>
                            {ahs.description}
                        </CardText>
                        <a href={ahs.href} target="_blank">
                            <Button color={ahs.btnbg}>more</Button>
                        </a>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    );
}



export default ReactIntro;