import React, {Fragment} from 'react';

const Loader = () => {
    return (
        <Fragment>
            <div className="loader">
                <span className="loader__line"></span>
            </div>
        </Fragment>
    );
};

Loader.propTypes = {};

export default Loader;