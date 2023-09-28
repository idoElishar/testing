import React from 'react';

interface Props {
    qrCodeUrl: string;
    date: string;
}

function MetaData(props: Props) {
    return (
        <div>
            <p>QR Code URL: {props.qrCodeUrl}</p>
            <p>Date: {props.date}</p>
            <p>Size: 100X100</p>
        </div>
    );
}

export default MetaData;
