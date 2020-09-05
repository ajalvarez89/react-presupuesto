import React from 'react';
import {Alert} from 'react-bootstrap'

const Error = ({alertaError}) => (
<Alert variant='warning'>{alertaError}</Alert>
)

export default Error

