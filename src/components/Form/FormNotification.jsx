import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FormNotification = (props) => {
    const { message, stateCls } = props;

    return (
        <Fragment>
            <div className={`form-notification  ${stateCls}`}>
                {message}
            </div>
        </Fragment>
        
    );
};

FormNotification.propTypes = {
    message: PropTypes.string
};

export default FormNotification;