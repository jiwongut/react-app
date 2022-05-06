import { Children } from "react";

const Container = ({Children}) => {
    return (<div style={{margin:20, padding:20, border:"1px solid gray"}}>
        {Children}
    </div>
    );
};

export default Container;