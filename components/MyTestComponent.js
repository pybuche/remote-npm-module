import React, { PropTypes } from 'react';

const MyTestComponent = ({ value }) => {
    return (
        <div className="my-test-component">
            My Test Component : {{ value }}
        </div>
    );
};

MyTestComponent.propTypes = {
    value: PropTypes.string.isRequired,
};

export default MyTestComponent;
